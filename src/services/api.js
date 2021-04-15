import axios from "axios";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const getPokemonData = async (url) => {
  const data = await axios.get(url);
  console.log(data.data);
  return data;
};
