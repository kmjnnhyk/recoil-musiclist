import React from 'react';
import { useRecoilValue } from 'recoil';
import { BREAK_POINT } from '../constant';
import { ModalContext } from '../mordal/ModalContext';
import { dispatcherBasketState, windowSizeState } from '../store/states';
import StyleAtoms from '../StyleAtoms';
import { getId } from '../utils';

function Music({ music }) {
  const dispatcher = useRecoilValue(dispatcherBasketState);
  const { openModal } = React.useContext(ModalContext);
  const windowSize = useRecoilValue(windowSizeState);

  const handleClick = () => {
    dispatcher.addToBasket(getId(), music.title);
    openModal(<div>ADD</div>);
  };

  console.log('music component');

  return (
    <StyleAtoms.Li
      display={'grid'}
      height={windowSize.width <= BREAK_POINT ? '96px' : '100%'}
      fontSize={'10px'}
      gridTemplateColumns={windowSize.width <= BREAK_POINT ? '1fr 4fr 1fr' : '1fr'}
      justifyItems={'center'}
      justifyContent={windowSize.width <= BREAK_POINT ? 'start' : 'center'}
      alignItems={'center'}
      borderBottom={windowSize.width <= BREAK_POINT ? '1px solid black' : 'none'}
    >
      <img
        src={music.thumb_url}
        alt='thumb img'
        style={{
          width: windowSize.width <= BREAK_POINT ? '56px' : '216px',
          height: windowSize.width <= BREAK_POINT ? '56px' : '216px',
          objectFit: 'cover',
          marginRight: '24px',
        }}
      />
      <p
        style={{
          border: windowSize.width <= BREAK_POINT ? 'none' : '1px solid black',
          padding: '0 12px',
          width: windowSize.width <= BREAK_POINT ? '100%' : '256px',
          height: '52px',
          display: 'grid',
          placeItems: 'center',
          marginRight: '24px',
          boxSizing: 'border-box',
          textAlign: 'center',
        }}
      >
        {music.title}
      </p>
      <StyleAtoms.Button
        onClick={handleClick}
        background={'rgba(0, 0, 0, 0)'}
        border={'none'}
        fontSize={'12px'}
        fontWeight={'900'}
      >
        ADD
      </StyleAtoms.Button>
    </StyleAtoms.Li>
  );
}

export default Music;
