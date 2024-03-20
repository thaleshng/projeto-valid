import styled from "styled-components"
import { TitleServices } from "./title-services"
import { DivServices } from "./div-services"

export const SectionServices = () => {
    return (
        <Section>
            <DivContainer>
                <TitleServices />
                <DivServices />
            </DivContainer>
        </Section>
    )
}

const Section = styled.section`
    padding: 112px 0;
    background-color: #FFF;
`

const DivContainer = styled.div`
    max-widht: 1220px;
    padding: 0 37px;
    display: flex;
    flex-direction: column;
    align-items: center;
`