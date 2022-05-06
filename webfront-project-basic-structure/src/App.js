import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import BoardList from './pages/BoardList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/boardlist' element={<BoardList />} />
    </Routes>
  );
}

export default App;
