import React from "react";
import Container from "../Container/Container";
import Headersmall from "../Headersmall/Headersmall";
import Headerbig from "../Headerbig/Headerbig";
import Products from "../Products/Products";

const Home = props => {
  return (
    <Container>
      <Headerbig title="Welcome to our store" />

      <Headersmall title="Desktops" />
      <Products category="desktop"/>

      <Headersmall title="Tablets" />
      <Products category="tablet"/>
    </Container>
  );
};

export default Home;
