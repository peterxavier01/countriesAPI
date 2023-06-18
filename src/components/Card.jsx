import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/Card.scss";

const Card = ({ url, src, name, population, region, capital }) => {
  return (
    <div className="card-wrapper">
      <Link to={url} className="card-wrapper-link">
        <div className="card-img">
          <img src={src} alt={name} loading="lazy" />
        </div>
      </Link>
      <div className="card-content">
        <Link to={url}>
          <p>{name}</p>
        </Link>
        <p>
          <span>Population:</span> {population}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.string,
  src: PropTypes.string,
};

export default Card;
