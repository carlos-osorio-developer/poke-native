import { SafeAreaView, Text } from 'react-native'
import { getPokemonsAPI, getPokemonDetailsAPI } from '../api/pokemon'
import React, { useState, useEffect } from 'react'

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
      setPokemons(pokemonsArray);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  )
}