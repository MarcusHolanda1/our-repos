import React, { useContext } from 'react'

import MainContainer from "../components/container";
import CardProfile from "../components/cardProfile";
import UserPicture from "../components/pictureProfile";
import ProfileInput from "../components/buttonProfile";
import CardContainer from "../components/cardContainer";
// import ProfileDetails from "../components/detailsProfile"

import { context } from '../context'

export default function Profile() {
    const ctx = useContext(context)

    return (
        <MainContainer>
            <CardContainer>
                <CardProfile></CardProfile>
                <UserPicture url={ctx.userData?.avatar_url} alternativeText="ctx.userData?.login"></UserPicture>
                <ProfileInput />
            </CardContainer>
        </MainContainer>
    );
}
