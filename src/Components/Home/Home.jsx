import React from "react";
import Header from "../Header/Header";
import Location from "../Accordions/Location";
import Travel from "../Accordions/Travel";
import Accomdations from "../Accordions/Accomdations";
import Activities from "../Accordions/Activities";

const Home = () => {
  return (
    <div>
      <Header />
      <Location />
      <Travel />
      <Accomdations />
      <Activities />
    </div>
  );
};

export default Home;
