import Card from "../components/Card";
import Search from "../components/Search";
import "../styles/Home.scss";
import useFetchCountries from "../hooks/useFetchCountries";
import { useState, useEffect, useCallback } from "react";
import Dropdown from "../components/Dropdown";
import { options } from "../config/utils";

const debounce = (func, delay) => {
  let timerId;
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [region, setRegion] = useState("");

  const { data: countries } = useFetchCountries(
    "https://restcountries.com/v3.1/all"
  );

  const filterResults = useCallback(
    (selectedRegion, searchValue) => {
      if (selectedRegion !== "" && searchValue !== "") {
        const filteredData = countries.filter((country) => {
          return (
            country.region.toLowerCase() === selectedRegion.toLowerCase() &&
            Object.values(country)
              .join("")
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          );
        });
        setFilteredResults(filteredData);
      } else if (selectedRegion !== "") {
        const filteredData = countries.filter((country) => {
          return country.region.toLowerCase() === selectedRegion.toLowerCase();
        });
        setFilteredResults(filteredData);
      } else if (searchValue !== "") {
        const filteredData = countries.filter((country) => {
          return Object.values(country)
            .join("")
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        });
        setFilteredResults(filteredData);
      } else {
        setFilteredResults(countries);
      }
    },
    [countries]
  );

  useEffect(() => {
    filterResults(region, searchInput);
  }, [region, searchInput, filterResults]);

  const debouncedFilterResults = debounce(filterResults, 300);

  const handleSearchChange = (searchValue) => {
    setSearchInput(searchValue);
    debouncedFilterResults(region, searchValue);
  };

  const handleRegionChange = (selectedRegion) => {
    setRegion(selectedRegion);
    debouncedFilterResults(selectedRegion, searchInput);
  };

  return (
    <div className="home">
      <section>
        <form>
          <Search searchCountries={handleSearchChange} />
          <Dropdown
            placeHolder="Filter by Region"
            setRegion={handleRegionChange}
            options={options}
          />
        </form>
      </section>
      <section className="card-container">
        {filteredResults.slice(0, 32).map((country, index) => (
          <Card
            key={Math.random(Math.floor(index) * 2030)}
            name={country.name.common}
            population={Number(country.population)}
            region={country.region}
            capital={country.capital?.[0]}
            src={country.flags.png}
            url={`name/${country.name.common}`}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
