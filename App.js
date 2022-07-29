import styled from "styled-components/native"
import { Platform, StatusBar } from 'react-native'
import WelcomeScreen from "./src/screens/WelcomeScreen"

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: skyblue;
`
const Text = styled.Text`
  font-size: 16px;
  color: black;
`
const View = styled.View`
  background-color: #fff;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
`
const ChildView = styled.View`

`


export default function App() {

  return (
    <Wrapper style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
     <WelcomeScreen />
    </Wrapper>
  );
}


