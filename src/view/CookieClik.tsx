import React, { useCallback, useContext } from 'react';
import { Dimensions, Animated, View, Text,} from 'react-native';
import styled from 'styled-components/native';
import { observer } from 'mobx-react-lite'
import { CounterStoreContext } from '../variables/store';
 
const {width, height} = Dimensions.get('window')


const CookieClik = observer(() => {
    const CounterStore = useContext(CounterStoreContext)
    const handleChange = ()=> {
        CounterStore.increment()
    }
    return(
        <View>
            <Click onPress={handleChange}>
                <Cookie source={{uri: 'bigcookie'}}/> 
            </Click>
        </View>
    )    
})

const Click = styled.TouchableOpacity({
    alignItems:'center'
})


const Cookie = styled(Animated.Image)({
    width: width/2,
    height: height/4,
    marginBottom: 20,
})

export default CookieClik