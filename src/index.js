import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './StyleAtoms/GlobalStyles';
import App from './App';

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
