import styled from 'styled-components'

export const ContainerList = styled.div`
    width: 90%; 
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

`

export const ContainerItems = styled.div`
    height: 100%;
    padding: 25px;
    gap: 20px;
    display: flex;
    width: 93%;
    position: relative;
    transition: all .5s;
    border-radius: 15px;
    background-color: #E6E6E6;
    cursor: pointer;
    align-items: center;
    &&:hover{
      background-color: white;
    }
    input{
        width: 25px;
        height: 25px;
    }
    p{
       position: absolute;
       font-size: 22px;
       right: 25px;
       font-family: 'Handjet';
       cursor: pointer;
       transition: all .5s;
    }
    p:hover{
        color: red;
        transform: scale(1.5);
    }
    @media screen and (max-width: 890px){
        label{
            font-size: 12px;
        }
    }
`