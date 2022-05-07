import { useContext, useEffect, useState } from 'react';
import { DiaryStateContext } from './../App';
import MyHeader from './../components/MyHeader';
import MyButton from './../components/MyButton';
import DiaryList from '../components/DiaryList';

const Home = () => {
  // 필요한 요소들 정의하는 곳

  const diaryList = useContext(DiaryStateContext); // 더미데이터 확인용

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`; // 희한하게도 js의 getMonth는 0월부터 시작..ㅎ

  // 화면에 출력될 때 변경되는 옵션 : 날짜? 월이 달라질 수 있음
  // 월이 변경되면 나오는 데일리 리스트가 달라지도록

  useEffect(() => {
    // 다이어리 목록이 비어있는 경우에는 아래 코드들은 수행할 필요가 없으므로
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();
      console.log(new Date(firstDay));

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0 // 빠꾸
      ).getTime();
      console.log(new Date(lastDay));

      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      ); // 첫날부터 끝날까지 한 달 단위로 데이터 트리밍해주는 코드
    }
  }, [diaryList, curDate]);

  useEffect(() => {
    console.log(data);
  }, [data]);

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
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={'<'} onClick={decreaseMonth} />}
        rightChild={<MyButton text={'>'} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
