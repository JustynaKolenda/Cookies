import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Achievements from '../view/AchievementsScreen';
import ItemKnow from '../view/ItemKnowScreen';
import { NavigationName } from '../variables/NavigationName';
import AchievmentInfo from '../view/AchievmentInfoScreen';

const AcievmentsStack = createStackNavigator();

const AchievementsNavigation = ()=> {
  return (
    <AcievmentsStack.Navigator>
      <AcievmentsStack.Screen name={NavigationName.ACHIEVMENTS} component={Achievements} />
      <AcievmentsStack.Screen name={NavigationName.ACHIEVMENT}  component={ItemKnow} />
      <AcievmentsStack.Screen name={NavigationName.DESCRIPTION}  component={AchievmentInfo} />
    </AcievmentsStack.Navigator>
  );
}

export default AchievementsNavigation