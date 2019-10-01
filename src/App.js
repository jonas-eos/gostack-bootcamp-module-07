import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import Header from './components/Header';

import Routes from './routes';

import store from './store';

export default function App() {
  return (
    /**
     * The BrowserRouter used in App, allows elements to interact globally with
     * other elements.
     */
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}
