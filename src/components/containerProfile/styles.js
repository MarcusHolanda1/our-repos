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
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: .0625rem solid rgba(34,42,66,.05);
    border-radius: .2857rem;
`