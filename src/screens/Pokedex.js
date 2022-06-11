import { SafeAreaView } from 'react-native'
import { getPokemonsAPI, getPokemonDetailsAPI } from '../api/pokemon'
import React, { useState, useEffect } from 'react'
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    (async () => {
      await fetchPokemons();
    })();
  }, []);

  const fetchPokemons = async() => {
    try{
      const response = await getPokemonsAPI();
      const pokemonsArray = [];

      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsAPI(pokemon.url)
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other.home.front_default
        })
      }      

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList pokeList={pokemons} />
    </SafeAreaView>
  )
}