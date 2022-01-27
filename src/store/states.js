import axios from 'axios';
import { atom, selector } from 'recoil';

/****** ATOMS ******/
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

export const windowSizeState = atom({
  key: 'windowSizeState',
  default: {
    width: null,
    height: null,
  },
});

/****** SELECTORS ******/
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
        };
      }),
    };
    return decodedResponseData.results;
  },
  set: ({ set }, newValue) => {
    set(musicListState, newValue);
  },
});
