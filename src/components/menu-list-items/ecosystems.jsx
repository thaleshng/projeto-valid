import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { ListItemsButton } from "./styles/list-items-styles"

export const Ecosystems = () => {
    return (
        <li>
            <ListItemsButton>
                <span>Ecossistemas</span>
                <FontAwesomeIcon icon={faAngleDown} />
            </ListItemsButton>
             
        </li>
    )
}

