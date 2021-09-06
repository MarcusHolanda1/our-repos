  
import React, { useContext } from 'react'

import ReposContainer from "../components/reposContainer";
import MainContainer from "../components/container";

import { context } from '../context'

const Repos = props => {
    const ctx = useContext(context)

    return (
        <MainContainer>
            <ReposContainer name={ctx.userData?.name} repos={ctx.repos} />
        </MainContainer>
    );
}

export default Repos