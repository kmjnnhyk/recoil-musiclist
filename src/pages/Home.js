import React from 'react';
import MusicListContainer from '../containers/MusicListContainer';
import MusicSearcherContainer from '../containers/MusicSearcherContainer';

function Home() {
  return (
    <>
      <MusicSearcherContainer />
      <MusicListContainer />
    </>
  );
}

export default Home;
