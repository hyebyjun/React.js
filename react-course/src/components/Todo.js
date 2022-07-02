function Todo(props) {
  const deleteHandler = () => {
    alert('지울거야?');
  };
  return (
    <>
      <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo;
