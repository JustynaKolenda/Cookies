import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import { DATA } from '../variables/listOfAchievments';
import styled from 'styled-components/native';
import Item from './ItemScreen';


const Achievements = () => {
  const renderItem = ({ item }:any) => (
    <Item uri={item.uri} />
  );
  const separator = () => (<View style={{paddingTop:10,}}/>)

  return (
    <ViewGroup>
      <FlatList
        style={{backgroundColor:'#000000', }}
        ItemSeparatorComponent={separator}
        data={DATA}
        keyExtractor={(item)=>item.id}
        numColumns={5}
        horizontal={false}
        renderItem={renderItem}
      />
    </ViewGroup>
  );
}

const {width, height} = Dimensions.get('window')
const ViewGroup = styled.View({
  alignItems:"center",
  backgroundColor:'#000000',
  height:height,
  padding:20
})

export default Achievements;

