import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { borderAnimation, borderReverseAnimation } from "../../menu-list-items/styles/list-items-styles"

export const TitleServices = () => {
    return (
        <DivTitleGeneral>
            <HrUp />
            <DivTitle>
                <h2>Soluções de Identificação Segura</h2>
                <A href="">
                    <span>Quem somos</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </A>
            </DivTitle>
            <HrDown />
        </DivTitleGeneral>
    )
}

const DivTitleGeneral = styled.div`
    width: 1220px;
`

const HrUp = styled.hr`
    width: 32px;
    height: 4px;
    background: linear-gradient(270deg, #004fcc .4%, #38ceff 93%);
    border: none;
    margin-bottom: 40px;
    align-self: flex-start;
`

const DivTitle = styled.div`
    display: flex;
    justify-content: space-between;
    
    & > h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 48px;
        font-weight: 500;
        max-width: 530px;
    }
`

const A = styled.a`
    display: flex;
    align-items: center;
    align-self: flex-end;
    gap: 5px;
    color: #1767E5;

    & > span {
        align-self: flex-end;
        margin-bottom: 13px;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        position: relative;
    }

    & > span::before {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #1767E5;
        z-index: 900;
        transition: width 0.7s ease;
    }

    &:hover span::before {
        animation: ${borderAnimation} 0.7s forwards;
    }

    &:not(:hover) span::before {
        animation: ${borderReverseAnimation} 0.7s forwards;
    }

    & > svg {
        align-self: flex-end;
        margin-bottom: 15px;
        height: 12px;
        width: 12px;
    }
`

const HrDown = styled.hr`
    margin: 40px 0;
`