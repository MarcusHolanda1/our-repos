import React from "react";


import { ProfileInputContainer, ProfileInput } from "./styles";

const ButtonProfile = (props) => {
    return (
        <ProfileInputContainer>
            <ProfileInput>
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
