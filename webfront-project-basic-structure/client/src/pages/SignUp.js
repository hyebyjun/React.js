import { useState } from 'react';
import FixedHeader from '../components/common/FixedHeader';
import './SignUp.css';

const SignUp = () => {
  const [state, setState] = useState({
    name: '',
    id: '',
    pw1: '',
    pw2: '',
    mail_id: '',
    mail_tail: '',
  });

  const handleChangeState = (event) => {
    console.log(`target : ${event.target.name}`);
    console.log(`입력된 아이디 : ${state.mail_id}@${event.target.value}`);

    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <FixedHeader />
      <fieldset className='fieldset_class'>
        <h4>
          필수 정보 입력
          <span>(* 항목은 필수 항목입니다.)</span>
        </h4>
        <dl id='join_name_dl'>
          <dt>
            <label for='name'>이름</label>
          </dt>
          <dd>
            <input
              type='text'
              id='name'
              name='name'
              value={state.name}
              onChange={(event) => {
                setState({ ...state, name: event.target.value });
              }}
            />
          </dd>
        </dl>

        <dl id='join_id_dl'>
          <dt>
            <label for='id'>아이디</label>
          </dt>
          <dd>
            <input
              type='text'
              id='id'
              name='id'
              minlength='4'
              maxlength='16'
              value={state.id}
              onChange={(event) => {
                setState({ ...state, id: event.target.value });
              }}
            />
            <input type='button' onclick='idcheck()' value='중복확인' />
            <span id='id_title'></span>
            <span>
              4~16자리의 영문, 숫자, 특수기호(_)만 사용하실 수 있습니다. 첫
              글자는 영문으로 입력
            </span>
          </dd>
        </dl>

        <dl id='join_pw1_dl'>
          <dt>
            <label for='pw1'>비밀번호</label>
          </dt>
          <dd>
            <input
              type='text'
              id='pw1'
              name='pw1'
              minlength='8'
              value={state.pw1}
              onChange={(event) => {
                setState({ ...state, pw1: event.target.value });
              }}
            />
            <span>영문, 숫자, 특수문자 중 2종류 조합 시 10자리 이상 입력</span>
            <span>영문, 숫자, 특수문자 모두 조합 시 8자리 이상 입력</span>
          </dd>
        </dl>
        <dl id='join_pw2_dl'>
          <dt>
            <label for='pw2'>비밀번호 확인</label>
          </dt>
          <dd>
            <input
              type='password'
              id='pw2'
              name='pw2'
              minlength='8'
              value={state.pw2}
              onChange={(event) => {
                setState({ ...state, pw2: event.target.value });
              }}
            />
            <span>비밀번호를 다시 한번 입력해 주세요.</span>
          </dd>
        </dl>

        <dl id='join_mail_dl'>
          <dt>
            <label for='mail_id'>이메일</label>
          </dt>
          <dd>
            <input
              type='text'
              id='mail_id'
              name='mail_id'
              value={state.mail_id}
              onChange={(event) => {
                setState({ ...state, mail_id: event.target.value });
              }}
            />
            <span>@</span>
            {/* <input
              type='text'
              id='main_tail'
              name='mail_tail'
              value={state.mail_tail}
            /> */}
            <select
              name='mail_tail'
              value={state.mail_tail}
              onChange={handleChangeState}
            >
              <option value={'gmail.com'}>gmail.com</option>
              <option value={'naver.com'}>naver.com</option>
              <option value={'kakao.com'}>kakao.com</option>
            </select>
          </dd>
        </dl>

        <dl id='join_address_dl'>
          <dt>
            <label for=''>주소</label>
          </dt>
          <dd>
            <input type='text' id='f_postal' name='f_postal' />
            <span>-</span>
            <input type='text' id='l_postal' name='l_postal' />
            <input type='button' value='우편번호' />
            <input type='text' id='address1' name='address1' />
            <input type='text' id='address2' name='address2' />
          </dd>
        </dl>

        <dl id='join_tell_dl'>
          <dt>
            <label for='f_tell'>휴대전화</label>
          </dt>
          <dd>
            <input type='text' id='f_tell' name='f_tell' maxlength='3' />
            <span> - </span>
            <input type='text' id='m_tell' name='m_tell' maxlength='4' />
            <span> - </span>
            <input type='text' id='l_tell' name='l_tell' maxlength='4' />
          </dd>
        </dl>
        <dl id='join_birth_dl'>
          <dt>
            <label for='birth_year'>생년월일</label>
          </dt>
          <dd>
            <select id='birth_year' name='birth_year'>
              <option selected>선택</option>
              <option value='1990'>1990</option>
              <option value='1991'>1991</option>
              <option value='1992'>1992</option>
              <option value='1993'>1993</option>
              <option value='1994'>1994</option>
              <option value='1995'>1995</option>
              <option value='1996'>1996</option>
              <option value='1997'>1997</option>
              <option value='1998'>1998</option>
              <option value='1988'>1999</option>
              <option value='1920'>2000</option>
            </select>
            <span>년</span>
            <select id='birth_month' name='birth_month'>
              <option selected>선택</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
            </select>
            <span>월</span>
            <select id='birth_day' name='birth_day'>
              <option selected>선택</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
            <span>일</span>
            <div>
              <input
                type='radio'
                name='calendar'
                id='lunar'
                value='lunar'
                checked='checked'
              />
              <label for='lunar'>양력</label>
              <input type='radio' name='calendar' id='solar' value='solar' />
              <label for='solar'>음력</label>
            </div>
          </dd>
        </dl>
        <dl id='join_gender_dl'>
          <dt>
            <div></div>
            <label for=''>성별</label>
          </dt>
          <dd>
            <div>
              <input
                type='radio'
                name='gender'
                id='male'
                value='male'
                checked='checked'
              />
              <label for='male'>남성</label>
              <input type='radio' name='gender' id='female' value='female' />
              <label for='female'>여성</label>
            </div>
          </dd>
        </dl>
        <dl id='join_newsletter_dl'>
          <dt>
            <div></div>
            <label for=''>뉴스레터 수신여부</label>
          </dt>
          <dd>
            <span>이메일을 통한 상품 및 이벤트 정보 수신에 동의합니다.</span>
            <div>
              <input
                type='radio'
                name='newletter'
                id='newletter_y'
                value='yes'
                checked='checked'
              />
              <label for='newletter_y'>예</label>
              <input
                type='radio'
                name='newletter'
                id='newletter_n'
                value='no'
              />
              <label for='newletter_n'>아니오</label>
            </div>
          </dd>
        </dl>
      </fieldset>
    </>
  );
};

export default SignUp;
