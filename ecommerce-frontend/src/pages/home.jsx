import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import LatestCollections from "../components/LatestCollections";
import BestSellers from "../components/BestSellers";
import FeaturesSection from "../components/FeaturesSection";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <LatestCollections/>
      <BestSellers/>
      <FeaturesSection/>
      <SubscribeSection/>
      <Footer/>
    </>
  );
};

export default App;
