import { useToast } from './useToast';
import StyleAtoms from '../StyleAtoms';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ToastContainer = () => {
  const { toasts } = useToast();
  console.log('Toast Container', toasts);
  return (
    <>
      <StyleAtoms.Div
        position={'fixed'}
        bottom={'24px'}
        right={'50%'}
        transform={'translateX(50%)'}
        width={'80%'}
        maxWidth={'540px'}
        opacity={'0.8'}
        display={'flex'}
        flexDirection={'column-reverse'}
      >
        <TransitionGroup>
          {toasts.map((toast) => {
            return (
              <CSSTransition timeout={500} classNames='toast-animation' key={toast.id}>
                <StyleAtoms.ToastItem
                  height={'64px'}
                  background={'var(--orange)'}
                  marginBottom={'12px'}
                >
                  {toast.content}
                </StyleAtoms.ToastItem>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </StyleAtoms.Div>
    </>
  );
};

export default ToastContainer;
