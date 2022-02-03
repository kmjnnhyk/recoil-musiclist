import React from 'react';
import StyleAtoms from '../StyleAtoms';
import { BsMusicPlayerFill } from 'react-icons/bs';

function BasketToggleButton() {
  return (
    <>
      <StyleAtoms.Button
        position={'fixed'}
        top={'24px'}
        right={'36px'}
        background={'none'}
        border={'none'}
      >
        <BsMusicPlayerFill size='48' color='var(--black)' />
        <StyleAtoms.Balloon
          position={'relative'}
          bottom={'14px'}
          left={'28px'}
          background={'var(--neonblue)'}
          width={'24px'}
          height={'24px'}
          fontSize={'12px'}
          fontWeight={'900'}
          color={'var(--orange)'}
        >
          0
        </StyleAtoms.Balloon>
      </StyleAtoms.Button>
    </>
  );
}

export default BasketToggleButton;
