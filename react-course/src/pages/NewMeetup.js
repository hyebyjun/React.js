import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const history = useHistory();

  // 파베로 db 쓰는 방법
  const onAddMeetupHandler = (meetupData) => {
    fetch(
      'https://hyexjun-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json', // app/뒤에 원하는 테이블명?.json 입력
      {
        method: 'POST', // 요청 방식
        body: JSON.stringify(meetupData), // 
        headers: { 'Content-Type': 'application/json' }, // headers는 필수는 아니다?
      }
    ).then(() => { // fetch, then 대신 await, async 써도 됨
      history.replace('/'); // push 대신 replace 쓰는 이유
      // replace는 본래 다른 url로 대체한다는 뜻이지만,
      // 대체할 이름을 적지 않으면 뒤로가기를 비활성화한다.
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;