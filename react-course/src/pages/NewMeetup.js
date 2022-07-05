import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const onAddMeetupHandler = (meetupData) => {
    fetch(
      'https://hyexjun-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: { 'Content-Type': 'application/json' },
      }
    );
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
