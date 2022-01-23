import axios from 'axios';
import { atom, selector, selectorFamily, useRecoilValue } from 'recoil';

export const searchQueryOptions = atom({
  key: 'searchQueryOptions',
  default: {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/search',
    params: { q: 'Kendrick Lamar' },
    headers: {
      'x-rapidapi-host': 'genius.p.rapidapi.com',
      'x-rapidapi-key': '507790a509mshc545e226519de75p1bbc78jsn41f9731c0424',
    },
  },
});

export const searchQuerySelector = selectorFamily({
  key: 'searchQuerySelector',
  get:
    (inputOption) =>
    async ({ get }) => {
      get(searchQueryOptions);
      const response = await axios.request(inputOption);
      if (response.error) throw response.error('query error');
      else return response.data;
    },
});

export const searchQueryCookie = atom({
  key: 'searchQueryCookie',
  default: {},
});
