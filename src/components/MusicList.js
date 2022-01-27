import React from 'react';
import { useRecoilValue } from 'recoil';
import { windowSizeState } from '../store/states';
import StyleAtoms from '../StyleAtoms';
import Music from './Music';

function MusicList({ list }) {
  const windowSize = useRecoilValue(windowSizeState);
  console.log('musiclist component');
  console.log(windowSize.width);
  return (
    <>
      <StyleAtoms.Div
        background={windowSize.width <= 700 ? 'var(--yellow)' : 'var(--orange)'}
      >
        {list.map((music) => {
          return <Music music={music} key={music.id} />;
        })}
      </StyleAtoms.Div>
    </>
  );
}

export default MusicList;
