import React, { useCallback, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { searchQueryOptions } from '../store/atoms';

function SearchInput() {
  const [searchInput, setSearchInput] = useState('');
  const [queryOptions, changeQueryParams] = useRecoilState(searchQueryOptions);

  const handleChange = useCallback((e) => {
    const text = e.target.value;
    setSearchInput(text);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      //console.log(queryOptions);
      changeQueryParams((prev) => {
        // 쿼리 요청에 보내는 q값(원하는 곡 명) 변경
        const newList = {
          ...prev,
          params: {
            q: searchInput,
          },
        };
        return newList;
      });
      console.log('change params');
      //console.log(queryOptions);
      setSearchInput('');
    },
    [changeQueryParams, searchInput]
  );

  return (
    <>
      <input type='text' value={searchInput} onChange={handleChange} />
      <button type='submit' onClick={handleSubmit}>
        SEARCH
      </button>
    </>
  );
}

export default SearchInput;
