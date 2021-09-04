import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    background: #14022C;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Card = styled.div`
    background-color: #14022C;
    width: 380px;
    height: 430px;

    border: 1.5px solid #7F83F3;
    border-radius: 8px;
`


export const Name = styled.h1`
    font-family: Arial,sans-serif;
    font-size: 25px;
    font-weight: 500;
    color: white;

    text-align: center;
    padding-top: 100px;
`

export const UserName = styled.h4`
    font-family: Arial,sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #807878;
    padding-top: 10px;

    text-align: center;
;
`