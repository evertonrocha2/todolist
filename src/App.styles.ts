import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1440px;
    padding: 10px;
`;

export const HeaderEstilizado = styled.header`
padding: 30px;
margin:20px;
`


export const Logo = styled.div`
  font-family: 'Handjet';
  font-weight: bold;
  font-size: 80px;
  color: white;
  text-align: center;
`

export const HeroTitle = styled.h2`
    font-family: 'Handjet';
    font-weight: bold;
    font-size: 80px;
    margin: 0;
    transition: all .5s;
    cursor: pointer;
    &&:hover{
      color: white;
    }
`

export const HeroParagraph = styled.p`
    font-family: 'JetBrains Mono';
    font-size: 30px;
    font-weight: bold;
    width: 52%;
`

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ObjSection = styled.section`
  display: flex;
  flex-direction: row;
  border: 1px solid #323238;
  height: 469px;
  width: 1069px;  
  margin: 0 auto;
  border-radius: 15px;
  font-family: 'JetBrains Mono';
  
`

export const DivEstilizadas = styled.div`
  width: 50%;
  padding: 0 50px;
  height: 100%;
  h3{
    font-weight: bold;
  font-size: 70px;
  text-align: left;
  margin: 0;
  padding: 0;
  width: 90%;
  align-self: center;
  margin-top: 2.5%;
  }
  p{
    color: white;
  font-size: 24px;
  text-align: left;
  padding: 0;
  width: 90%;
  }
`

export const ContainerOfItems = styled.div`
   display: flex;
  border: 1px solid #323238;
  width: 1030px;  
  margin: 30px auto;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  font-family: 'JetBrains Mono';
  flex-direction: column;
  padding: 20px;
  font-family: 'Inter';
  font-weight: bold;
  color: #09090A;

`