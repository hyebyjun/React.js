import FixedHeader from '../components/common/FixedHeader';
import BoardItem from '../components/common/BoardItem';
import MyButton from '../components/common/MyButton';
import { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BoardList = () => {
  // const boardList = useContext(BoardStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const dataId = useRef(1);

  const getData = async () => {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/comments' // json 가져온 데이터 샘플로 활용하기
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((item) => {
      return {
        title: item.name,
        author: item.email,
        content: item.body,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });

    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <FixedHeader />
      <div className='BoardList'>
        <div className='BoardTop'>
          <span>개의 게시글이 있습니다.</span>
          <MyButton onClick={() => navigate('/boardcreate')} text={'글쓰기'} />
        </div>
        <table>
          <colgroup>
            <col width='15%' />
            <col width='40%' />
            <col width='15%' />
            <col width='15%' />
            <col width='15%' />
          </colgroup>
          <tr>
            <th>No.</th>
            <th>제목</th>
            <th>작성일</th>
            <th>작성자</th>
            <th>조회수</th>
          </tr>
          {/* <tr>
            {boardList.map((it) => (
              <BoardItem key={it.id} {...it} />
            ))}
          </tr> */}
        </table>
      </div>
    </>
  );
};

export default BoardList;
