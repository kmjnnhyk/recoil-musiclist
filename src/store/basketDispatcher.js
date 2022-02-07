import { useRecoilCallback } from 'recoil';
import { musicBasketState } from './states';

export const createBasketDispatcher = () => {
  let isDuplication = false;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const addToBasket = useRecoilCallback(({ set }) => (item) => {
    const newItem = {
      id: item.id,
      title: item.title,
    };
    //set(musicBasketState, (oldItems) => [...oldItems, newItem]);
    set(musicBasketState, (oldItems) => {
      oldItems.map((olditem) => {
        if (olditem.id === newItem.id) {
          isDuplication = true;
          // eslint-disable-next-line array-callback-return
          return;
        }
        return [...new Set([...oldItems, newItem])];
      });
    });
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const deleteFromBasket = useRecoilCallback(({ set }) => (id) => {
    set(musicBasketState, (oldItems) => {
      const newItems = oldItems.filter((oldItem) => oldItem.id !== id);
      return newItems;
    });
  });
  return {
    addToBasket,
    deleteFromBasket,
    isDuplication,
  };
};
