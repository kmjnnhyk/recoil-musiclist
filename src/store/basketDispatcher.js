import { useRecoilCallback } from 'recoil';
import { musicBasketState } from './states';

export const createBasketDispatcher = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const addToBasket = useRecoilCallback(({ snapshot, set }) => (item) => {
  //   const prevItems = snapshot.getLoadable(musicBasketState);
  //   const newItem = {
  //     id: item.id,
  //     title: item.title,
  //   };
  //   console.log(prevItems);
  //   set(musicBasketState, (oldItems) => [...oldItems, newItem]);
  // });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const addToBasket = useRecoilCallback(({ set }) => (item) => {
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
