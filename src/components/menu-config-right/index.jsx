import { Search } from "./search";
import { LanguageOption } from "./language-option";
import { Button } from "./button";
import styled from "styled-components";

export const MenuOptionsRight = () => {
    return (
        <DivMenuConfigRight>
            <Search />
            <LanguageOption />
            <Button />
        </DivMenuConfigRight>
    )
}

const DivMenuConfigRight = styled.div`
    display: flex;
    gap: 15px;
    margin-left: 190px;
`