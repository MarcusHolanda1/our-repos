import { Container, ProfileName, UserName, UserBio } from "./styles";

const CardProfile = (props) => {
    return (
        <Container>
            <ProfileName>Marcus Holanda</ProfileName>
            <UserName>#MarcusHolanda1</UserName>
            <UserBio>
                Minha bio está aqui, sou responsável e curto codar, kk esquece
                fio
            </UserBio>
        </Container>
    );
};

export default CardProfile;
