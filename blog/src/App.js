import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('제목을 입력해주세요'); // 비구조화 할당
  const [content, setContent] = useState('내용을 입력해주세요');

  const titleChange = () => {
    let newTitle = [title];
    newTitle = '바뀐 제목';
    setTitle(newTitle);
  };

  const [state, setState] = useState({
    title: '제목을 입력',
    content: '내용을 입력',
  });

  const [num, setNum] = useState(0);

  return (
    <div className='App'>
      <div className='black-nav'>Blog</div>
      <div className='list'>
        <h3>
          {title}
          <span
            onClick={() => {
              setNum(num + 1);
            }}
          >
            👍🏻
          </span>
          {num}
        </h3>
        <button onClick={() => titleChange}>변경</button>
        <p>2022년 4월 15일</p>
        <p>{content}</p>
        <hr />
      </div>
      <div className='list'>
        <h3>{state.title}</h3>
        <button
          onClick={() => {
            setState({
              title: state.title,
              // ...state,
              content: '내용 바꿔',
            });
          }}
        >
          변경
        </button>
        <p>2022년 4월 15일</p>
        <p>{state.content}</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
