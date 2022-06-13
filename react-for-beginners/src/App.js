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
    </div>
  );
}

export default App;
