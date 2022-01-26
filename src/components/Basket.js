import React from 'react';
import BasketItem from './BasketItem';

function Basket({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return <BasketItem item={item} />;
      })}
    </ul>
  );
}

export default Basket;
