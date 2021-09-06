import styled from 'styled-components'

export const Section = styled.section`
    background-color: #14022c;
    width: 380px;
    height: 430px;
    border: 1.5px solid #7f83f3;
    border-radius: 8px;
`

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: #444;
    width: 100%;
    text-align: center;
    height: 30px;
`

export const ListOfReposContainer = styled.h1`
    height: 350px;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
`

export const Repo = styled.h1`
    width: 100%;
    height: 80px;
    background-color: black;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    
    h2 {
        font-size: 15px;
        width: 100%;
        overflow: hidden;
        color: #444;
    }
    
    p {
        font-size: 12px;
        font-weight: 400;
        color: #777;
        width: 100%;
        height: 100%;
        height: 30px;
        overflow: hidden;
        line-height: 1.3;
        margin-top: 10px;
    }
`