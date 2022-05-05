import { useRef, useState } from 'react';
import FixedHeader from '../components/common/FixedHeader';

const LoginPage = () => {
  const [state, setState] = useState({
    id: '',
    pw: '',
  });

  const idInput = useRef();
  const pwInput = useRef();

  const handleSubmit = () => {
    if (state.id.length < 1) {
      alert('조건 미충족');
      idInput.current.focus();
      return;
    }

    if (state.pw.length < 5) {
      alert('조건 미충족');
      pwInput.current.focus();
      return;
    }

    // submit 누르면 실행될 로그인(데이터 전달?함수) 짜야됨
    alert('로그인합니다~~');
    // setState({
    //   id: '',
    //   pw: '',
    // });
    // 사실 얘는 로그인하고 메인페이지 넘어갈 거라 필요 없음
  };

  return (
    <>
      <FixedHeader />
      <div className='LoginPage'>
        <div>
          <input
            ref={idInput}
            name='id'
            value={state.id}
            onChange={(event) => {
              setState({ id: event.target.value, pw: state.pw });
            }}
            placeholder='아이디를 입력해주세요.'
          />
        </div>
        <div>
          <input
            ref={pwInput}
            name='pw'
            value={state.pw}
            placeholder='비밀번호를 입력해주세요.'
            onChange={(event) => {
              setState({ id: state.id, pw: event.target.value });
            }}
          />
        </div>
        <button onClick={handleSubmit}>💻 로그인 💾</button>
      </div>
    </>
  );
};

export default LoginPage;
