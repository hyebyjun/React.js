import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo('');
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        {/* form은 기본적으로 submit 이벤트를 갖고있음 */}
        <input
          onChange={onChange}
          value={toDo}
          type='text'
          placeholder='Wirte your to do...'
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((it, idx) => (
        <li key={idx}>{it.toUpperCase()}</li>
      ))}
    </div>
  );
}

export default App;
