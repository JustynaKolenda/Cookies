import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CookieScreen from './src/view/CookieScreen';
import Achievements from './src/view/AchievementsScreen';
import { CounterStore, CounterStoreContext } from './src/variables/store';

const Tab = createBottomTabNavigator();

export default function App() {
  const store = new CounterStore()
  return (
    <CounterStoreContext.Provider value={store}>
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#ffffff',
          inactiveTintColor: '#474444',
          style: {backgroundColor: 'black'}
        }}
      >
        <Tab.Screen name="Cookie" component={CookieScreen} />
        <Tab.Screen name="Achievements" component={Achievements} />
      </Tab.Navigator>
    </NavigationContainer>
    </CounterStoreContext.Provider>
  );
}
