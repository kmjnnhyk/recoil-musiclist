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
    e.preventDefault();
    dispatcher.changeQuery(searchInput);
    setSearchInput('');
  };

  return (
    <>
      <StyleAtoms.Div margin={'12px 24px'}>
        <form onSubmit={handleSubmit}>
          <StyleAtoms.Input
            type='name'
            placeholder='가수를 검색하세요'
            value={searchInput}
            onChange={handleChange}
            height={'50px'}
            margin={'12px 0'}
          />
          <StyleAtoms.Button
            type='submit'
            width={'100%'}
            height={'30px'}
            background={'var(--black)'}
            border={'none'}
            color={'var(--neongreen)'}
          >
            SEARCH
          </StyleAtoms.Button>
        </form>
      </StyleAtoms.Div>
    </>
  );
}

export default SearchInput;
