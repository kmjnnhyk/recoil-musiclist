import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import TopTenMusicListContainer from '../containers/TopTenMusicListContainer';
import { musicListQuerySelector } from '../state/api/spotify';
import { musicListState } from '../state/atoms/musicListAtom';

function Home() {
  const musicList = useRecoilValue(musicListQuerySelector);

  console.log(musicList.data);

  return (
    <>
      <TopTenMusicListContainer />
    </>
  );
}

export default Home;
