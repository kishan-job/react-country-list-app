import React from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import "./CountriesList.css";
import { loadMoreCountries } from "../../features/countires/countiresSlice";
function CountriesList() {
  const displayedCountries = useSelector(
    (state) => state.countriesSlice.displayedCountries
  );
  const dispatch = useDispatch();
  const loadMore = () => {
    dispatch(loadMoreCountries());
  };

  return (
    <>
      <div className="container contryList">
        {displayedCountries.map((country) => (
          <Card
            key={country.name}
            image={country.flag}
            continent={country.name}
            country={country.region}
          />
        ))}
      </div>
      <div className="container">
        <button  className ="loadMore"onClick={loadMore}>Load more</button>
      </div>
    </>
  );
}

export default CountriesList;
