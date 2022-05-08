import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import FixedHeader from '../components/common/FixedHeader';
import MyButton from '../components/common/MyButton';

const BoardCreate = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    author: '',
    title: '',
    content: '',
  });

  const authorInput = useRef();
  const titleInput = useRef();
  const contentInput = useRef();

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.title.length < 1) {
      titleInput.current.focus();
      return;
    }
    if (state.content.length < 1) {
      contentInput.current.focus();
      return;
    }

    // onCreate(state.author, state.title, state.content);
    alert('게시글이 등록되었습니다.');
    navigate('/boardlist');
    // setState({
    //   author: '',
    //   title: '',
    //   content: '',
    // }); 페이지 이동할 거라 필요 없음..
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
          <MyButton onClick={() => {}} text={'취소'} />
        </div>
      </div>
    </>
  );
};

export default BoardCreate;
