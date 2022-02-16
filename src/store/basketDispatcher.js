import { useRecoilCallback } from 'recoil';
import { musicBasketState } from './states';

export const createBasketDispatcher = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const addToBasket = useRecoilCallback(({ set }) => (id, title) => {
    const item = {
      ...id,
      ...title,
    };
    set(musicBasketState, (oldItems) => [...oldItems, item]);
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const deleteFromBasket = useRecoilCallback(({ set }) => (id) => {
    set(musicBasketState, (oldItems) => {
      return oldItems.filter((oldItem) => oldItem.id !== id);
    });
  });
  return {
    addToBasket,
    deleteFromBasket,
  };
};
