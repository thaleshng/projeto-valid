import styled from "styled-components"
import { Costumers } from "./costumers"

export const SectionCostumers = () => {
    return (
        <Section>
            <div>
                <Costumers />
            </div>
        </Section>
    )
}

const Section = styled.section`
    background-color: #0F0F15;
    padding: 64px 0;
`