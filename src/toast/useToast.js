import { useRecoilCallback, useRecoilState } from 'recoil';
import { TOAST_DELAY } from '../constant';
import { toastState } from '../store/states';
import { getRandomID } from '../utils';

export const useToast = () => {
  const [toasts, setToasts] = useRecoilState(toastState);

  const removeItemById = (array, id) => {
    return array.filter((item) => item.id !== id);
  };

  const openToast = useRecoilCallback(({ set }) => (toast) => {
    const toastId = getRandomID();
    set(toastState, (oldToasts) => [...oldToasts, { ...toast, id: toastId }]);
    setTimeout(
      () => set(toastState, (oldToasts) => removeItemById(oldToasts, toastId)),
      TOAST_DELAY + 600
    );
  });

  return { toasts, openToast };
};
