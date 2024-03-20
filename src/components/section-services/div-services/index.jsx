import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { borderAnimation, borderReverseAnimation } from "../../menu-list-items/styles/list-items-styles"

export const DivServices = () => {
    return (
        <GeneralDivServices>
            <DivService>
                <DivVideo>
                    <video autoPlay loop muted>
                        <source src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65df437475abeea880d6398d_home-dobra-2b-governo-transcode.mp4"/>
                    </video>
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/659eaa7ae0ac3dcd9ffcc459_icon-globe.svg" alt="ícone Globo Terrestre Digitalizado" />
                </DivVideo>
                
                <DivServiceTitle>
                    <h3>ID & Governo Digital</h3>
                    <p>Identidade Digital, Interoperabilidade e Serviços Digitais.</p>
                </DivServiceTitle>

                <A href="">
                    <span>Saiba Mais</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </A>
            </DivService>

            <DivService>
                <DivVideo>
                    <video autoPlay loop muted>
                        <source src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65df470f3711382047494e1e_home-dobra2-banking-transcode.mp4"/>
                    </video>
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/659eae1a793001e87a43dfe8_icon-card.svg" alt="ícone Cartão Bancário" />
                </DivVideo>
                
                <DivServiceTitle>
                    <h3>Banking & Meios de Pagamento</h3>
                    <p>Cartões, Soluções Digitais e Billing.</p>
                </DivServiceTitle>

                <A href="">
                    <span>Saiba Mais</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </A>
            </DivService>

            <DivService>
                <DivVideo>
                    <video autoPlay loop muted>
                        <source src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65df476b28813c22a63661a2_home-dobra-2b-mobile-transcode.mp4"/>
                    </video>
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/659eae3601e53902316ec91d_icon-security.svg" alt="ícone Conexão" />
                </DivVideo>
                
                <DivServiceTitle>
                    <h3>Conectividade Segura</h3>
                    <p>Provedores de conectividade, fabricantes de dispositivo e provedores de serviços IOT.</p>
                </DivServiceTitle>

                <A href="">
                    <span>Saiba Mais</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </A>
            </DivService>
        </GeneralDivServices>
    )
}

const GeneralDivServices = styled.div`
    display: flex;
    gap: 32.5px;
    justify-content: center;
    margin-top: 10px;
`

const DivService = styled.div`
    max-width: 385px;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;

    & > video {
        width: 100%;
        height: 340px;
        object-fit: cover;
    }
`

const DivVideo = styled.div`
    height: 340px;
    position: relative;

    & > video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    & > img {
        position: absolute;
        right: 25px;
        top: 25px;
    }
`

const DivServiceTitle = styled.div`
    margin-top: 32px;
    margin-bottom: 24px;
    min-height: 70px;

    & > h3 {
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        font-weight: 500;
        margim-bottom: 2px;
    }

    & > p {
        font-family: 'Inter', sans-serif;
        color: #57575B;
    }
`

const A = styled.a`
    color: #1767E5;
    display: flex;
    align-items: center;
    gap: 6px;

    & > span {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        position: relative;
        align-content: flex-end;
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
        height: 12px;
        width: 12px;
        position: relative;
        top: 1px;
    }
`