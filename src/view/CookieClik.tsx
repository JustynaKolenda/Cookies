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
            <Image source={{uri:'stars'}}>
                <State>{count} cookies</State>
                <Click onPress={handleIncrement}>
                    <Cookie source={{uri: 'bigcookie'}}/> 
                </Click>
            </Image>
        </ViewCookie>
    )
}

const ViewCookie = styled.View({
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
})
const Image = styled.ImageBackground({
    resizeMode: "cover",
    width: '100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
})
const State = styled.Text({
    color: '#000000',
    fontSize: 28,
    fontWeight: 'bold',
    position: 'absolute',
    top: 40
})

const Click = styled.TouchableOpacity({
    alignItems:'center'
})

let scaleValue = new Animated.Value(0);
const cookieScale = scaleValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.1, 1.2]
});

const Cookie = styled(Animated.Image)({
    width: width/2,
    height: height/4,
    marginBottom: 20,
})

export default CookieClik