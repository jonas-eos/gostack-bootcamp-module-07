import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Header from './components/Header';

import Routes from './routes';

export default function App() {
  return (
    /**
     * The BrowserRouter used in App, allows elements to interact globally with
     * other elements.
     */
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}
