import { ProfilePicture, Container } from "./styles";

const UserPicture = props => (
    <Container>
        <ProfilePicture src={props.url} alt={props.alt}></ProfilePicture>
    </Container>
);

export default UserPicture;
