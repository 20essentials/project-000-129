import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,
  body,
  #root {
    width: 100%;
    height: 100dvh;
  }
`;
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <GlobalStyle />
      <App />
    </>
  </StrictMode>
);
