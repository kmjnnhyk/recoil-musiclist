import React from 'react';
import StyleAtoms from '../StyleAtoms';

function Loading() {
  return (
    <>
      <StyleAtoms.Div
        display={'grid'}
        position={'fixed'}
        top={'0'}
        left={'0'}
        background={'rgba(0,0,0, 0.5)'}
        placeItems={'center'}
        width={'100vw'}
        height={'100vh'}
        fontSize={'48px'}
        fontWeight={'900'}
      >
        LOADING ...
      </StyleAtoms.Div>
    </>
  );
}

export default Loading;
