import FixedHeader from '../components/common/FixedHeader';
import MyButton from '../components/common/MyButton';
import { useNavigate } from 'react-router-dom';

const BoardList = ({ boardList }) => {
  // const boardList = useContext(BoardStateContext);
  const navigate = useNavigate();

  // const onRemove = (targetId) => {
  //   console.log(`${targetId}번 게시글이 삭제되었습니다.`);
  //   const newDiaryList = data.filter((it) => it.id !== targetId);
  //   console.log(newDiaryList);
  //   setData(newDiaryList);
  // };
  // const onEdit = (targetId, newContent) => {
  //   setData(
  //     data.map((item) =>
  //       item.id === targetId ? { ...item, content: newContent } : item
  //     )
  //   );
  // };

  // const boardList = localStorage.getItem('board');

  return (
    <>
      <FixedHeader />
      <div className='BoardList'>
        <div className='BoardTop'>
          <span>{boardList.length}개의 게시글이 있습니다.</span>
          {/* <MyButton onCreate={onCreate} onClick={() => navigate('/boardeditor')} text={'글쓰기'} /> */}
          <MyButton onClick={() => navigate('/boardeditor')} text={'글쓰기'} />
        </div>
        <table>
          <colgroup>
            <col width='15%' />
            <col width='40%' />
            <col width='25%' />
            <col width='20%' />
          </colgroup>
          <tr>
            <th>No.</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
          {boardList.map((it) => (
            <tr>
              <td>{it.id}</td>
              <td>{it.title}</td>
              <td>{it.author}</td>
              <td>{new Date(it.created_date).toLocaleString()}</td>
            </tr>
          ))}
          {/* 여기 끝에 리버스 달면.. 새글 생성해도 꼬다리 뒤집힘.. */}
        </table>
      </div>
    </>
  );
};

export default BoardList;
