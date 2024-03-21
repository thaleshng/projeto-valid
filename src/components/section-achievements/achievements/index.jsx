import styled from "styled-components"
import { useState, useEffect } from "react";

export const Achievements = () => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const elementOffset = document.getElementById("achievements").offsetTop;

            const distanceFromTop = elementOffset - scrollPosition;
            const maxOpacityDistance = windowHeight * 0.5; // Adjust this value as needed for when you want the opacity to start changing

            const newOpacity = 1 - (distanceFromTop / maxOpacityDistance);
            setOpacity(newOpacity >= 0 ? newOpacity : 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <AchievementTitle>
                <h2>Liderança traduzida em números</h2>
                <p>Tornamos o cotidiano de milhões de pessoas mais seguro</p>
            </AchievementTitle>

            <DivAchievements id="achievements">
                <h3 style={{ opacity }}>#1 em emissão de identificação CNHs e RGs no Brasil</h3>
                <h3 style={{ opacity }}>Top 5 maiores fabricantes de SIM cards do mundo</h3>
                <h3 style={{ opacity }}>900M de aparelhos conectados com a tecnologia Valid</h3>
                <h3 style={{ opacity }}>Top 10 global em produção de cartões de crédito e débito</h3>
            </DivAchievements>
        </>
    );
};

const AchievementTitle = styled.div`
    margin-bottom: 175px;
    color: #FFF;

    & > h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 48px;
        font-weight: 500;
    }

    & > p { 
        font-family: 'Inter', sans-serif;
        font-size: 20px;
        font-weight: 400;
    }
`

const DivAchievements = styled.div`
    display: flex;
    flex-direction: column;
    gap: 175px;
    margin-bottom: 112px;  
    color: #FFF;  

    & > h3 {
        font-family: 'Poppins', sans-serif;
        font-size: 56px;
        font-weight: 500;
    }
`