import Button from './Button';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log('I run all the time');
  const iRunOnlyOnce = () => {
    console.log('i run only once.');
  };
  useEffect(iRunOnlyOnce, []); // [] 빈배열은 처음 마운트될 때만 실행되도록.
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button text={'Continue'} />
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
