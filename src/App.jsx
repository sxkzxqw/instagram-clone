import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage';
import UserPage from './pages/UserPage/UserPage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<MainPage />}>
  
        </Route>
        <Route path='/:id' element={<UserPage />}>
  
        </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
