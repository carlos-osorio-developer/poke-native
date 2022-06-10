import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Favorites from '../screens/Favorites';
import Pokedex from '../screens/Pokedex';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorites" component={Favorites} options={{
        tabBarLabel: 'Favorites',
        tabBarIcon: ({color, size}) => <Icon name="heart" color={color} size={size} />
      }} />
      <Tab.Screen name="Pokedex" component={Pokedex} options={{
        tabBarLabel: '',
        tabBarIcon: () => renderPokeIcon(),
      }} />
      <Tab.Screen name="Account" component={Account} options={{
        tabBarLabel: 'My account',
        tabBarIcon: ({color, size}) => <Icon name="user" color={color} size={size} />
      }} />
    </Tab.Navigator>
  )
}

function renderPokeIcon() {
  return (
    <Image
      source={require('../assets/poke-icon.png')}
      style={{ width: 60, height: 60, top: -20 }}
    />
  )
}