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

    border: 1.5px solid #CC00FF;
    box-sizing: border-box;
    border-radius: 200px;
    cursor: pointer;

    background-color: transparent;
    -webkit-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;

    &:hover{
        box-shadow: 0 0 10px 0 #7E0AFA inset, 0 0 20px 2px #7E0AFA;
  border: 3px solid #7E0AFA;
  }

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