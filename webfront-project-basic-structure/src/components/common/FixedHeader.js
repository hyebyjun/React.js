import { Layout, Menu, Button } from 'antd';
import {
  SearchOutlined,
  BellOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import './FixedHeader.css';
import 'antd/dist/antd.min.css';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const FixedHeader = ({ user }) => {
  const navigate = useNavigate();

  const clickLogin = () => {
    navigate('/login');
  };

  const clickLogout = () => {
    navigate('/');
  };
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 4, width: '100%' }}>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal'>
          <Menu.Item key='0'>
            <Link to='/dashboard'>Dashboard</Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/shipment'>Shipments</Link>
          </Menu.Item>
          <Menu.Item key='3' disabled={true}>
            Billing
          </Menu.Item>
          <Menu.Item key='4'>
            <Link to='/request'>Submit a shipment request</Link>
          </Menu.Item>
          <Menu.Item key='5' icon={<InfoCircleOutlined />}>
            Help
          </Menu.Item>
          <Menu.Item key='6' icon={<SearchOutlined />}></Menu.Item>
          <Menu.Item key='7' icon={<BellOutlined />}></Menu.Item>
          <Menu.Item key='10'>
            {user ? (
              <div className='right'>
                <Button to='Logout' onClick={clickLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className='right'>
                <Button to='login' onClick={clickLogin}>
                  login
                </Button>
              </div>
            )}
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default FixedHeader;
