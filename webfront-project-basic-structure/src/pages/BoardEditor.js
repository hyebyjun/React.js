import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import FixedHeader from '../components/common/FixedHeader';
import MyButton from '../components/common/MyButton';

const BoardEditor = ({ onCreate, boardList }) => {
  const [state, setState] = useState({
    author: '',
    title: '',
    content: '',
  });

  const titleInput = useRef();
  const authorInput = useRef();
  const contentInput = useRef();

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (state.author.length < 1) {
      alert('작성자를 입력해주세요.');
      authorInput.current.focus();
      return;
    }
    if (state.title.length < 1) {
      alert('제목을 입력해주세요.')
      titleInput.current.focus();
      return;
    }
    if (state.content.length < 1) {
      alert('내용을 입력해주세요.')
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.title);
    console.log(state);
    alert('게시글이 등록되었습니다.');
    // navigate('/boardlist');
    setState({
      author: '',
      title: '',
      content: '',
    });
    console.log({boardList});
  };

  return (
    <>
      <FixedHeader />
      <div className='BoardCreate'>
        <table>
          <tr>
            <th>제목</th>
            <td>
              <input
                name='title'
                value={state.title}
                onChange={(e) => {
                  setState({ ...state, title: e.target.value });
                  console.log(`title : ${e.target.value}`);
                  // console.log(`title : ${state.title}`);
                }}
              />
            </td>
          </tr>
          <tr>
            <th>작성자</th>
            <td>
              {/* <input
                type='text'
                name='id'
                value='{{request.session.session_id}}'
                readonly
              /> */}
              <input
                name='author'
                value={state.author}
                onChange={(e) => {
                  setState({ ...state, author: e.target.value });
                  console.log(`author : ${e.target.value}`);
                }}
              />
            </td>
          </tr>
          <tr>
            <th>내용</th>
            <td>
              <textarea
                cols='50'
                rows='10'
                name='content'
                value={state.content}
                onChange={(e) => {
                  setState({ ...state, content: e.target.value });
                  console.log(`content : ${e.target.value}`);
                }}
              />
            </td>
          </tr>
          {/* <tr>
            <th>이미지 표시</th>
            <td>
              <input type='file' name='img' id='file' />
            </td>
          </tr> */}
        </table>
        <div className='BoardBottom'>
          <MyButton onClick={handleSubmit} text={'게시'} />
          <MyButton onClick={() => navigate('/boardlist')} text={'취소'} />
          {/* <MyButton onClick={navigate('/boardlist')} text={'취소'} /> */}
        </div>
      </div>
    </>
  );
};

export default BoardEditor;
