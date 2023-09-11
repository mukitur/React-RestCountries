import { useState } from 'react';
import './Country.css';
const Country = ({ country, handleVisitedCountry }) => {
  const { name, capital, region, flags, population, cca3 } = country;
  //   console.log(country);
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    // setVisited(true);
    setVisited(!visited);
  };
  //   console.log(handleVisitedCountry);
  return (
    <div className="country">
      <h3>Name: {name?.common} </h3>
      <img src={flags.png} alt="" />
      <h4>Capital: {capital}</h4>
      <h4>Population: {population}</h4>
      <h4> Region: {region}</h4>
      <h4> Code: {cca3}</h4>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <br /> <br />
      <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
      {visited && ' I have visited this country'}
    </div>
  );
};

export default Country;
