import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className='movie'>
      <img src={coverImg} alt={title} />
      <div className='movie__data'>
        <h3 className='movie__title'>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h3>
        <h5 className='movie__year'>{year}</h5>
        <p className='movie__summary'>{summary.slice(0, 140)} ...</p>
        <ul className='genres'>
          {genres.map((g, idx) => (
            <li key={idx} className='genres__genre'>
              {g}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
