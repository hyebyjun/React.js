import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import BoardList from './pages/BoardList';
import BoardEditor from './pages/BoardEditor';
import BoardDetail from './pages/BoardDetail';

function App() {
  // 불러온 데이터든 작성한 데이터든 담길 state 배열
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  // 테스트용 json 데이터 가져오는 함수
  const getData = async () => {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/comments'
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((item) => {
      return {
        id: dataId.current++,
        title: item.name,
        author: item.email,
        content: item.body,
        created_date: new Date().getTime(),
      };
    });

    setData(initData);
    console.log(initData);
  };

  // 실제 json 갖고오는 함수 실행하는 코드
  useEffect(() => {
    getData();
  }, []);

  // 게시글 생성 후 저장
  const onCreate = (author, content, title) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      title,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;

    setData([newItem, ...data]);
    // console.log(data);
    localStorage.setItem('board', JSON.stringify(data));
  };

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/boardlist' element={<BoardList boardList={data} />} />
      <Route
        path='/boardeditor'
        element={<BoardEditor onCreate={onCreate} boardList={data} />}
      />
      <Route
        path='/boarddetail/:id'
        element={<BoardDetail boardList={data} />}
      />
    </Routes>
  );
}

export default App;
