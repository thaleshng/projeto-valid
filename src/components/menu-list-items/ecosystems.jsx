import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { ListItemsButton } from "./styles/list-items-styles"
import { useState } from "react"
import styled, { keyframes } from "styled-components"
import { borderAnimation, borderReverseAnimation } from "./styles/list-items-styles"

export const Ecosystems = () => {
    const [ clicked, setClicked ] = useState(false)

    const handleClicked = () => {
        setClicked(prevClicked => !prevClicked);
    }

    return (
        <li>
            <ListItemsButton onClick={handleClicked}>
                <span>Ecossistemas</span>
                <FontAwesomeIcon icon={faAngleDown} style={{ transform: `rotate(${clicked ? 180 : 0}deg)` }}/>
                {clicked && 
                <GeneralDiv clicked={clicked}>
                    <SystemDiv>
                        <a href="/">
                            <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65cfc702141f83622ac4358a_id.webp" alt="Scan Facial" />
                            <h2>ID & Governo Digital</h2>
                            <p>Identidade Digital, Interoperabilidade e Serviços Digitais.</p>
                            <button>
                                <span>Saiba Mais</span>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                        </a>
                    </SystemDiv>

                    <SystemDiv>
                        <a href="/">
                            <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65cfc70124ad4a25f0d4d07a_id2.webp" alt="Foto Cartão Bancário" />
                            <h2>Banking & Meios de Pagamentos</h2>
                            <p>Cartões, Billing, Soluções Digitais para Bancos e Varejo.</p>
                            <button>
                                <span>Saiba Mais</span>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                        </a>
                    </SystemDiv>

                    <SystemDiv>
                        <a href="/">
                            <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65cfc70111298512739c801a_id3.webp" alt="Mundo Conectado" />
                            <h2>Conectividade Segura</h2>
                            <p>Soluções para provedores de conectividade, serviços IoT e fabricantes de dispositivos.</p>
                            <button>
                                <span>Saiba Mais</span>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                        </a>
                    </SystemDiv>
                </GeneralDiv>
                }
            </ListItemsButton>
        </li>
    )
}

const slideIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

const slideOut = keyframes`
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-20px);
    }
`

const GeneralDiv = styled.div`
    position: absolute;
    display: flex;
    gap: 48px;
    padding: 48px;
    background-color: #FFF;
    top: 48px;
    left: -150px;
    margin-top: 16px;
    animation: ${props => props.clicked ? slideIn : slideOut} 1s ease forwards;
`

const SystemDiv = styled.div`
    & a {
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: left;
    }

    & img {
        margin-bottom: 16px;
    }

    & h2, p, span {
        color: #000;
        font-family: 'Poppins', sans-serif;
    }

    & h2 {
        font-size: 20px;
        font-weight: 500;
    }

    & p {
        color: #57575B;
        font-size: 16px;
        font-family: 'Inter', sans-serif;
    }

    & span {
        font-size: 16px;
        color: #1767E5;
        font-weight: 500;
        position: relative;
        align-self: flex-start;
    }

    & button {
        align-self: flex-start;
    }

    & button > svg {
        color: #1767E5;
        width: 7px;
        height: 10px;
        margin-left: 5px;
        transition: margin-left 0.4s ease;
    }

    &   span::before {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #1767E5;
        z-index: 0;
        transition: width 0.7s ease;
    }

    & a:hover span::before {
        animation: ${borderAnimation} 0.7s forwards;
    }

    & a:hover svg {
        margin-left: 3px;
    }

    & a:not(:hover) span::before {
        animation: ${borderReverseAnimation} 0.7s forwards;
    }
`