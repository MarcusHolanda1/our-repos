import React, { useState, useContext } from "react";

import { useHistory } from "react-router-dom";

import {
    SearchTitle,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    SearchLogo,
    TitleInput,
} from "./styles";

import client from "../../services/client";
import { context } from "../../context";

import searchImg from "../../assets/images/SearchLogo.svg";

const SearchContainer = (props) => {

        const valuesProfile = () => {
            redirect()
            getUserData()
        }

        
      
        const redirect = () => {
          history.push('/profile')
        }
        let history = useHistory();
    // const handleOnclick = (route) => history.push(route);

    const ctx = useContext(context);
    const [searchedValue, setSearchedValue] = useState('');

    async function getUserData() {
        try {
            const response = await client.get(`/${searchedValue}`);
            const repos = await client.get(`/${searchedValue}/repos`)

            ctx.setUserData(response.data);
            ctx.setRepos(repos.data)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <SearchTitle>OurRepositories</SearchTitle>
            <SearchLogo src={searchImg} alt="letsgo"></SearchLogo>
            <SearchInputContainer>
                <TitleInput>GitHub Profile</TitleInput>
                <SearchInput
                    value={searchedValue}
                    onChange={(e) => setSearchedValue(e.target.value)}
                    placeholder="Username"
                ></SearchInput>
                <SearchButton onClick={valuesProfile}>SEARCH</SearchButton>
                {/* <SearchButton onClick={() => handleOnclick('/profile')}>SEARCH</SearchButton> */}
                {/* <SearchButton onClick={getUserData}>SEARCH</SearchButton> */}
                {/* <SearchButton onClick={function() {handleOnclick(() => handleOnclick('/profile')); getUserData(getUserData); }}></SearchButton> */}
                
            </SearchInputContainer>
        </>
    );
};

export default SearchContainer;