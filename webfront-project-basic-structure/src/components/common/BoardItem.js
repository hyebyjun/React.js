const BoardItem = ({ id, title, create_date, author, hit }) => {
  
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        {/* <td>{new Date(created_date).toLocaleString()}</td> */}
        <td>{author}</td>
        <td>{hit}</td>
      </tr>
    </>
  );
};

export default BoardItem;
