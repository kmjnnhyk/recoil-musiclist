import React from 'react';
import StyleAtoms from '../StyleAtoms';
import BasketItem from './BasketItem';
import { MdClose } from 'react-icons/md';
import { Transition } from 'react-transition-group';

function Basket({ items, isOpen, onToggle }) {
  return (
    <>
      <Transition in={isOpen}>
        {(state) => (
          <StyleAtoms.SideBar
            state={state}
            transition={'1.2s cubic-bezier(0.65, 0, 0.35, 1)'}
            display={'flex'}
            width={'500px'}
            height={'100vh'}
            top={'0'}
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
            {items.map((item) => {
              return <BasketItem item={item} key={item.id} />;
            })}
          </StyleAtoms.SideBar>
        )}
      </Transition>
    </>
  );
}

export default Basket;
