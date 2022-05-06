import FixedHeader from '../components/common/FixedHeader';

const BoardList = () => {
  return (
    <>
      <FixedHeader />
      <div className='BoardPage'>
        <table>
          <colgroup>
            <col width='15%' />
            <col width='40%' />
            <col width='15%' />
            <col width='15%' />
            <col width='15%' />
          </colgroup>
          <tr>
            <th>No.</th>
            <th>제목</th>
            <th>작성일</th>
            <th>작성자</th>
            <th>조회수</th>
          </tr>
          <tr>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default BoardList;
