/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 * @format
 */

import React from 'react';
import {
  FlatList,
  StatusBar, View,
} from 'react-native';
import CookieScreen from './src/view/CookieScreen';
import { CounterStoreContext, CounterStore } from './src/variables/store';
import Achievements from './src/view/AchievementsScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

declare const global: {HermesInternal: null | {}};
const store = new CounterStore()

const App = () => {
  return (
    <CounterStoreContext.Provider value={store}>
      <SafeAreaView>
        {/* <CookieScreen/> */}
        <Achievements/>
      </SafeAreaView>
    </CounterStoreContext.Provider>
  );
};



export default App;
