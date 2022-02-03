import React, { Suspense, useEffect, useRef } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import MusicBasketContainer from '../containers/MusicBasketContainer';
import MusicListContainer from '../containers/MusicListContainer';
import MusicSearcherContainer from '../containers/MusicSearcherContainer';
import { createBasketDispatcher } from '../store/basketDispatcher';
import { createDispatcher } from '../store/musicDispatcher';
import { dispatcherBasketState, dispatcherState } from '../store/states';
import Loading from './Loading';

function Home() {
  const setDispatcher = useSetRecoilState(dispatcherState);
  const setBasketDispatcher = useSetRecoilState(dispatcherBasketState);

  const dispatcherRef = useRef(createDispatcher());
  const dispatcherBasketRef = useRef(createBasketDispatcher());

  useEffect(() => {
    setDispatcher(dispatcherRef.current);
    setBasketDispatcher(dispatcherBasketRef.current);
  }, [setBasketDispatcher, setDispatcher]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <MusicSearcherContainer />
        <MusicListContainer />
        <MusicBasketContainer />
      </Suspense>
    </>
  );
}

export default Home;
