import React, { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Basket from '../components/Basket';
import BasketToggleButton from '../components/BasketToggleButton';
import { musicBasketState, musicBasketStateState } from '../store/states';

export default function MusicBasketContainer() {
  const items = useRecoilValue(musicBasketState);
  const [isOpen, setIsOpen] = useState(false);
  const { basketTotalNum } = useRecoilValue(musicBasketStateState);

  const onToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  console.log('music Basket container rendered');
  return (
    <>
      <BasketToggleButton onToggle={onToggle} totalNum={basketTotalNum} />
      <Basket items={items} isOpen={isOpen} onToggle={onToggle} />
    </>
  );
}
