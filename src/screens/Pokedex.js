import { SafeAreaView, Text } from 'react-native'
import { getPokemonsAPI } from '../api/pokemon'
import React, { useState, useEffect } from 'react'

export default function Pokedex() {  
  useEffect(() => {
    fetchPokemons();
  }, [])
  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  )
}

const fetchPokemons = async() => {
  try{
    const response = await getPokemonsAPI();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}