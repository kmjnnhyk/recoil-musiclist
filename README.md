# 음악 검색 API인 Rapid API를 이용한<br/>Music Searcher🎧

이번 프로젝트의 가장 큰 목적은 **Recoil**을 사용한 전역적인 상태 관리를 익히는 것입니다. **Redux와** 비교했을 때 부수적으로 설치하고 셋팅해야 하는 부분이 훨씬 적어서 일단 간편했고, **selector**가 캐싱을 알아서 해주다 보니까 훨씬 편했습니다. Redux는 큰 저장소에서 각 상태를 관리하고 dispatch 해주는 느낌이었다면 Recoil은 작은 atom 단위로 상태를 정의하고 selector로 이 작은 atom들을 구독하며 RecoilCallback 등의 유틸 함수를 이용하여 Redux의 dispatcher와 비슷한 기능 또한 자유롭게 구현할 수 있었습니다. 다만 아직 계속 개발 중이고 자료가 많지 않다는게 단점이지만 충분히 Redux보다 매력적인 부분들이 많기 때문에 꾸준히 사용해보려고 합니다.

## 📍RECOIL

- 기본적인 atoms

  ```javascript
  export const musicListState = atom({
    key: 'musicListState',
    default: {},
  });

  export const dispatcherState = atom({
    key: 'dispatcherState',
    default: undefined,
  });

  export const dispatcherBasketState = atom({
    key: 'dispatcherBasketState',
    default: undefined,
  });

  export const musicBasketState = atom({
    key: 'musicBasketState',
    default: [],
  });

  export const toastState = atom({
    key: 'toastState',
    default: [],
  });

  export const windowSizeState = atom({
    key: 'windowSizeState',
    default: {
      width: null,
      height: null,
    },
  });
  ```

  기본적으로 다음과 같은 `atom`들을 만들어 음악 리스트, 음악 바스켓, 토스트 목록들을 관리하고 있으며 redux의 `dispatcher`를 만들기 위한 `atom` 또한 존재합니다. window size도 전역적으로 사용하기 위하여 따로 `atom`으로 만들어주었습니다.

- API 요청

  ```javascript
  export const searchQueryOptions = atom({
    key: 'searchQueryOptions',
    default: {
      method: 'GET',
      url: 'https://genius.p.rapidapi.com/search',
      params: {},
      headers: {
        'x-rapidapi-host': 'genius.p.rapidapi.com',
        'x-rapidapi-key': '507790a509mshc545e226519de75p1bbc78jsn41f9731c0424',
      },
    },
  });

  export const createDispatcher = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const changeQuery = useRecoilCallback(({ set }) => (input) => {
      set(searchQueryOptions, (oldQuery) => {
        const newQuery = {
          ...oldQuery,
          params: {
            q: input,
          },
        };
        return newQuery;
      });
    });
    return {
      changeQuery,
    };
  };

  export const searchQuerySelector = selector({
    key: 'searchQuerySelector',
    get: async ({ get }) => {
      const options = get(searchQueryOptions); // get으로 구독한 상태가 변하면 아래 로직이 실행됨
      if (options === undefined) return undefined;

      const response = await axios.request(options);
      if (response.error) throw response.error('api error');

      const decodedResponseData = {
        ...response.data.hits,
        results: response.data.response.hits.map((res) => {
          const info = res.result;
          return {
            id: info.id,
            title: info.full_title,
            thumb_url: info.header_image_thumbnail_url,
            artist: info.artist_names,
          };
        }),
      };
      return decodedResponseData.results;
    },
  });

  dispatcher.changeQuery(searchInput);

  function Home() {
    const setDispatcher = useSetRecoilState(dispatcherState);
    const dispatcherRef = useRef(createDispatcher());

    useEffect(() => {
      setDispatcher(dispatcherRef.current);
    }, [setDispatcher]);

    return (
      <>
        <Suspense fallback={<Loading />}>
          <MusicSearcherContainer />
          <MusicListContainer />
          <MusicBasketContainer />
        </Suspense>
        <ToastContainer />
      </>
    );
  }
  export default Home;
  ```

  먼저 createDispatcher에 searchQueryOptions을 변경할 수 있는 `recoilCallback` 함수를 만들었습니다. searchQuerySelector에서는 searchQueryOptions을 구독하여 option 값이 변경되면 `selector`에서 API에 변경된 query를 전송하여 데이터를 받아오는 로직으로 API 요청을 처리했습니다. `dispatcher`는 Home 컴포넌트가 렌더링 될 때 처음 실행되며 다시 렌더링하더라도 유지가 되도록 `useRef`를 사용하여 dispatcher가 새로 set 될 때만 바뀌게 설정했습니다.

  <br/>

  > 😀 Recoil의 구독 개념이 처음에는 익숙치 않아서 그 로직을 짜는 부분에서 어려움을 겪었지만 공식 문서의 비동기 데이터 쿼리를 어떻게 처리하는지 가이드를 보며 따라 구현했고 응답받은 데이터는 가공하여 return 해주는 식으로 구현했습니다.

