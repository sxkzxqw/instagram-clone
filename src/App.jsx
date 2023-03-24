import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage';
import UserPage from './pages/UserPage/UserPage';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}>

          </Route>
          <Route path='/:id' element={<UserPage />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
