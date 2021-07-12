import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import { getPokemonData } from "../services/api";
import Card from "../components/Card";
import Header from "../components/Header";

const Container = styled.div`
  background-color: #f7fafc;
  padding: 5px;

  .pagination {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }
`;

const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled.button`
  background-color: black;
  border: none;
  border-radius: 50%;
  width: 70px;
  height: 40px;
  margin: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
`;

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchData();
    return () => { };
  }, [url]);

  useEffect(() => {
    fetchPokemon();
    return () => { };
  }, [data]);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchPokemon = async () => {
    try {
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);

      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const renderCards = (pokemon) => {
    return (
      <Card
        key={pokemon.data.id}
        name={pokemon.data.name}
        id={pokemon.data.id}
        imgUrl={pokemon.data.sprites.front_default}
        types={pokemon.data.types}
      />
    );
  };

  const nextPage = () => {
    setUrl(data.next);
  };

  const previousPage = () => {
    setUrl(data.previous);
  };

  return (
    <>
      <Header />

      <Container>

        <PokemonList>{!loading && pokemons.map(renderCards)}</PokemonList>
        <div className="pagination">
          {data.previous && <Button onClick={previousPage}>Previous</Button>}
          {data.next && <Button onClick={nextPage}>Next</Button>}
        </div>
      </Container>
    </>
  );
}
