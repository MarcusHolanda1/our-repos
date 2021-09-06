import { Container, ProfileName, UserName, UserBio } from "./styles";

const CardProfile = (props) => {
    return (
        <Container>
            <ProfileName>{props.name}</ProfileName>
            <UserName>#{props.login}</UserName>
            <UserBio>{props.bio}</UserBio>
        </Container>
    );
};

export default CardProfile;
