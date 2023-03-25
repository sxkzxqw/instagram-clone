import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoutesAuth from './components/Routes/Routes';
import MainPage from './pages/MainPage/MainPage';
import UserPage from './pages/UserPage/UserPage';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <RoutesAuth />
    </Provider>
  );
};

export default App;
