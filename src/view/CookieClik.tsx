import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';



const CookieClik = () => {

    return(
        <Cookie source={{uri: 'bigcookie'}}/> 
    )
}

const Cookie = styled.Image({
    width: 200,
    height: 200,
})

export default CookieClik