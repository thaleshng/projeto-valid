import { Header } from "../../components/header";
import { SectionHero } from "../../components/section-hero";
import { SectionServices } from "../../components/section-services/section-services";
import { SectionAchievements } from "../../components/section-achievements/section-achievements";

export const MainPage = () => {
    return (
        <main>
            <Header />
            <SectionHero />
            <SectionServices />
            <SectionAchievements />
        </main>
    )
}