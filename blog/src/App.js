import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('제목을 입력해주세요.'); // 비구조화 할당
  const [content, setContent] = useState('내용을 입력해주세요.');

  return (
    <div className='App'>
      <div className='black-nav'>Blog</div>
      <div className='list'>
        <h3>{title}</h3>
        <p>2022년 4월 17일</p>
        <p>{content}</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
