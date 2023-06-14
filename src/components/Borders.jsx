import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const Borders = ({ borders }) => {
  const [data, setData] = useState([]);

  const getBorderCountries = useCallback(async () => {
    const countries = await Promise.all(
      borders?.map(async (border) => {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${border}`
        );
        return response.json();
      })
    );

    const countryNames = countries.map((country) => country[0]?.name?.common);
    setData(countryNames);
  }, [borders]);

  useEffect(() => {
    getBorderCountries();
  }, [getBorderCountries]);

  Borders.propTypes = {
    borders: PropTypes.array,
  };

  return (
    <div>
      {data && (
        <p>
          Border countries:
          {data.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>
      )}
    </div>
  );
};

export default Borders;
