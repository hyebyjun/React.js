import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
// 당연한 말이지만 만든 라우터테스트 컴포넌트 임포트 해야됩니다.
import RouteTest from './components/RouteTest';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h2>App.js</h2>
        <Routes>
          {/* Route : url 경로와 컴포넌트를 매핑해주는 컴포넌트 */}
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/edit' element={<Edit />} />
          {/* <Route path='/diary' element={<Diary />} />
              에서 diary/1 혹은 diary/2 등 id 달아야 할 경우 아래처럼 */}
          <Route path='/diary/:id' element={<Diary />} />
          {/* 단 :id를 붙이면 diary/n 으로 id가 무조건 있어야되므로
              id가 없는 그냥 /diary 자체는 동작하지 않습니다..
              동작하게 하려면 아래처럼 단독 path 설정해주기 */}
          <Route path='/diary' element={<Diary />} />
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
