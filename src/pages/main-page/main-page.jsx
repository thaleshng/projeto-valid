import { Header } from "../../components/header";
import { SectionHero } from "../../components/section-hero";
import { SectionServices } from "../../components/section-services/section-services";
import { SectionAchievements } from "../../components/section-achievements/section-achievements";
import { SectionCostumers } from "../../components/section-costumers/section-costumers";

export const MainPage = () => {
    return (
        <main>
            <Header />
            <SectionHero />
            <SectionServices />
            <SectionAchievements />
            <SectionCostumers />
        </main>
    )
}