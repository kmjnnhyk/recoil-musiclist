import React from 'react';
import { useRecoilValue } from 'recoil';
import { dispatcherBasketState } from '../store/states';

function Music({ music }) {
  const dispatcher = useRecoilValue(dispatcherBasketState);
  const newItem = {
    id: music.id,
    title: music.title,
  };
  const handleClick = () => {
    console.log(newItem);
    dispatcher.addToBasket(newItem);
  };
  console.log('music component');
  return (
    <li>
      <img src={music.thumb_url} alt='thumb img' />
      {music.title}
      <button onClick={handleClick}>ADD</button>
    </li>
  );
}

export default Music;
