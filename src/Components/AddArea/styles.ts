import styled from "styled-components";

export const Container = styled.div`
    color: white;
    position: relative;
    font-family: 'Handjet';
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 15px 5px 15px;
    border: 1px solid #323238;
    width: 85%;
    border-radius:15px;
    font-family: ;
    margin-bottom: 15px;
    font-weight: bold;
    input::placeholder{
        font-family: 'Handjet';
    font-weight: bold;
    transition: all .5s;
    font-size: 32px;
    line-height: 15px;

    }
    input{
        background-color: transparent;
        border: none;
        width: 100%;
        height: 24px;
    line-height: 15px;

        color: white;
        padding: 15px 0 25px 10px;
        font-family: 'Handjet';
        font-weight: bold;
        font-size: 32px;
    }
    input:focus{
        outline: none;
        
    }
    input:focus::placeholder{
        color: transparent;
    }
  
    div{
        margin-bottom: 10px;
    }
`