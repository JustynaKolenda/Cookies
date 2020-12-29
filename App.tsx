/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *<a href='https://pl.freepik.com/vectors/streszczenie'>Streszczenie plik wektorowy utworzone przez vector_corp - pl.freepik.com</a>
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import CookieClik from './src/view/CookieClik';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
          <CookieClik/>
      </SafeAreaView>
    </>
  );
};



export default App;
