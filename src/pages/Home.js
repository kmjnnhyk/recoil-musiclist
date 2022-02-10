import React, { Suspense, useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import MusicBasketContainer from '../containers/MusicBasketContainer';
import MusicListContainer from '../containers/MusicListContainer';
import MusicSearcherContainer from '../containers/MusicSearcherContainer';
import { createDispatcher } from '../store/musicDispatcher';
import { dispatcherState } from '../store/states';
import Loading from './Loading';

function Home() {
  const setDispatcher = useSetRecoilState(dispatcherState);

  const dispatcherRef = useRef(createDispatcher());

  useEffect(() => {
    setDispatcher(dispatcherRef.current);
  }, [setDispatcher]);

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
