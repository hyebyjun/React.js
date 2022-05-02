import Diary from '../pages/Diary';

const DiaryList = ({ diaryList }) => {
  return (
    <>
      {diaryList.map((it) => (
        <div key={it.id}>{it.content}</div>
      ))}
    </>
  );
};

export default DiaryList;
