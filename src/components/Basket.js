import React from 'react';
import StyleAtoms from '../StyleAtoms';
import BasketItem from './BasketItem';
import { MdClose } from 'react-icons/md';
import { Transition } from 'react-transition-group';

function Basket({ items, isOpen, onToggle, onReset }) {
  console.log('basket');
  return (
    <>
      <Transition in={isOpen} timeout={500}>
        {(state) => (
          <StyleAtoms.SideBar
            state={state}
            transition={'1.2s cubic-bezier(0.65, 0, 0.35, 1)'}
            display={'flex'}
            alignItems={'center'}
            width={'500px'}
            height={'100vh'}
            top={'0'}
            right={'0'}
            background={'var(--neonblue)'}
            padding={'32px 0'}
          >
            <StyleAtoms.Button
              onClick={onToggle}
              background={'none'}
              marginRight={'12px'}
              marginLeft={'auto'}
              marginBottom={'48px'}
            >
              <MdClose size={'24'} />
            </StyleAtoms.Button>
            <StyleAtoms.Div
              width={'100%'}
              maxHeight={'60%'}
              marginBottom={'34px'}
              overflowY={'auto'}
              scrollbarWidth={'0'}
            >
              {items.map((item) => {
                return <BasketItem item={item} key={item.id} />;
              })}
            </StyleAtoms.Div>
            {items.length !== 0 && (
              <StyleAtoms.Button
                onClick={onReset}
                width={'80%'}
                height={'64px'}
                background={'none'}
                color={'var(--neongreen)'}
                fontSize={'24px'}
                fontWeight={'900'}
              >
                RESET
              </StyleAtoms.Button>
            )}
          </StyleAtoms.SideBar>
        )}
      </Transition>
    </>
  );
}

export default Basket;
