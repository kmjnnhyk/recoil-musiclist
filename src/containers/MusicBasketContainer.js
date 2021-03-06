import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import Basket from '../components/Basket';
import BasketToggleButton from '../components/BasketToggleButton';
import { CreateBasketDispatcher } from '../store/basketDispatcher';
import {
  dispatcherBasketState,
  musicBasketState,
  musicBasketStateState,
} from '../store/states';

export default function MusicBasketContainer() {
  const [isOpen, setIsOpen] = useState(true);
  const basketList = useRecoilValue(musicBasketState);
  const resetBasket = useResetRecoilState(musicBasketState);
  const { basketTotalNum } = useRecoilValue(musicBasketStateState);

  const setBasketDispatcher = useSetRecoilState(dispatcherBasketState);
  const dispatcherBasketRef = useRef(CreateBasketDispatcher());

  useEffect(() => {
    setBasketDispatcher(dispatcherBasketRef.current);
  }, [setBasketDispatcher]);

  const onToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  console.log('music Basket container rendered');
  return (
    <>
      <BasketToggleButton onToggle={onToggle} totalNum={basketTotalNum} />
      <Basket
        items={basketList}
        isOpen={isOpen}
        onToggle={onToggle}
        onReset={resetBasket}
      />
    </>
  );
}
