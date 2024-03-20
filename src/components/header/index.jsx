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
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
`

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
`