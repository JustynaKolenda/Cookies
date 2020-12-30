import React, { useCallback, useContext } from 'react';
import { Dimensions, Animated, View, Text, PanResponder,} from 'react-native';
import styled from 'styled-components/native';
import { observer } from 'mobx-react-lite'
import { CounterStoreContext } from '../variables/store';
 
const {width, height} = Dimensions.get('window')


const CookieClik = observer(() => {
    const CounterStore = useContext(CounterStoreContext)
    const handleChange = ()=> {
        CounterStore.increment()
    }

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            position.setOffset({
            x: (position.x as any)._value,
            y: (position.y as any)._value,
          });
          position.setValue({ x:0, y:0})
        },
        onPanResponderMove: (event, gesture) => {
            position.setValue({ x: gesture.dx, y: gesture.dy });
       },
        onPanResponderRelease: () => {
            position.flattenOffset();
        }
    });

    return(
        <Animated.View style={position.getLayout()} {...panResponder.panHandlers}>
            <Click onPress={handleChange}>
                <Cookie source={{uri: 'bigcookie'}}/> 
            </Click>
        </Animated.View>
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