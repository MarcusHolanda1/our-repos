import styled from "styled-components";

export const SearchTitle = styled.h1`
    font-family: Arial, sans-serif;
    font-size: 36px;
    font-weight: normal;
    position: relative;
    bottom: 40px;

    color: #D0D0D0;
`;

export const SearchInputContainer = styled.div`
    padding: 10px 16px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const SearchLogo = styled.img`
    width: 164px;
    height: 171px;

`

export const TitleInput = styled.h2`
    font-family: Arial,sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    color: #B6B6B6;
    margin-bottom: 20px;
;
`

export const SearchInput = styled.input`
    width: 145px;
    height: 35px;
    left: 648px;
    background: #14022C;
    border: 1.2px solid #6F6F6F;
    box-sizing: border-box;
    border-radius: 8px;
    transform: rotate(0deg);
    font-size: .875rem;
    color: white;
    text-align: center;

    &:hover{
        border-color: #BE5FF6;
    }

    ::-webkit-input-placeholder {
        align-items: center;
        font-size: 16px;
        text-align: center;
    }
`;

export const SearchButton = styled.button`
    margin: 25px 0 0;
    width: 145px;
    height: 35px;
    background: #9e00ff;
    border-radius: 8px;
    cursor: pointer;

    color: white;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;

    &:hover{
    background: #FA00FF;
  }
`;

// import styled from 'styled-components';

// export const HeaderSection = styled.header`
//     width: 400px;
//     height: 130px;
//     background: rgba(255,255,255, .2);
//     border-radius: 10px;
//     display: flex;
//     flex-direction: column;
//     padding: 0;
// `

// export const HeaderTitle = styled.h1`
//     margin: 0;
//     padding: 15px 0;
//     color: #E5E5E5;
//     font-size: 30px;
//     font-weight: 700;
//     text-align: center;
//     width: 100%;
// `

// export const HeaderInputContainer = styled.div`
//     padding: 10px 16px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `

// export const HeaderInput = styled.input`
//     width: 200px;
//     height: 30px;
//     border-radius: 15px;
//     border: none;
//     padding: 0 16px;
//     color: #444;
//     transition: .4s ease;

//     &:focus {
//         outline: none;
//         width: 220px;
//         transition: .4s ease;
//     }
// `

// export const HeaderSearchButton = styled.button`
//     width: 30px;
//     height: 30px;
//     border-radius: 15px;
//     border: none;
//     background: #FF7A00;
//     margin-left: 10px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: #FFF;
//     transition: ease .3s;

//     &:hover {
//         transform: scale(1.05);
//         transition: ease .3s;
//         cursor: pointer;
//     }
// `
