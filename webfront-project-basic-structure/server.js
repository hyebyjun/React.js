// 서버를 띄우기 위한 기본 세팅
const express = require('express');
const app = express();
// 요거 두개는 모듈 라이브러리 첨부해주세요, 객체 만들어주세요 그런 의미..

const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/요청url', req와 res를 인자로 갖는 콜백함수)
// 예시
app.get('/hello', function hello(req, res) {
  res.send('반갑습니다.');
  console.log('잘 나오죠?');
});
// 이건 화살표함수로 표현 + send로 나타낼 내용가 객체인 것뿐..
app.get('/api/customers', (req, res) => {
  res.send([
    {
      id: 1,
      image: 'https://placeimg.com/64/64/1',
      name: '홍길동',
      birthday: 1214,
      genter: '여자',
      job: '학생',
    },
  ]);
});

app.listen(port, () => console.log(`listening on ${port}`));
// 위에 port 명사로 포트번호 5000 설정해둬서 이렇게 써놨지만,

app.listen(8080, function () {
  console.log('들리세요?');
}); // listen(서버 띄울 포트번호, 띄운 후 실행할 코드)

// 이 맥락이라면 25번줄과 아래는 같은 맥락
// app.listen(5000, function () {
//   console.log(`listening on ${port}`);
// });
