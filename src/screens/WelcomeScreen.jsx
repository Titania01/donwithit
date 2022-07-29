import { ImageBackground } from 'react-native';
import React from 'react';
import styled from 'styled-components'

const Image = styled.ImageBackground`
    height: 70%;
    width: 70%;
`

const WelcomeScreen = () => {
  return (
    <Image 
        source={require("../../images/christmas-wreath.png")}
    ></Image>
  );
};

export default WelcomeScreen;
