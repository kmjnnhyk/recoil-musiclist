import axios from 'axios';
import { atom, selector, useRecoilCallback } from 'recoil';

export const searchQueryOptions = atom({
  key: 'searchQueryOptions',
  default: {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/search',
    params: {},
    headers: {
      'x-rapidapi-host': 'genius.p.rapidapi.com',
      'x-rapidapi-key': '507790a509mshc545e226519de75p1bbc78jsn41f9731c0424',
    },
  },
});

export const searchQuerySelector = selector({
  key: 'searchQuerySelector',
  get: async ({ get }) => {
    const options = get(searchQueryOptions); // get으로 구독한 상태가 변하면 아래 로직이 실행됨
    if (options === undefined) return undefined;

    const response = await axios.request(options);
    const decodedResponseData = {
      ...response.data.hits,
      results: response.data.response.hits.map((res) => {
        const info = res.result;
        return {
          id: info.id,
          title: info.full_title,
          thumb_url: info.header_image_thumbnail_url,
        };
      }),
    };
    return decodedResponseData.results;
  },
  /* 
  selector는 atom의 파퍈이기 때문에 set 함수를 따로 설정해주지 않으면
  사용할 수 없다.
  */
});
