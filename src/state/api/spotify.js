import axios from 'axios';
import { selector } from 'recoil';
import { musicListState } from '../atoms/musicListAtom';

const options = {
  method: 'GET',
  url: 'https://billboard-api2.p.rapidapi.com/hot-100',
  params: { range: '1-100', date: '2022-01-01' },
  headers: {
    'x-rapidapi-host': 'billboard-api2.p.rapidapi.com',
    'x-rapidapi-key': '507790a509mshc545e226519de75p1bbc78jsn41f9731c0424',
  },
};

export const musicListQuerySelector = selector({
  key: 'musicListQuerySelector',
  get: async ({ get }) => {
    try {
      const response = await axios.request(options);
      return response;
    } catch (error) {
      throw error('query error');
    }
  },
  set: ({ set }, newValue) => {
    set(musicListState, newValue);
  },
});
