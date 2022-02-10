import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import Basket from '../components/Basket';
import BasketToggleButton from '../components/BasketToggleButton';
import { createBasketDispatcher } from '../store/basketDispatcher';
import {
  dispatcherBasketState,
  musicBasketState,
  musicBasketStateState,
} from '../store/states';

export default function MusicBasketContainer() {
  const { filteredBasketList, basketTotalNum, isBasketDuplicated } =
    useRecoilValue(musicBasketStateState);
  const [isOpen, setIsOpen] = useState(true);
  const resetBasket = useResetRecoilState(musicBasketState);

  const setBasketDispatcher = useSetRecoilState(dispatcherBasketState);
  const dispatcherBasketRef = useRef(createBasketDispatcher());

  useEffect(() => {
    setBasketDispatcher(dispatcherBasketRef.current);
  }, [setBasketDispatcher]);

  const onToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  console.log('music Basket container rendered');
  console.log('바스켓 중복', isBasketDuplicated);
  return (
    <>
      <BasketToggleButton onToggle={onToggle} totalNum={basketTotalNum} />
      <Basket
        items={filteredBasketList}
        isOpen={isOpen}
        onToggle={onToggle}
        onReset={resetBasket}
      />
    </>
  );
}
