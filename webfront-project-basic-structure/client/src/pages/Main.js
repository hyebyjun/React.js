import FixedHeader from '../components/common/FixedHeader';
import { Carousel } from 'antd';

const Main = () => {
  const contentStyle = {
    height: '550px',
    color: '#fff',
    lineHeight: '500px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <>
      <FixedHeader />
      <div className='Carousel'>
        <Carousel autoplay>
          <div>
            <h1 style={contentStyle}>컴포넌트를..</h1>
          </div>
          <div>
            <h2 style={contentStyle}>프롭스를 어케..</h2>
          </div>
          <div>
            <h1 style={contentStyle}>많이 넣으려면</h1>
          </div>
          <div>
            <h2 style={contentStyle}>어케해야하지......</h2>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Main;
