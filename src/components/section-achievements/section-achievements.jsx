import { DivVideo } from "./div-video"
import { Achievements } from "./achievements"
import styled from "styled-components"

export const SectionAchievements = () => {
    return (
        <Section>
            <DivVideo />
            <AchievementContainer>
                <Achievements />
            </AchievementContainer>
        </Section>
    )
}

const Section = styled.section`
    padding-top: 112px;
    display: flex;
    justify-content: center;
`

const AchievementContainer = styled.div`
    max-width: 940px;
    z-index: 1;
`