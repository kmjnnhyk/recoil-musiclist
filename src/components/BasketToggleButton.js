import React from 'react';
import StyleAtoms from '../StyleAtoms';
import { BsMusicPlayerFill } from 'react-icons/bs';

function BasketToggleButton({ onToggle, totalNum }) {
  return (
    <>
      <StyleAtoms.Button
        onClick={onToggle}
        position={'absolute'}
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
          {totalNum}
        </StyleAtoms.Balloon>
      </StyleAtoms.Button>
    </>
  );
}

export default BasketToggleButton;
