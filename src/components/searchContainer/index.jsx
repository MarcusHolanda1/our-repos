import {
    SearchTitle,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    SearchLogo
} from "./styles";

import seilaImg from '../../assets/images/SearchLogo.svg'

const SearchContainer = () => (
    <>
        <SearchTitle>OurRepositories</SearchTitle>
        <SearchLogo src={seilaImg} alt={'letsgo'}></SearchLogo>
        <SearchInputContainer>
            <SearchInput placeholder="Username"></SearchInput>
            <SearchButton>SEARCH</SearchButton>
        </SearchInputContainer>
    </>
);

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
