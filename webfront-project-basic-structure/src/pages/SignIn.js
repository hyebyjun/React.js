import FixedHeader from '../components/common/FixedHeader';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../components/common/MyButton';

const SignInPage = () => {
  const [state, setState] = useState({
    id: '',
    pw: '',
  });

  const idInput = useRef();
  const pwInput = useRef();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (state.id.length < 6) {
      alert('아이디는 6자 이상입니다.');
      idInput.current.focus();
      return;
    }

    if (state.pw.length < 1) {
      alert('비밀번호는 공백일 수 없습니다.');
      pwInput.current.focus();
      return;
    }

    // submit 누르면 실행될 로그인(데이터 전달?함수) 짜야됨
    alert('로그인합니다~~');
    navigate('/');
  };

  return (
    <>
      <FixedHeader />
      <div className='SignIn'>
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
        <MyButton onClick={handleSubmit} text={'Sign In'}/>
      </div>
    </>
  );
};

export default SignInPage;
