import styled from "styled-components";

export const ProfileInputContainer = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: inline;
    padding: 70px 20px;
    
`;

export const ProfileInput = styled.div`
    width: 100px;
    height: 55px;
    background: #14022C;
    border: 1.5px solid #CC00FF;
    box-sizing: border-box;
    border-radius: 200px;
    cursor: pointer;

    h1 {
        font-size: 20px;
        font-weight: normal;
        text-align: center;
        color: #444;
        font-family: Arial, sans-serif;
        color: #FFFFFF;
    
        padding-top: 5px;   
    }
    p {
        font-size: 12px;
        font-weight: inherit;
        text-align: center;
        color: #444;
        font-family: Arial, sans-serif;
        color: #FFFFFF;
    
        padding-top: 5px;   
    }
`