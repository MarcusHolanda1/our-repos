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
    font-family: Arial, sans-serif;
    font-weight: normal;
    margin-top: 10px;
    color: white;
    width: 100%;
    text-align: center;
    height: 30px;
`

export const ListOfReposContainer = styled.h1`
    font-family: Arial, sans-serif;
    height: 350px;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
  width: 0px;
}
`

export const Repo = styled.h1`
    width: 100%;
    height: 80px;
    background-color: #14022C;
    border-bottom: .1rem solid #1A1E40;
    padding: 10px;
    margin-bottom: 10px;
    
    h2 {
        font-family: Arial, sans-serif;
        font-size: 15px;
        width: 100%;
        overflow: hidden;
        color: #989090;
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