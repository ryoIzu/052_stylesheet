/**@jsxImportSource @emotion/react */
import {css, Global} from '@emotion/react';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import EmotionComp from './Styles/EmotionComp';

const global = css `
  body {
    background-color: red;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Global styles={global} />
    <EmotionComp />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
