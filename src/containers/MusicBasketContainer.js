import React, { useCallback, useState } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import Basket from '../components/Basket';
import BasketToggleButton from '../components/BasketToggleButton';
import { musicBasketState, musicBasketStateState } from '../store/states';

export default function MusicBasketContainer() {
  const { filteredBasketList } = useRecoilValue(musicBasketStateState);
  const [isOpen, setIsOpen] = useState(true);
  const { basketTotalNum } = useRecoilValue(musicBasketStateState);
  const resetBasket = useResetRecoilState(musicBasketState);

  const onToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  console.log('music Basket container rendered');
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
