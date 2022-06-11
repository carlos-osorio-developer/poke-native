import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';
import FavoriteNavigation from './FavoriteNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FavoritesTab" component={FavoriteNavigation} options={{
        tabBarLabel: 'Favorites',
        headerShown: false,
        tabBarIcon: ({color, size}) => <Icon name="heart" color={color} size={size} />
      }} />
      <Tab.Screen name="PokedexTab" component={PokedexNavigation} options={{        
        tabBarLabel: '',
        headerShown: false,
        tabBarIcon: () => renderPokeIcon(),
      }} />
      <Tab.Screen name="AccountTab" component={AccountNavigation} options={{
        tabBarLabel: 'My account',
        headerShown: false,
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