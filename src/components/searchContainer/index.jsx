import React, { useState } from 'react';

// import { useHistory } from "react-router-dom";

import {
    SearchTitle,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    SearchLogo,
    TitleInput,
} from "./styles";

import client from '../../services/client'

import searchImg from "../../assets/images/SearchLogo.svg";

const SearchContainer = (props) => {
    // const history = useHistory();
    // const handleOnclick = (route) => history.push(route);

    const [searchedValue, setSearchedValue] = useState('');

    async function getUserData() {
        try {
            const response = await client.get(`/${searchedValue}`)
            console.log(response.data);
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
                <SearchInput value={searchedValue} onChange={e => setSearchedValue(e.target.value)} placeholder="Username"></SearchInput>
                {/* <SearchButton onClick={() => handleOnclick('/profile')}>SEARCH</SearchButton> */}
                <SearchButton onClick={getUserData}>SEARCH</SearchButton>
            </SearchInputContainer>
        </>
    );
};

export default SearchContainer;

// import {
//     HeaderSection,
//     HeaderTitle,
//     HeaderInputContainer,
//     HeaderInput,
//     HeaderSearchButton
// } from './styles';

// const Header = () => (
//     <HeaderSection>
//         <HeaderTitle>Github Profile</HeaderTitle>
//         <HeaderInputContainer>
//             <HeaderInput />

//             <HeaderSearchButton>
//                 <FiSearch size={15} />
//             </HeaderSearchButton>
//         </HeaderInputContainer>
//     </HeaderSection>
// );

// export default Header;
