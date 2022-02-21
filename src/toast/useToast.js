import { useCallback } from 'react';
import { useRecoilCallback, useRecoilState } from 'recoil';
import { TOAST_DELAY } from '../constant';
import { toastState } from '../store/states';
import { getRandomID } from '../utils';

export const useToast = () => {
  const [toasts, setToasts] = useRecoilState(toastState);

  const removeItemById = useCallback((array, id) => {
    return array.filter((item) => item.id !== id);
  }, []);

  const openToast = useCallback(
    (toast) => {
      const toastId = getRandomID();
      setToasts((oldToasts) => [...oldToasts, { ...toast, id: toastId }]);
      setTimeout(
        () => setToasts((oldToasts) => removeItemById(oldToasts, toastId)),
        TOAST_DELAY + 600
      );
    },
    [removeItemById, setToasts]
  );

  return { toasts, openToast };
};
