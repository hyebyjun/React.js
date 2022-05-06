import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import BoardList from './pages/BoardList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/boardlist' element={<BoardList />} />
      {/* <Route path='/boardcreate' element={<BoardListPage />} />
      <Route path='/boardupdate' element={<BoardListPage />} /> */}
    </Routes>
  );
}

export default App;
