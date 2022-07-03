function Modal(props) {
  const cancelHandler = () => {
    props.onCancel();
  };
  const comfirmHandler = () => {
    props.onConfirm();
  };
  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn btn--alt' onClick={cancelHandler}>
        Cancel
      </button>
      <button className='btn' onClick={comfirmHandler}>
        Comfirm
      </button>
    </div>
  );
}

export default Modal;
