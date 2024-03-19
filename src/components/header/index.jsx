import { MenuList } from "../menu-list"
import { Logo } from "../logo"

export const Header = () => {
    return (
        <header>
            <nav>
                <Logo />
                <MenuList />
            </nav>
        </header>
    )
}