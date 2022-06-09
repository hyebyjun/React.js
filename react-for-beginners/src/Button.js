import PropTypes from 'prop-types';
import styled from './Button.module.css';

const Button = ({ text }) => {
  return (
    // <button style={{ backgroundColor: 'tomato', color: 'white' }}>
    <button className={styled.btn}>{text}</button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
