import React from 'react';
import { useRecoilValue } from 'recoil';
import { BREAK_POINT } from '../constant';
import { windowSizeState } from '../store/states';
import StyleAtoms from '../StyleAtoms';
import Music from './Music';

function MusicList({ list }) {
  const windowSize = useRecoilValue(windowSizeState);
  console.log('musiclist component');
  console.log(windowSize.width);
  return (
    <>
      {windowSize.width <= BREAK_POINT ? (
        <StyleAtoms.Div display={'grid'} gridTemplateColumns={'1fr'} margin={'0 24px'}>
          {list.map((music) => {
            return <Music music={music} key={music.id} />;
          })}
        </StyleAtoms.Div>
      ) : (
        <StyleAtoms.Div
          display={'grid'}
          gridTemplateColumns={'1fr 1fr 1fr'}
          gap={'24px'}
          padding={'24px 24px'}
        >
          {list.map((music) => {
            return <Music music={music} key={music.id} />;
          })}
        </StyleAtoms.Div>
      )}
    </>
  );
}

export default MusicList;