<br/>

- Basket 구현

  ```javascript
  export const CreateBasketDispatcher = () => {
    const { openToast } = useToast();

    const addToBasket = useRecoilCallback(({ set }) => (newId, newTitle) => {
      const item = {
        id: newId,
        title: newTitle,
      };

      set(musicBasketState, (oldItems) => {
        let duplicated = false;
        /* basket 중복 검사 */
        for (var i = 0; i < oldItems.length; i++) {
          if (oldItems[i].title === newTitle) {
            duplicated = true;
            break;
          }
        }
        if (duplicated) {
          openToast({ content: 'DUPLICATED' });
          duplicated = false;
          return [...oldItems];
        } else {
          openToast({ content: 'ADD' });
          return [...oldItems, item];
        }
      });
    });

    const deleteFromBasket = useRecoilCallback(({ set }) => (id) => {
      set(musicBasketState, (oldItems) => {
        openToast({ content: 'DELETED' });
        return oldItems.filter((oldItem) => oldItem.id !== id);
      });
    });

    return {
      addToBasket,
      deleteFromBasket,
    };
  };
  dispatcher.addToBasket(getRandomID(), music.title);
  dispatcher.deleteFromBasket(item.id);
  ```

  basket을 구현할땐 담당하는 기능을 명확하게 표현하기 위하여 Music list를 요청하는 dispatcher와 구분지어 추가적으로 만들었습니다. 그리고 마찬가지로 recoilCallback 함수를 이용하여 원하는 데이터를 `set` 함수를 이용해 원하는 atom을 업데이트해주는 방식으로 구현했습니다. 또한 따로 구현한 토스트 기능을 넣어 추가하거나 삭제할 때 알림이 뜰 수 있게 했습니다.

  <br/>

  > 😀 addToBasket 함수를 구현할 때 basket item을 추가하기 전 중복 검사를 먼저 실행할 수 있게 코드를 짜는 과정에서 어려움을 겪으며 recoilCallback 함수 내의 **set**, **snapshot**등의 개념을 이해할 수 있었고 recoilCallback 함수를 호출하면 set은 나중에 실행된다는 점을 알았습니다.

  <br/>

## 📍TOAST 기능 구현

- useToast

  ```javascript
  export const useToast = () => {
    const [toasts, setToasts] = useRecoilState(toastState);

    const removeItemById = useCallback((array, id) => {
      return array.filter((item) => item.id !== id);
    }, []);

    const openToast = useCallback(
      (toast) => {
        const toastId = getRandomID();
        setToasts((oldToasts) => [...oldToasts, { ...toast, id: toastId }]);
        setTimeout(
          () => setToasts((oldToasts) => removeItemById(oldToasts, toastId)),
          TOAST_DELAY + 600
        );
      },
      [removeItemById, setToasts]
    );

    return { toasts, openToast };
  };
  ```

  전역적으로 사용하기 위하여 recoil을 이용했고 아무 컴포넌트에서 openToast 함수를 이용하여 toast 메세지를 보내면 toastState atom에 쌓이는 방식입니다. setTimeout을 이용하여 일정 시간 지나면 toastState에서 사라지게 했습니다.

  <br/>

  > 😀 처음에는 openToast 함수를 어느 위치에서 불러야 할 지 고민을 했습니다. recoilCallback 함수 안에서 실행시켜야 하다 보니 recoillCallback 내에서 한 줄 한 줄 console.log로 어떤 순서로 실행되는지 파악을 먼저 했고 그 후 recoilCallback 안에 set에서 중복 처리 및 openToast를 실행하도록 설정했습니다.

  <br/>

- ToastContainer

  ```javascript
  const ToastContainer = () => {
    const { toasts } = useToast();
    return (
      <>
        <StyleAtoms.Div
          position={'fixed'}
          bottom={'24px'}
          right={'50%'}
          transform={'translateX(50%)'}
          width={'80%'}
          maxWidth={'540px'}
          opacity={'0.8'}
          display={'flex'}
          flexDirection={'column-reverse'}
        >
          <TransitionGroup>
            {toasts.map((toast) => {
              return (
                <CSSTransition timeout={500} classNames='toast-animation' key={toast.id}>
                  <StyleAtoms.ToastItem
                    height={'64px'}
                    background={'var(--orange)'}
                    marginBottom={'12px'}
                  >
                    {toast.content}
                  </StyleAtoms.ToastItem>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </StyleAtoms.Div>
      </>
    );
  };
  export default ToastContainer;
  ```

  container는 useToast를 사용하여 보여지는 UI를 담당하고 있습니다.

## 📍STYLED-COMPONENTS & REACT-TRANSITION-GROUP

