import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { NavigationName } from '../variables/NavigationName';
import { ItemType } from '../variables/types';
interface IntItem {
    item: ItemType, 
    uri: string
}

const ItemKnow = ({item}:IntItem) => {
    const navigation = useNavigation();
    const navToDescription = () => {
        navigation.navigate(NavigationName.DESCRIPTION, {item})
    }

    return( 
        <ClickAchiev onPress={navToDescription}>
            <AchievementsImage source={{uri: item.uri}}/>
        </ClickAchiev>
   )
};
 

const ClickAchiev = styled.TouchableOpacity({
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#ffffff',
    justifyContent: 'center',
    alignItems:'center',
    marginRight:15
})
  
const AchievementsImage = styled.Image({
    width: '80%',
    height: '80%',
})

export default ItemKnow