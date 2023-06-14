import Card from "../components/Card";
import Filter from "../components/Filter";
import Search from "../components/Search";
import "../styles/Home.scss";
import useFetchCountries from "../hooks/useFetchCountries";

const Home = () => {
  const { data: countries } = useFetchCountries(
    "https://restcountries.com/v3.1/all"
  );
  console.log(countries);

  return (
    <div className="home">
      <section>
        <form>
          <Search />
          <Filter />
        </form>
      </section>
      <section className="card-container">
        {countries &&
          countries
            .slice(0, 28)
            .map((country, index) => (
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