```javascript
import styled from 'styled-components';

export default styled.div`
  margin-bottom: ${({ marginBottom }) => marginBottom};
  display: grid;
  place-items: center;
  font-size: 900;
  font-weight: ${({ fontWeight }) => fontWeight};
  position: ${({ position }) => position};
  width: 100%;
  height: ${({ height }) => height};
  right: 50%;
  bottom: 344px;
  animation: ${({ animation }) => animation};
  animation-delay: ${({ animation }) => animation};
  transition: all 0.3s ease-in;
  background: ${({ background }) => background};
  border-radius: 3em;
`;

import Input from './Input';
import Div from './Div';
import Button from './Button';
import Li from './Li';
import Balloon from './Balloon';
import Ul from './Ul';
import SideBar from './SideBar';
import P from './P';
import Toast from './Toast';
import ToastItem from './ToastItem';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Input,
  Div,
  Button,
  Li,
  Balloon,
  Ul,
  SideBar,
  P,
  Toast,
  ToastItem,
};

<StyleAtoms.Div
  display={'grid'}
  gridTemplateColumns={'1fr 1fr 1fr'}
  gap={'24px'}
  padding={'24px 24px'}
>

```

이번 프로젝트에서는 주로 `styled-components`와 `react-transition-group` 라이브러리를 이용하여 css를 작업했습니다. styled-components는 위 코드처럼 모듈화를 통해 직업 컴포넌트에서 수정 및 props 전달을 통해 좀 더 직관적으로 작업할 수 있게 되었습니다. react-transition-group은 번들 사이즈가 비교적 가장 작은 라이브러리라 이 프로젝트는 간단한 반응형 애니메이션을 구현하면 적당하기 때문에 선택했습니다.

- 검색 화면
<img width="480" alt="gif files" src="https://user-images.githubusercontent.com/80577900/154900550-9540a1c1-c094-4a84-a040-7a4e6294d779.gif">
  <br/>

- 반응형 음악 리스트
<img width="480" alt="gif files" src="https://user-images.githubusercontent.com/80577900/154900561-c0592147-a1bb-4b88-b873-ecceffb38440.gif">
  <br/>

- 음악 추가
<img width="480" alt="gif files" src="https://user-images.githubusercontent.com/80577900/154900530-f1b3d249-c5a5-4d84-a7bf-08577682b110.gif">
  <br/>
  toast 각각의 id가 트리거가 되어서 생성되거나 사라질때의 애니메이션을 정의하여 구현합니다.

  ```javascript
  import styled from 'styled-components';

  export default styled.div`
    margin-bottom: ${({ marginBottom }) => marginBottom};
    display: grid;
    place-items: center;
    font-size: ${({ fontSize }) => fontSize};
    font-weight: 900;
    position: ${({ position }) => position};
    width: 100%;
    height: ${({ height }) => height};
    right: 50%;
    animation: ${({ animation }) => animation};
    animation-delay: ${({ animation }) => animation};
    background: ${({ background }) => background};
    border-radius: 3em;
    &.toast-animation-enter {
      max-height: 0;
      opacity: 0;
    }
    &.toast-animation-enter-active {
      max-height: ${({ height }) => height};
      opacity: 1;
      transition: all 500ms;
    }
    &.toast-animation-exit {
      max-height: ${({ height }) => height};
      opacity: 1;
    }
    &.toast-animation-exit-active {
      max-height: 0;
      opacity: 0;
      transition: all 500ms;
    }
  `;

  <TransitionGroup>
    {toasts.map((toast) => {
      return (
        <CSSTransition timeout={500} classNames='toast-animation' key={toast.id}>
          <StyleAtoms.ToastItem
            height={'64px'}
            background={'var(--orange)'}
            marginBottom={'12px'}
          >
            {toast.content}
          </StyleAtoms.ToastItem>
        </CSSTransition>
      );
    })}
  </TransitionGroup>;
  ```

- 반응형 음악 장바구니
<img width="480" alt="gif files" src="https://user-images.githubusercontent.com/80577900/154900557-e478dc2f-112d-4d0e-ba1f-fec750fd3df4.gif">

## 📍프로젝트를 마치며

이제 Recoil에 대한 감이 좀 잡혔기 때문에 다음 프로젝트에서는 atom, selector의 구독 관계를 조금 더 체계적으로 구성해야겠고 recoilCallback과 atom effect 등 좀 더 심화적인 사용 또한 진행해봐야겠다. 그리고 router까지 적용하여 좀 더 효과적으로 렌더링이 될 수 있게 더욱 세밀하게 코드를 구성하는 노력이 들어가야 할 것 같고 react-transition-group이 페이지 전환 효과도 적용할 것이다. 디자인 레이아웃도 재사용성을 높일 수 있게 모듈화를 진행해봐야겠다.👍🏻
