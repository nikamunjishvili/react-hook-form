import { IntroText } from '../../components/IntroText/IntroText'
import styled from 'styled-components'
import { SignUp } from '../../components/Registration/SignUp'

export const Home = () => {
  return (
    <HomeContainer>
        <IntroText />
        <SignUp />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    @media screen and (max-width:576px){
      display: flex;
      flex-direction: column;
    }
`