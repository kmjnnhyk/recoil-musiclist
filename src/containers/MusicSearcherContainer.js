import React from 'react';
import BasketToggleButton from '../components/BasketToggleButton';
import SearchInput from '../components/SearchInput';

function MusicSearcherContainer() {
  console.log('musicSearcherContainer rendered');
  return (
    <>
      <BasketToggleButton />
      <SearchInput />
    </>
  );
}

export default MusicSearcherContainer;
