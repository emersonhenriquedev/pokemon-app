import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  width: 40%;
  margin: 0 auto;
  background-color: #f7fafc;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
`;

const Stats = styled.div`
  background-color: #f7fafc;
`;

const ImageContainer = styled.div`
  /* background-color: #a4984b; */
  /* width: 100%; */
  /* height: 100%; */

  @media (max-width: 700px) {
    width: 80%;
  }
`;

export default function Pokemon(props) {
  const { id } = useParams();
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const [imgUrl, setImgUrl] = useState(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  );
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState(undefined);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    try {
      const data = await axios.get(url);
      setPokemonData(data.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return "loading";
  }

  return (
    <>
      <Header />
      <Container>
        <ImageContainer>
          <img src={imgUrl} style={{ width: "100%", height: "100%" }} />
        </ImageContainer>

        <Stats>
          <p>
            Name: <strong>{pokemonData.name}</strong>
          </p>
          <p>
            Experience: <strong>{pokemonData.base_experience}exp</strong>{" "}
          </p>
          <p>
            Weight: <strong>{pokemonData.weight}</strong>{" "}
          </p>
          <p>
            Attack: <strong>{pokemonData.stats[1].base_stat}K</strong>{" "}
          </p>
          <p>
            Defense: <strong>{pokemonData.stats[2].base_stat}K</strong>{" "}
          </p>
          <p>
            Special: <strong>{pokemonData.stats[2].base_stat}K</strong>{" "}
          </p>
        </Stats>
      </Container>
    </>
  );
}
