import { debounce } from 'lodash';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Home from './pages/Home';
import RecomendationPage from './pages/RecomendationPage';
import { windowSizeState } from './store/states';

function App() {
  const setWindowSize = useSetRecoilState(windowSizeState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResize = debounce(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 200);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='recommendation' element={<RecomendationPage />} />
    </Routes>
  );
}

export default App;
