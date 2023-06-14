import { AiOutlineSearch } from "react-icons/ai";
import "../styles/Search.scss";

const Search = () => {
  return (
    <div className="search">
      <AiOutlineSearch />
      <input
        type="text"
        placeholder="Search for a country..."
        id="search-country"
      />
    </div>
  );
};

export default Search;
