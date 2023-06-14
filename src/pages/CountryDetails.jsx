import { useNavigate, useParams } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import "../styles/CountryDetails.scss";
import useFetchCountries from "../hooks/useFetchCountries";
// import useCountryCode from "../hooks/useCountryCode";

const CountryDetails = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const { countryName } = useParams();
  const { data: country } = useFetchCountries(
    `https://restcountries.com/v3.1/name/${countryName}`
  );
  console.log(country);

  // const borderCountries = country[0]?.borders;
  // const borderCountry =
  //   borderCountries &&
  //   borderCountries?.map((border) => {
  //     return border;
  //   });

  // const { data } = useCountryCode(borderCountry && borderCountry.toString());
  // console.log(data);
  // const name =
  //   data &&
  //   data.map((item) => {
  //     return item?.name?.common;
  //   });
  // console.log(name);
  const getLanguageString = () => {
    let language = country[0]?.languages;
    let langArray = Object.entries(language ?? {});
    let langArrayMapped = langArray.map((item) => item[1]);
    let languages = langArrayMapped.map((item) => item);

    return languages.join(", ");
  };

  const getNativeName = () => {
    let nativeName = country[0]?.name?.nativeName;
    let nativeNameArray = Object.entries(nativeName ?? {});
    let nativeNameArrayMapped = nativeNameArray.map(
      (nativeNameArray) => nativeNameArray[1]
    );
    let nativeNames = nativeNameArrayMapped.map((item) => item.common);
    return nativeNames?.[0];
  };

  const getCurrency = () => {
    const currency = country[0]?.currencies;
    const currencyArray = Object.entries(currency ?? {});
    let currencyName = currencyArray.map((item) => item[1]?.name);
    return currencyName;
  };

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
                  {getNativeName()}
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
                  {getCurrency()}
                </p>
                <p>
                  <span>languages: </span>
                  {getLanguageString()}
                </p>
              </div>
            </div>

            <div>
              <p>
                Border countries:
                <span>France</span>
                <span>Germany</span>
                <span>Netherlands</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CountryDetails;
