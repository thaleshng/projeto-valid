import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { useState } from "react"

export const Search = () => {
    const [ divClicked, setDivClicked ] = useState(false)
    const [searchIcon, setSearchIcon] = useState(faMagnifyingGlass);

    const handleSearchClick = () => {
        setDivClicked(!divClicked);
        setSearchIcon(divClicked ? faMagnifyingGlass : faX);
      };

    return (
        <DivSearch>
            <FontAwesomeIcon icon={searchIcon} onClick={handleSearchClick} />
            {!divClicked && <span>Pesquisar</span>}
            {divClicked && 
                <DivInput>
                    <SearchInput type="text" placeholder="Pesquisar"></SearchInput>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </DivInput>
                }
        </DivSearch>
    )
}

const DivSearch = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;

    &:hover {
            & > span {
            opacity: 1;
            transform: translateX(-80%);
            transition: transform 1s ease, opacity 0.3s ease;
        }
    }

    & > svg {
        color: #FFF;
        min-width: 16px;
        min-height: 16px;
        max-width: 25px;
        max-height: 25px;
        position: relative;
        cursor: pointer;
    }

    & > span {
        position: absolute;
        top: calc(60% + 5px);
        left: 50%;
        transform: translateX(-60%);
        color: #FFF;
        padding: 5px;
        border-radius: 5px;
        opacity: 0;
        transition: opacity 0.8s ease, transform 1s ease;
        font-size: 14px;
    }
`

const SearchInput = styled.input`
  position: absolute;
  top: 50%;
  right: calc(100% + 5px);
  transform: translateY(-50%);
  border-radius: 999px;
  border: none;
  transition: opacity 0.3s ease;
  height: 48px;
  max-width: 215px;
  padding: 8px 12px;
`;

const DivInput = styled.div`

    & > svg {
        position: absolute;
        left: -45px;
        top: 3px;
        color: #FFF;
        padding: 11px;
        background-color: #1767E5;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        cursor: pointer;
    }
`