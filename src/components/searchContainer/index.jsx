import { useHistory } from "react-router-dom";

import {
    SearchTitle,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    SearchLogo,
    TitleInput,
} from "./styles";

import searchImg from "../../assets/images/SearchLogo.svg";

const SearchContainer = (props) => {
    const history = useHistory();
    const handleOnclick = (route) => history.push(route);

    return (
        <>
            <SearchTitle>OurRepositories</SearchTitle>
            <SearchLogo src={searchImg} alt="letsgo"></SearchLogo>
            <SearchInputContainer>
                <TitleInput>GitHub Profile</TitleInput>
                <SearchInput placeholder="Username"></SearchInput>
                <SearchButton onClick={() => handleOnclick('/profile')}>SEARCH</SearchButton>
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
