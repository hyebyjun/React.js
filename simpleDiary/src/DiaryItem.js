import React, { useEffect, useState, useRef, useContext } from 'react';
import { DiaryDispatchContext } from './App';

const DiaryItem = ({ id, author, content, emotion, created_date }) => {
  // useEffect(() => {
  //   console.log(`${id}번 아이템 렌더`);
  // });

  const { onRemove, onEdit } = useContext(DiaryDispatchContext);

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const handleRemove = () => {
    if (window.confirm(`${id}번 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    onEdit(id, localContent);
    toggleIsEdit();
  };

  return (
    <div className='DiaryItem'>
      <div className='info'>
        <span>
          « 작성자 : {author} 🍟 오늘의 점수 : {'⭐'.repeat(emotion)} »
        </span>
        <br />
        <span className='date'>{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className='content'>
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(event) => {
                setLocalContent(event.target.value);
              }}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleEdit}>저장</button>
          <button onClick={handleQuitEdit}>취소</button>
        </>
      ) : (
        <>
          <button onClick={toggleIsEdit}>수정</button>
          <button onClick={handleRemove}>삭제</button>
        </>
      )}
    </div>
  );
};

export default React.memo(DiaryItem);
