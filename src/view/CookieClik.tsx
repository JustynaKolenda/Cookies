import React, { useState } from 'react';
import { Dimensions, Text, View, Animated, Easing} from 'react-native';
import styled from 'styled-components/native';

const {width, height} = Dimensions.get('window')

const CookieClik = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };


    return(
        <ViewCookie>
           
                <State>{count} cookies</State>
                <Click onPress={handleIncrement}>
                    <Cookie source={{uri: 'bigcookie'}}/> 
                </Click>
          
        </ViewCookie>
    )
}

const ViewCookie = styled.View({
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    height:'100%'
})

const State = styled.Text({
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    position: 'absolute',
    top: 60
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