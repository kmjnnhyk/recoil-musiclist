import React from 'react';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';

import SearchInput from '../components/SearchInput';
import { searchQueryOptions, searchQuerySelector } from '../store/atoms';

function MusicSearcherContainer() {
  const queryOptions = useRecoilValue(searchQueryOptions);
  const searchRes = useRecoilValue(searchQuerySelector(queryOptions)).response.hits;

  console.log(searchRes);
  return (
    <>
      <p>now, query option is :{queryOptions.params.q}</p>
      <SearchInput />
      {searchRes.map((res) => {
        const songInfo = res.result;
        return (
          <li key={songInfo.id} style={{ marginBottom: '24px' }}>
            <img alt='img thumb' src={songInfo.header_image_thumbnail_url} />
            <br />
            {songInfo.full_title}
          </li>
        );
      })}
    </>
  );
}

export default MusicSearcherContainer;
