// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CookieScreen from '../view/CookieScreen';
import Achievements from '../view/AchievementsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigations() {
  return (
      <Tab.Navigator
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName;

        //     if (route.name === 'Cookie') {
        //       iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
        //     } else if (route.name === 'Achievements') {
        //       iconName = focused ? 'ios-list-box' : 'ios-list';
        //     }

        //     // You can return any component that you like here!
        //     return <Image source={{uri:'ic_question'}} style={{width:10,height:10}} />;
        //   },
        // })}
        // tabBarOptions={{
        //   activeTintColor: 'tomato',
        //   inactiveTintColor: 'gray',
        // }}
      >
        <Tab.Screen name="Cookie" component={CookieScreen} />
        <Tab.Screen name="Achievements" component={Achievements} />
      </Tab.Navigator>
  );
}
