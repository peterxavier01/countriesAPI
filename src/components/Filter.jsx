import { useState } from "react";
import "../styles/Filter.scss";

const Filter = () => {
  const [region, setRegion] = useState();

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };
  return (
    <div className="filter">
      <select id="region" value={region} onChange={handleRegionChange}>
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
