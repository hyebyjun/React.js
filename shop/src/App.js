import './App.css';
import { Button, Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [shoes, setShoes] = useState([
    {
      id: 0,
      title: 'White and Black',
      content: 'Born in France',
      price: 120000,
    },

    {
      id: 1,
      title: 'Red Knit',
      content: 'Born in Seoul',
      price: 110000,
    },

    {
      id: 2,
      title: 'Grey Yordan',
      content: 'Born in the States',
      price: 130000,
    },
  ]);

  return (
    <div className='App'>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>Link</Nav.Link>
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='Jumbotron'>
        <h1>Hello, world!</h1>
        <p>어쩌구 저쩌구 긴 문장을 적고 싶기도 한데</p>
        <p>어쩌구 저쩌구 긴 문장을 적고 싶기도 한데</p>
        <p>어쩌구 저쩌구 긴 문장을 적고 싶기도 한데</p>
        <p>
          <Button variant='primary'>Learn more</Button>
        </p>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img
              src='https://codingapple1.github.io/shop/shoes1.jpg'
              width='100%'
            />
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div className='col-md-4'>내용 2</div>
          <div className='col-md-4'>내용 3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
