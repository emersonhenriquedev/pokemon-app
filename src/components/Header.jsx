import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: orange;
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 5%;
`;

export default function Header() {
  return (
    <Container>
      <Link to="/">Pokedex</Link>
    </Container>
  );
}
