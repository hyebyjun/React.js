import { useContext, useEffect } from 'react'; // diaryList 받아와야함
import { DiaryStateContext } from '../App'; // diaryList 받아와야함
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log('지금 게시글 id :', id);

  const diaryList = useContext(DiaryStateContext);
  console.log(diaryList);

  // 1번 게시글이 마운트될때 1번 수정창이 떠야 되니까?
  useEffect(() => {
    if (diaryList.length >= 1) {
      // 일기데이터가 1개라도 있을 경우 활성화
      // const targetDiary = diaryList.find((it) => it.id === id);
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id) // 버그 방지 parserInt
      );
      console.log(targetDiary);
    }
  }, [id, diaryList]);
  // [id, diaryList] 아이디나 리스트가 변하면 꺼내오는 데이터가 달라지므로?

  return <div>테스트</div>;
};

export default Edit;
