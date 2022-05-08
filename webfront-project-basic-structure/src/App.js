import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useRef } from 'react';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import BoardList from './pages/BoardList';
import BoardCreate from './pages/BoardCreate';
import BoardDetail from './pages/BoardDetail';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/boardlist' element={<BoardList />} />
      <Route path='/boardcreate' element={<BoardCreate />} />
      <Route path='/boarddetail/:id' element={<BoardDetail />} />
    </Routes>
  );
}

export default App;
