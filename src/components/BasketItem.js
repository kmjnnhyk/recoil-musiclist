import React from 'react';
import { useRecoilValue } from 'recoil';
import { dispatcherBasketState } from '../store/states';

export default function BasketItem({ item }) {
  const dispatcher = useRecoilValue(dispatcherBasketState);

  const handleClick = () => {
    dispatcher.deleteFromBasket(item.id);
  };

  return (
    <li key={item.id}>
      {item.title}
      <button onClick={handleClick}>delete</button>
    </li>
  );
}
