import { StyleSheet, Text, FlatList } from 'react-native'
import React from 'react'

export default function PokemonList(props) {
  const { pokeList } = props;
  return (
    <FlatList 
      data = {pokeList}
      numColumns = {2}
      showsVerticalScrollIndicator = {false}
      keyExtractor = {(pokemon) => String(pokemon.id)}
      renderItem = {({ item }) => <Text>{item.name}</Text>}
      contentContainerStyle = {styles.flatListContentContainer}
    />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 25
  }
})