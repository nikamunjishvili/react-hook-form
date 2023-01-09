import styled, { createGlobalStyle } from "styled-components";
import { Home } from "./pages/home/Home";
import BgImage from './components/images/bg-intro-desktop.png'
import mobileImage from './components/images/bg-intro-mobile.png'

function App() {
  return (
    <AppContainer BgImage={BgImage}>
      <CreateBody />
      <Home />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div<{BgImage: any}>`
    background-image: url(${BgImage});
    background-color: #FF7979;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    @media screen and (max-width:576px){
      background-image: url(${mobileImage});
      background-position: center;
      background-repeat: no-repeat;
    }
`

const CreateBody = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`