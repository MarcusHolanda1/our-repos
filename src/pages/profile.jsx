import MainContainer from "../components/container";
import CardProfile from "../components/cardProfile";
import UserPicture from "../components/pictureProfile";
// import ProfileDetails from "../components/detailsProfile"

export default function Profile() {
    return (
        <MainContainer>
            <CardProfile>
                <UserPicture url="https://sm.ign.com/t/ign_br/screenshot/default/cropped-chaves-divulgacao3_83a3.h928@3:4.jpg" alternativeText="ImageProfile"/>
            </CardProfile>
        </MainContainer>
    );
}
