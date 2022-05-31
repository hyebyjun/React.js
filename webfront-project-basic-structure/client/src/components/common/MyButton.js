const MyButton = ({ onClick, text }) => {
  return (
    <div className='MyButton'>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default MyButton;
