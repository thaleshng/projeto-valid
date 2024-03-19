import { Ecosystems } from "../menu-list-items/ecosystems"
import { Solutions } from "../menu-list-items/solutions"
import { Institutional } from "../menu-list-items/institutional"
import { News } from "../menu-list-items/news"
import { Investors } from "../menu-list-items/investors"
import styled from "styled-components"

export const MenuList = () => {
    return (
        <Ul>
            <Ecosystems />
            <Solutions />
            <Institutional />
            <News />
            <Investors />
        </Ul>
    )
}

const Ul = styled.ul`
    display: flex;
    gap: 30px;
`