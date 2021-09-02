import { SearchTitle, SearchInputContainer, SearchInput, SearchButton } from "./styles";

const SearchContainer = () => (
    <>
        <SearchTitle>OurRepositories</SearchTitle>
        <SearchInputContainer>
        <SearchInput></SearchInput>
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
