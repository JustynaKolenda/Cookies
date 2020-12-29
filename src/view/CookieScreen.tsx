import React, { useCallback, useContext, useEffect, useState } from 'react';
import {Text, View,} from 'react-native';
import styled from 'styled-components/native';
import { CounterStoreContext } from '../variables/store';
import CookieClik from './CookieClik';
import { observer } from 'mobx-react-lite'


const CookieScreen = observer(() => {
    const CounterStore = useContext(CounterStoreContext)
   
    return(
        <ViewCookie>
            <NumClik>{CounterStore.count} cookies</NumClik>
            <Level>{CounterStore.level} level</Level>
            <CookieClik/>
        </ViewCookie>
    )
})

const ViewCookie = styled.View({
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    height:'100%'
})

const NumClik = styled.Text({
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    position: 'absolute',
    top: 60
})
const Level = styled.Text({
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    position: 'absolute',
    top: 80
})
export default CookieScreen