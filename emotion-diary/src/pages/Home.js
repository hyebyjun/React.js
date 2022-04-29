import { useContext, useEffect, useState } from 'react';
import MyHeader from './../components/MyHeader';
import MyButton from './../components/MyButton';
import { DiaryStateContext } from './../App';

const Home = () => {
  // 필요한 요소들 정의하는 곳

  const diaryList = useContext(DiaryStateContext); // 더미데이터 확인용

  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`; // 희한하게도 js의 getMonth는 0월부터 시작..ㅎ

  // 화면에 출력될 때 변경되는 옵션 : 날짜? 월이 달라질 수 있음
  const [data, setData] = useState([]);
  // 월이 변경되면 나오는 데일리 리스트가 달라지도록
  useEffect(() => {
    // 현재 연도와 월에서의 가장 첫번째 날짜 만들기
    const firstDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      1
    ).getTime();
    console.log(new Date(firstDay));

    const lastDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth() + 1,
      0
    ).getTime(); // 다음달 첫날에서 빠꾸?
    console.log(new Date(lastDay));

    setData(
      diaryList.filler((it) => firstDay <= it.date && it.date <= lastDay)
    );
  }, [curDate]);

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
