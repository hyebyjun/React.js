// import Button from './Button';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  useEffect(() => {
    console.log('I run only once.');
  }, []); // [] 빈배열은 처음 마운트될 때만 실행되도록.
  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log('I run when "keyword" changes.', keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log('I run when "counter" changes.');
  });
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type='text'
        placeholder='Search Here...'
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
