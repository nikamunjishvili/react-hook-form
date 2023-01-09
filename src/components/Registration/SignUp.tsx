import styled from 'styled-components'
import { Form } from './Form'
export const SignUp = () => {
  return (
    <Container>
        <TopContainer>
           <P>Try it free 7 days</P>
           <P2>then $20/mo.theareafter</P2>
        </TopContainer>
        <BottomContainer>
            <Form />
        </BottomContainer>
    </Container>
  )
}
const Container = styled.div`
    height: 100vh;
`
//TopContainer styled
const TopContainer = styled.div`
    width: 540px;
    height: 60px;
    background-color: #5e54a4;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    margin-top:50px;
    box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
    @media screen and (max-width:576px){
        width: 330px;
        margin: 10px;
    }
`
const P = styled.p`
    font-weight: bold;
    font-size: 15px;
    margin: 5px;
`
const P2 = styled.p`
    font-size: 12px;
`
//BottomContainer styled
const BottomContainer = styled.div`
`
