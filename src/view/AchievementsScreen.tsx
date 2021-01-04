import React, { useContext } from 'react';
import { View, FlatList, Dimensions, SafeAreaView } from 'react-native';
import { DATA } from '../variables/listOfAchievments';
import styled from 'styled-components/native';
import ItemUnknow from './ItemUnknowScreen';
import { CounterStoreContext } from '../variables/store';
import { TypeName } from '../variables/TypeName';
import ItemKnow from './ItemKnowScreen';

const Achievements = () => {
  const CounterStore = useContext(CounterStoreContext)

  const checkAchievements = (item:any)=> {
    switch(item.type){
      case TypeName.LEVEL:
        return item.count < CounterStore.level 
      case TypeName.COOKIES:
        return item.count < CounterStore.count 
      default:
        console.log('Unknown achievements')
    }
  }

  const renderItem = ({ item }:any) => {
    return (checkAchievements(item))?
    <ItemKnow uri={item.uri} item={item} />
    :
    <ItemUnknow uri={'ic_question'} />
  };
  const separator = () => (<Separator/>)

  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
}

const {width, height} = Dimensions.get('window')
const ViewGroup = styled.View({
  alignItems:"center",
  backgroundColor:'#000000',
  height:height,
  padding:20
})

const Separator = styled.View({
  paddingTop:10
})

export default Achievements;

