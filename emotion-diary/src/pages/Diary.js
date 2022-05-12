import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryStateContext } from '../App';
import { getStringDate } from '../util/data';
import emotionList from '../util/emotion';
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';

const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      // console.log(targetDiary); 잘 나오는지 확인
      if (targetDiary) {
        // 일기가 true 존재할 때
        setData(targetDiary); // 이 페이지에서 띄울 빈 데이터박스에,
        // id 파람 일치하는 일기를 담아 보여줘야하므로
      } else {
        // 타겟 일기가 없을 때
        alert('존재하지 않는 게시글입니다.'); // 왜 2번 나올까..
        navigate('/', { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className='DiaryPage'>로딩중입니다...</div>;
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );
    console.log(curEmotionData);
    return (
      <div className='DiaryPage'>
        {/* 날짜 양식도 재사용이 은근 있으니 컴포넌트화 해서 util폴더에 세팅 + 임포트 */}
        <MyHeader
          headText={`${getStringDate(new Date(data.date))} 일기`}
          leftChild={<MyButton text={'<'} onClick={() => navigate(-1)} />}
          rightChild={
            <MyButton
              text={'수정'}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />
        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div
              className={[
                'diary_img_wrapper',
                `diary_img_wrapper_${data.emotion}`,
              ].join(' ')}
            >
              <img
                src={curEmotionData.emotion_img}
                alt={curEmotionData.emotion_descript}
              />
              <div className='emotion_descript'>
                {curEmotionData.emotion_descript}
              </div>
            </div>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <div className='diary_content_wrapper'>
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;
