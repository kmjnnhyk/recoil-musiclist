import React, { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { dispatcherState } from '../store/states';
import StyleAtoms from '../StyleAtoms';

function SearchInput() {
  const [searchInput, setSearchInput] = useState('');

  const dispatcher = useRecoilValue(dispatcherState);

  const handleChange = useCallback((e) => {
    const text = e.target.value;
    setSearchInput(text);
  }, []);

  const handleSubmit = (e) => {
    dispatcher.changeQuery(searchInput);
    setSearchInput('');
  };

  return (
    <>
      <StyleAtoms.Div margin={'24px 48px'}>
        <StyleAtoms.Input
          type='text'
          placeholder='가수를 검색하세요'
          value={searchInput}
          onChange={handleChange}
        />
        <button type='submit' onClick={handleSubmit}>
          SEARCH
        </button>
      </StyleAtoms.Div>
    </>
  );
}

export default SearchInput;
