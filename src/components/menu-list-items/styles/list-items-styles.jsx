import styled, { keyframes } from "styled-components"

export const borderAnimation = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`

export const borderReverseAnimation = keyframes`
    0% {
        width: 100%;
    }
    100% {
        width: 0;
    }
`

export const ListItemsButton = styled.button`
    color: #FFFFFF;
    display: flex;
    gap: 5px;
    align-items: center;

    & > span {
        font-size: 14px;
        border-bottom: 2px solid transparent;
        position: relative;
        z-index: 1;
    }

    & > span::before {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #FFF;
        z-index: 0;
        transition: width 0.7s ease;
    }

    & > span:hover::before {
        width: 100%;
        animation: ${borderAnimation} 0.7s forwards;
    }

    & > span:not(:hover)::before {
        width: 100%;
        animation: ${borderReverseAnimation} 0.7s forwards;
    }

    & > svg {
        width: 12px;
        height: 12px;
    }
`