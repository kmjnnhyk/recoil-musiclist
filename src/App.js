import { debounce } from 'lodash';
import { useLayoutEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { ModalProvider } from './mordal/ModalContext';
import Home from './pages/Home';
import { windowSizeState } from './store/states';

function App() {
  const setWindowSize = useSetRecoilState(windowSizeState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResize = debounce(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 100);

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ModalProvider>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </ModalProvider>
  );
}

export default App;
