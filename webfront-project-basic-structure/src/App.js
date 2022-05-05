import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import BoardListPage from './pages/BoardListPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/signin' element={<SignInPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/boardlist' element={<BoardListPage />} />
      {/* <Route path='/boardcreate' element={<BoardListPage />} />
      <Route path='/boardupdate' element={<BoardListPage />} /> */}
    </Routes>
  );
}

export default App;
