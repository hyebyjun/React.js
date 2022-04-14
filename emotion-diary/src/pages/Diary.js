import { useParams } from 'react-router-dom';
// 사용자 편의를 위해 제공되는 사용자 정의 hook -> custom hooks

const Diary = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <h1>Diary</h1>
      <p>일기 상세페이지</p>
    </>
  );
};

export default Diary;
