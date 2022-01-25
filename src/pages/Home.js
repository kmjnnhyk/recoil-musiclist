import React, { Suspense, useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import MusicListContainer from '../containers/MusicListContainer';
import MusicSearcherContainer from '../containers/MusicSearcherContainer';
import { createDispatcher } from '../store/musicDispatcher';
import { dispatcherState } from '../store/states';

function Home() {
  const setDispatcher = useSetRecoilState(dispatcherState);

  const dispatcherRef = useRef(createDispatcher());
  useEffect(() => {
    setDispatcher(dispatcherRef.current);
  }, [setDispatcher]);

  return (
    <>
      <MusicSearcherContainer />
      <Suspense fallback={<div>LOADING...</div>}>
        <MusicListContainer />
      </Suspense>
    </>
  );
}

export default Home;
