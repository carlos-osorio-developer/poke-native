import { Text, FlatList } from 'react-native'
import React from 'react'

export default function PokemonList(props) {
  const { pokeList } = props;
  console.log(pokeList)
  return (
    <FlatList 
      data = {pokeList}
      numColumns = {2}
      showsVerticalScrollIndicator = {false}
      keyExtractor = {(pokemon) => String(pokemon.id)}
      renderItem = {({ item }) => <Text>{item.name}</Text>}
    />
  )
}