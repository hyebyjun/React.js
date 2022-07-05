import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const history = useHistory();

  const onAddMeetupHandler = (meetupData) => {
    fetch(
      'https://hyexjun-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: { 'Content-Type': 'application/json' },
      }
    ).then(() => {
      history.replace('/'); // push 대신 replace 쓰는 이유 : 뒤로가기 해도 의미 없으니 굳이 돌아가지 못하도록 막기
    }); // fetch, then 대신 await, async 써도 됨
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
