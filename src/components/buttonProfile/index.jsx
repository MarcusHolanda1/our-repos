import React from 'react';
import { useHistory } from 'react-router-dom';


import { ProfileInputContainer, ProfileInput } from "./styles";

const ButtonProfile = (props) => {
    const history = useHistory()
    const handleOnClick = route => history.push(route)
    console.log(handleOnClick)

    
    return (
        <ProfileInputContainer>
            <ProfileInput onClick={() => handleOnClick('/repos')}>
                <h1>{props.repos}</h1>
                <p>Repositórios</p>
            </ProfileInput>
            <ProfileInput>
                <h1>{props.followers}</h1>
                <p>Seguidores</p>
            </ProfileInput>
            <ProfileInput>
                <h1>{props.following}</h1>
                <p>Seguindo</p>
            </ProfileInput>
        </ProfileInputContainer>
    );
};

export default ButtonProfile;
