import React, { useContext } from 'react';
import { View, FlatList, Dimensions, SafeAreaView } from 'react-native';
import { DATA } from '../variables/listOfAchievments';
import styled from 'styled-components/native';
import ItemUnknow from './ItemUnknowScreen';
import { CounterStoreContext } from '../variables/store';
import { TypeName } from '../variables/TypeName';
import ItemKnow from './ItemKnowScreen';
import { ItemType } from '../variables/types';
import { observer } from 'mobx-react-lite';

const Achievements = observer(() => {
  const CounterStore = useContext(CounterStoreContext)

  const checkAchievements = (item:ItemType)=> {
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
    <ItemKnow item={item} uri={item.uri} />
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
})

const {width, height} = Dimensions.get('window')
const ViewGroup = styled.View({
  alignItems:"center",
  backgroundColor:'#000000',
  height:height,
  paddingLeft: 10,
  paddingTop: 20
})

const Separator = styled.View({
  paddingTop:10
})

export default Achievements;

