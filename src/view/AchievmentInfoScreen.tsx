import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { ItemType } from '../variables/types';

interface IAchievmentInfoP {
    navigation: any,
    route: any
}

const AchievmentInfo = (props:IAchievmentInfoP) => {
    const item = props.route.params.item as ItemType

    return(
        <ClickAchiev>
            <TitleView>
                <Title>{item.title}</Title>
            </TitleView>
            <AchievementsImage source={{uri: item.uri}}/>
            <ViewDescription>
                <DescriptionText>{item.description}</DescriptionText>
            </ViewDescription>
        </ClickAchiev>
    )
};
 

const ClickAchiev = styled.View({
    width:'100%',
    height:'100%',
    backgroundColor: '#000000',
    alignItems:'center',
    paddingTop: 30,
})

const TitleView = styled.View({
    borderBottomWidth: 5,
    borderColor: '#ffffff',
    width: '90%',
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 40
})

const Title = styled.Text({
    color:'#ffffff', 
    fontSize: 25,
    paddingBottom: 10,
    paddingTop: 10,
    fontWeight: 'bold'
})
  
const AchievementsImage = styled.Image({
    width: 60,
    height: 60,
    marginBottom: 20
})

const ViewDescription = styled.View({
    alignItems:'center',
    width: '65%',
})

const DescriptionText = styled.Text({
    color:'#ffffff', 
    fontSize:20,
    fontWeight: 'bold',
    fontStyle: 'italic'
})

export default AchievmentInfo