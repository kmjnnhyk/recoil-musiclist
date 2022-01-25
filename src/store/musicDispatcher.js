import { useRecoilCallback } from 'recoil';
import { searchQueryOptions } from './states';

export const createDispatcher = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const changeQuery = useRecoilCallback(({ set }) => (input) => {
    set(searchQueryOptions, (oldQuery) => {
      const newQuery = {
        ...oldQuery,
        params: {
          q: input,
        },
      };
      return newQuery;
    });
  });
  return {
    changeQuery,
  };
};
