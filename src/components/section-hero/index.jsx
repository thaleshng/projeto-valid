import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { borderAnimation, borderReverseAnimation } from "../menu-list-items/styles/list-items-styles"

export const SectionHero = () => {
    return (
        <Section>
            <video autoPlay loop muted>
                <source src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65cfce1623118e4217fb5ce4_hero_background-transcode.mp4" type="video/mp4" />
            </video>
            <div>
                <h1>Evolução da confiança para uma sociedade digital segura</h1>
                <a href="">
                    <span>Fale com um especialista</span>
                    <FontAwesomeIcon icon={faAngleRight}/>
                </a>
            </div>
        </Section>
    )
}

const Section = styled.section`
    height: 80vh;
    position: relative;
    display: flex;

    & video {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: absolute;
    }

    & div {
        position: absolute;
        color: #FFF;
        align-self: center;
        left: 20%;
    }

    & div > h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 56px;
        max-width: 740px;
        font-weight: 500;
        margin-bottom: 41.5px;
    }

    & a {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    & a > span {
        font-family: 'Inter', sans-serif;
        align-self: flex-start;
        position: relative;
    }

    &   span::before {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #FFF;
        z-index: 900;
        transition: width 0.7s ease;
    }

    & a:hover span::before {
        animation: ${borderAnimation} 0.7s forwards;
    }

    & a:not(:hover) span::before {
        width: 100%;
        animation: ${borderReverseAnimation} 0.7s forwards;
    }

    & a > svg {
        width: 10px;
        height: 10px;
        position: relative;
        top: 1.5px;
    }
`