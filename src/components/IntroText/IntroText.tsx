import styled from "styled-components";

export const IntroText = () => {
  return (
    <Container>
      <H1>Learn to code by watching others</H1>
      <P>
        Learn to code by watching others See how experienced developers solve
        problems in real-time. Watching scripted tutorials is great, but
        understanding how developers think is invaluable.{" "}
      </P>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  height: 200px;
  margin-top: -20px;
  margin-right: 20px;
  color: #fff;
  @media screen and (max-width:576px){
   width: 300px;
  }
`;

const P = styled.p`
  font-size: 15px;
  @media screen and (max-width:576px){

  }
`
const H1 = styled.h1`
  font-size:50px;
  font-family: bold;
  @media screen and (max-width:576px){
      font-size: 20px;
      text-align: center;
      margin-top: 30px;
    }
`