import { useRecoilCallback } from 'recoil';
import { useToast } from '../toast/useToast';
import { musicBasketState } from './states';

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
    // duplication ? openToast({ content: 'DUPLICATED' }) : openToast({ content: 'ADD' });
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
