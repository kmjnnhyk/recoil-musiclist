import React, { useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { searchQueryOptions } from '../store/states';

function SearchInput() {
  const [searchInput, setSearchInput] = useState('');
  const changeQueryParams = useSetRecoilState(searchQueryOptions);

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
