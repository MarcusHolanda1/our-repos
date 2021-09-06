import React, { useContext } from 'react'

import MainContainer from "../components/container";
import CardProfile from "../components/cardProfile";
import UserPicture from "../components/pictureProfile";
import ButtonProfile from "../components/buttonProfile";
import CardContainer from "../components/cardContainer";
// import ProfileDetails from "../components/detailsProfile"

import { context } from '../context'

export default function Profile() {
    const ctx = useContext(context)

    return (
        <MainContainer>
            <CardContainer>
                <CardProfile name={ctx.userData?.name} login={ctx.userData?.login} bio={ctx.userData?.bio}></CardProfile>
                <UserPicture url={ctx.userData?.avatar_url} alternativeText="ctx.userData?.login"></UserPicture>
                <ButtonProfile repos={ctx.userData?.public_repos} followers={ctx.userData?.followers} following={ctx.userData?.following}/>
            </CardContainer>
        </MainContainer>
    );
}
