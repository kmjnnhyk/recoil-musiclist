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
    <StyleAtoms.Li
      key={item.id}
      background={'var(--black)'}
      color={'var(--white)'}
      width={'100%'}
      height={'48px'}
      display={'flex'}
      alignItems={'center'}
      marginTop={'16px'}
      margin={'0 auto'}
      whiteSpace={'nowrap'}
      overflow={'hidden'}
    >
      <StyleAtoms.P
        fontSize={'14px'}
        fontWeight={'100'}
        animationName={'slidein'}
        animationDuration={'12s'}
        animationIterationCount={'infinite'}
        animationTimingFunction={'linear'}
        paddingLeft={'100%'}
        hover={{ animationPlayState: 'paused' }}
      >
        {item.title}
        <StyleAtoms.Button
          onClick={handleClick}
          background={'rgba(0, 0, 0, 0)'}
          border={'none'}
          fontSize={'18px'}
          fontWeight={'900'}
          marginLeft={'12px'}
          color={'var(--white)'}
        >
          DELETE
        </StyleAtoms.Button>
      </StyleAtoms.P>
    </StyleAtoms.Li>
  );
}
