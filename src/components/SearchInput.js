import React, { useCallback, useState } from 'react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { dispatcherState, searchQuerySelector } from '../store/states';
import StyleAtoms from '../StyleAtoms';

function SearchInput() {
  const [searchInput, setSearchInput] = useState('');
  const isThereList = useRecoilValueLoadable(searchQuerySelector).contents.length > 0;
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
      <StyleAtoms.Div
        margin={!isThereList ? '0 56px' : '12px 128px'}
        display={!isThereList ? 'grid' : 'block'}
        alignContent={'center'}
        //placeItems={!isThereList ? 'center stretch' : 'auto'}
        height={!isThereList && '100vh'}
      >
        {!isThereList && <h1 style={{ fontSize: '96px' }}>MUSIC SEARCHER</h1>}
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
            color={'var(--neongreen)'}
            fontWeight={'900'}
          >
            SEARCH
          </StyleAtoms.Button>
        </form>
      </StyleAtoms.Div>
    </>
  );
}

export default SearchInput;
