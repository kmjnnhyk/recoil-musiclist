import React from 'react';
import { useRecoilValue } from 'recoil';
import MusicList from '../components/MusicList';
import { searchQuerySelector } from '../store/states';

function MusicListContainer() {
  const listQuery = useRecoilValue(searchQuerySelector);
  console.log('musiclist container rendered');

  return <>{<MusicList list={listQuery} />}</>;
}

export default MusicListContainer;
