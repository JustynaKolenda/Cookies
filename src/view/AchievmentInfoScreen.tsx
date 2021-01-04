import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

interface IAchievmentInfoP {
    id: string,
    uri: string,
    title: string,
    description: string,
    type: string,
    count: number,
}

const AchievmentInfo = (props:IAchievmentInfoP) => (
    <ClickAchiev>
        <Text style={{color:'#ffffff', fontSize:20}}>{props.id}</Text>
        <AchievementsImage source={{uri: 'ic_achievement'}}/>
        <Text>{props.description}</Text>
    </ClickAchiev>
);
 

const ClickAchiev = styled.View({
    width:'100%',
    height:'100%',
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems:'center',
    marginRight:15,
    color: '#ffffff'
})
  
const AchievementsImage = styled.Image({
    width: 60,
    height: 60,
})

export default AchievmentInfo