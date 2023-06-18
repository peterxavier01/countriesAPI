import { AiOutlineSearch } from "react-icons/ai";
import "../styles/Search.scss";
import PropTypes from "prop-types";

const Search = ({ searchCountries }) => {
  return (
    <div className="search">
      <AiOutlineSearch />
      <input
        type="text"
        placeholder="Search for a country..."
        id="search-country"
        onChange={(e) => {
          e.preventDefault();
          searchCountries(e.target.value);
        }}
      />
    </div>
  );
};

Search.propTypes = {
  searchCountries: PropTypes.func,
};

export default Search;
