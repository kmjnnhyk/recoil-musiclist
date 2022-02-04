import React from 'react';
import StyleAtoms from '../StyleAtoms';
import BasketItem from './BasketItem';
import { MdClose } from 'react-icons/md';

function Basket({ items, isOpen, onToggle }) {
  return (
    <>
      {isOpen && (
        <StyleAtoms.SideBar
          display={'flex'}
          width={'500px'}
          height={'100vh'}
          top={'0'}
          right={'0'}
          background={'var(--neonblue)'}
          padding={'64px 32px'}
        >
          <StyleAtoms.Button
            onClick={onToggle}
            background={'none'}
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
    </>
  );
}

export default Basket;
