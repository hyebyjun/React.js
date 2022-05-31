import { useNavigate } from 'react-router-dom';
import FixedHeader from '../components/common/FixedHeader';
import MyButton from '../components/common/MyButton';

const BoardDetail = ({ boardList, id, title, author, content, created_date }) => {
  const navigate = useNavigate();

  return (
    <>
      <FixedHeader />
      <div className='BoardDetail'>
        <table>
        {/* {boardList.map((it) => (
            <tr>
              <td>{it.id}</td>
              <td>{it.title}</td>
              <td>{it.author}</td>
              <td>{new Date(it.created_date).toLocaleString()}</td>
            </tr>
          ))} */}
          <tr>
            <th>No.</th>
            <td>99</td>
            {/* <td>{id}</td> */}
            <th>작성자</th>
            <td>홍길동</td>
            {/* <td>{author}</td> */}
            <th>작성일</th>
            <td>오늘 내일..</td>
            {/* <td>{created_date}</td> */}
          </tr>
          <tr>
            <th>제목</th>
            <td colSpan={5}>험난하구만..</td>
            {/* <td colSpan={5}>{title}</td> */}
          </tr>
          <tr>
            <th>내용</th>
            <td colSpan={5}>게시글을 보여주고 싶어요..</td>
            {/* <td colSpan={5}>{content}</td> */}
          </tr>
        </table>
        <div className='BoardBottom'>
          <MyButton onClick={() => navigate('/boardeditor')} text={'수정'} />
          <MyButton onClick={() => {}} text={'삭제'} />
          <MyButton onClick={() => navigate('/boardlist')} text={'목록으로'} />
        </div>
      </div>
    </>
  );
};

export default BoardDetail;
