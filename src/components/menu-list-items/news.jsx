import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { ListItemsButton } from "./styles/list-items-styles"

export const News = () => {
    return (
        <li>
            <ListItemsButton>
                <span>Notícias</span>
                <FontAwesomeIcon icon={faAngleDown} />
            </ListItemsButton>
        </li>
    )
}
