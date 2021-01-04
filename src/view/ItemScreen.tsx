import React from 'react';
import styled from 'styled-components/native';

const Item = ({ uri }:any) => (
    <ClickAchiev>
      <AchievementsImage source={{uri:uri}}/>
    </ClickAchiev>
);
 

const ClickAchiev = styled.TouchableOpacity({
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#ffffff',
    justifyContent: 'center',
    alignItems:'center',
    marginRight:15
})
  
const AchievementsImage = styled.Image({
    width: '80%',
    height: '80%',
})

export default Item