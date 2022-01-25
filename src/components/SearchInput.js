import React, { useCallback, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { dispatcherState, searchQueryOptions } from '../store/states';

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
      <input
        type='text'
        placeholder='가수를 검색하세요'
        value={searchInput}
        onChange={handleChange}
      />
      <button type='submit' onClick={handleSubmit}>
        SEARCH
      </button>
    </>
  );
}

export default SearchInput;
