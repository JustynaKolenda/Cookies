import * as React from 'react';
import { Image, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CookieScreen from '../view/CookieScreen';
import AchievementsNavigation from './AchievmentsNavigation';
import { NavigationName } from '../variables/NavigationName';

const Tab = createBottomTabNavigator();

function TabNavigation() {
 
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({focused}) => {
            let iconName;
            if (route.name === NavigationName.COOKIE) {
                iconName = focused ? 'ic_cookie_tab' : 'ic_cookie_tab_focused'
            } else if (route.name === NavigationName.ACHIEVMENTS) {
                iconName = focused ? 'ic_achievments_tab': 'ic_achievments_tab_focused'
            }
            return <Image style={{width:25,height:25}} source={{uri: iconName}}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ffffff',
          inactiveTintColor: '#474444',
          style: {backgroundColor: '#000000'},
        }}
      >
        <Tab.Screen name={NavigationName.COOKIE} component={CookieScreen} />
        <Tab.Screen name={NavigationName.ACHIEVMENTS} component={AchievementsNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigation
