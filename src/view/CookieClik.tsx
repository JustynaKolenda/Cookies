import React, { useCallback, useContext, useEffect } from 'react';
import { Dimensions, Animated, View, Text, PanResponder,} from 'react-native';
import styled from 'styled-components/native';
import { observer } from 'mobx-react-lite'
import { CounterStoreContext } from '../variables/store';
import { interpolate } from 'react-native-reanimated';
 
const {width, height} = Dimensions.get('window')


const CookieClik = observer(() => {
    const CounterStore = useContext(CounterStoreContext)
    const handleChange = ()=> {
        CounterStore.increment()
    }

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (e, gestureState) => {
            position.setValue({x: 0, y: 0});
         },
        onPanResponderMove: (event, gesture) => {
            position.setValue({ x: gesture.dx, y: gesture.dy });
       },
        onPanResponderRelease: () => {
            Animated.spring(position, {
                toValue: 1,
                friction: 1,
                useNativeDriver: true 
              }).start();
        }
    });

    const springValue = new Animated.Value(0.3)
    const spring = ()=>{
        springValue.setValue(0.3)
        Animated.spring(
          springValue,{
            toValue: 1,
            friction: 1,
            useNativeDriver: true 
          }
        ).start()
    } 

    useEffect(()=>{
        spring()
    },[])

    return(
        <Animated.View style ={{transform: [...position.getTranslateTransform() as any,{scale: springValue}]}} {...panResponder.panHandlers}>
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