import React from 'react';
import Music from './Music';

function MusicList({ list }) {
  console.log('musiclist component');
  return (
    <>
      {list.map((music) => {
        return <Music music={music} key={music.id} />;
      })}
    </>
  );
}

export default MusicList;
