import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: '홍길동',
    birthday: 961222,
    gender: 'male',
    job: '대학생',
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: '이순신',
    birthday: 961123,
    gender: 'male',
    job: '회사원',
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: '권율',
    birthday: 961022,
    gender: 'male',
    job: '공무원',
  },
];

function App() {
  return (
    <>
      {/* <Customer
        id={customers[0].id}
        img={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        job={customers[0].job}
      /> */}
      {customers.map((c) => {
        return (
          <Customer
            key={c.id} // map 함수는 key 필수!
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </>
  );
}

export default App;
