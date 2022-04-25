import { useContext, useState } from 'react';
import MyHeader from './../components/MyHeader';
import MyButton from './../components/MyButton';
import { DiaryStateContext } from './../App';

const Home = () => {
  // 필요한 요소들 정의하는 곳

  const diaryList = useContext(DiaryStateContext); // 더미데이터 확인용

  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`; // 희한하게도 js의 getMonth는 0월부터 시작..ㅎ

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  // 실제 렌더링할 것들 배치하는 html
  return (
    <>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={'◀'} onClick={decreaseMonth} />}
        rightChild={<MyButton text={'▶'} onClick={increaseMonth} />}
      />
    </>
  );
};

export default Home;
