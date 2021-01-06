import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CounterStore, CounterStoreContext } from './src/variables/store';
import TabNavigation from './src/navigation/TabNavigation';

const Tab = createBottomTabNavigator();

export default function App() {
  const store = new CounterStore()
  return (
    <CounterStoreContext.Provider value={store}>
      <TabNavigation/>
    </CounterStoreContext.Provider>
  );
}
