import MainContainer from "../components/container";
import CardProfile from "../components/cardProfile";
import UserPicture from "../components/pictureProfile";
import ProfileInput from "../components/buttonProfile";
import CardContainer from "../components/cardContainer";
// import ProfileDetails from "../components/detailsProfile"

export default function Profile() {
    return (
        <MainContainer>
            <CardContainer>
                <CardProfile></CardProfile>
                <UserPicture
                    url="https://sm.ign.com/t/ign_br/screenshot/default/cropped-chaves-divulgacao3_83a3.h928@3:4.jpg"
                    alternativeText="ImageProfile"
                ></UserPicture>
                <ProfileInput />
            </CardContainer>
        </MainContainer>
    );
}
