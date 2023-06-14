import { useNavigate, useParams } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import "../styles/CountryDetails.scss";
import useFetchCountries from "../hooks/useFetchCountries";
import Borders from "../components/Borders";
import { getCurrency, getLanguageString, getNativeName } from "../config/utils";

const CountryDetails = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const { countryName } = useParams();
  const { data: country } = useFetchCountries(
    `https://restcountries.com/v3.1/name/${countryName}`
  );

  const borders = country[0]?.borders;

  return (
    <section className="country-details">
      <div onClick={goBack}>
        <span>
          <MdArrowBack />
        </span>
        <span>Back</span>
      </div>

      {country && (
        <div className="content">
          <div className="flag-wrapper">
            <img src={country[0]?.flags?.svg} alt={country[0]?.flags?.alt} />
          </div>

          <div className="text-container">
            <div className="text">
              <div>
                <h2>{country[0]?.name?.common}</h2>
                <p>
                  <span>native name: </span>
                  {getNativeName(country[0]?.name?.nativeName)}
                </p>
                <p>
                  <span>population: </span>
                  {country[0]?.population}
                </p>
                <p>
                  <span>region: </span>
                  {country[0]?.region}
                </p>
                <p>
                  <span>sub region: </span>
                  {country[0]?.subregion}
                </p>
                <p>
                  <span>capital: </span>
                  {country[0]?.capital?.[0]}
                </p>
              </div>

              <div>
                <p>
                  <span>Top Level Domain: </span>
                  {country[0]?.tld?.[0]}
                </p>
                <p>
                  <span>currencies: </span>
                  {getCurrency(country[0]?.currencies)}
                </p>
                <p>
                  <span>languages: </span>
                  {getLanguageString(country[0]?.languages)}
                </p>
              </div>
            </div>

            <div>
              <Borders borders={borders} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CountryDetails;
