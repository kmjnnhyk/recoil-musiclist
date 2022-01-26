import React from 'react';
import { useRecoilValue } from 'recoil';
import Basket from '../components/Basket';
import { musicBasketState } from '../store/states';

export default function MusicBasketContainer() {
  const items = useRecoilValue(musicBasketState);
  console.log('music Basket container rendered');
  return (
    <>
      <Basket items={items} />
    </>
  );
}
