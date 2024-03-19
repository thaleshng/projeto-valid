import { MenuList } from "../menu-list"
import { Logo } from "../logo"
import { MenuOptionsRight } from "../menu-config-right"
import styled from "styled-components"

export const Header = () => {
    return (
        <StyledHeader>
            <Nav>
                <Logo />
                <MenuList />
                <MenuOptionsRight />
            </Nav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background: transparent;
`

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
`