import { useEffect, useState } from 'react';

const Hello = () => {
  useEffect(() => {
    console.log('created :)');
    return () => console.log('destoryed :('); // 언마운트 때 실행되는 함수
  }, []);
  return <h1>Hello</h1>;
};

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;
