import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1440px;
    padding: 10px;
`;

export const HeaderEstilizado = styled.header`
padding: 30px;
margin:20px;
@media screen (max-width: 690px){
  
}
`


export const Logo = styled.div`
  font-family: 'Handjet';
  font-weight: bold;
  font-size: 80px;
  color: white;
  text-align: center;
  @media screen and (max-width: 690px){
  font-size: 50px;
}
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
    @media screen and (max-width: 690px){
  font-size: 50px;
}
`

export const HeroParagraph = styled.p`
    font-family: 'JetBrains Mono';
    font-size: 30px;
    font-weight: bold;
    width: 52%;
    @media screen and (max-width: 890px){
  font-size: 15px;
  width: 80%;
}
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
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 15px;
  font-family: 'JetBrains Mono';
  @media screen and (max-width:890px){
    flex-direction: column;
  }

  
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
  margin-top: 2.5%;
  }
  p{
    color: white;
  font-size: 24px;
  text-align: left;
  padding: 0;
  width: 90%;
  }
  @media screen and (max-width:890px){
   h3{font-size: 32px;
    width: 100%;
    padding: 0px;
    margin: 20px auto;
    text-align: center;
  }
  p{
    width: 98%;
    padding: 20px;
  }
  flex-direction: column;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 20px;
  margin: 0;
  box-sizing: border-box;
  }
`

export const ContainerOfItems = styled.div`
   display: flex;
  border: 1px solid #323238;
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
  @media screen and (max-width:890px){
    display: flex;
    flex-direction: column;
  }

`