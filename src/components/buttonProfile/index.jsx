import { ProfileInputContainer, ProfileInput } from "./styles";

const ButtonProfile = (props) => {
    return (
        <ProfileInputContainer>
            <ProfileInput>
                <h1>23</h1>
                <p>Repositórios</p>
            </ProfileInput>
            <ProfileInput>
                <h1>6</h1>
                <p>Seguidores</p>
            </ProfileInput>
            <ProfileInput>
                <h1>11</h1>
                <p>Seguindo</p>
            </ProfileInput>
        </ProfileInputContainer>
    );
};

export default ButtonProfile;
