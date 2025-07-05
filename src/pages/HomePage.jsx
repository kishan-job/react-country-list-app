import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../features/countires/countiresSlice";
import { signIn } from "../assets/index";
import "./HomePage.css";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";
import Nav from "../components/Nav/Nav";
import CountriesList from "../components/CountriesList/CountriesList";

function HomePage() {
  const dispatch = useDispatch();
  const { status, displayedCountries } = useSelector(
    (state) => state.countriesSlice
  );

  useEffect(() => {
    if (status === "idle" || status === "failed") {
      dispatch(fetchCountries());
    }
  }, [status, dispatch]);

  return displayedCountries.length === 0 ? (
    <section>
      {" "}
      <div className="container">Home page is loading</div>
    </section>
  ) : (
    <section>
      <Nav />

      <h1 className="container welcome">WELCOME</h1>

      <main className=" container heroSlide">
        <Slider />
        <div className="asideImage">
          <img src={displayedCountries[2].flag} alt="" />
        </div>
      </main>

      <CountriesList />

      <Footer />
    </section>
  );
}

export default HomePage;
