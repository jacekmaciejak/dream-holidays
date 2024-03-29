import React from "react";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services/Services";
import VacationDestination from "../components/VacationDestination/VacationDestination";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="egzotyczne wakacje"
          subtitle="egzotyczne wakacje od 999 zł"
        >
          <Link to="/wycieczki" className="btn-primary">
            wycieczki
          </Link>
          <Link to="/blog" className="btn-secondary">
            blog
          </Link>
        </Banner>
      </Hero>
      <Services />
      <VacationDestination />
    </>
  );
}
