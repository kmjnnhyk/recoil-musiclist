import React from 'react';
import { useRecoilValue } from 'recoil';
import { dispatcherBasketState } from '../store/states';
import StyleAtoms from '../StyleAtoms';

export default function BasketItem({ item }) {
  const dispatcher = useRecoilValue(dispatcherBasketState);

  const handleClick = () => {
    dispatcher.deleteFromBasket(item.id);
  };

  return (
    <StyleAtoms.Li key={item.id}>
      {item.title}
      <StyleAtoms.Button
        onClick={handleClick}
        background={'rgba(0, 0, 0, 0)'}
        border={'none'}
        fontSize={'12px'}
        fontWeight={'900'}
        marginLeft={'12px'}
      >
        DELETE
      </StyleAtoms.Button>
    </StyleAtoms.Li>
  );
}
