const BoardItem = ({ id, title, create_date, author }) => {

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{author}</td>
        <td>{create_date}</td>
      </tr>
    </>
  );
};

export default BoardItem;
