import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { NavigationName } from '../variables/NavigationName';
interface ItemP {
    item: {
        id: string,
        uri: string,
        title: string,
        description: string,
        type: string,
        count: number,
    },
    uri: string
    
}

const ItemKnow = (props:ItemP) => {
    const navigation = useNavigation();

    return( 
        <ClickAchiev onPress={() => navigation.navigate(NavigationName.DESCRIPTION)}>
            <AchievementsImage source={{uri: props.item.uri}}/>
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