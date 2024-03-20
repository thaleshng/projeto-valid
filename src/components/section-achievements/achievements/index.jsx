import styled from "styled-components"

export const Achievements = () => {
    return (
        <>
            <AchievementTitle>
                <h2>Liderança traduzida em números</h2>
                <p>Tornamos o cotidiano de milhões de pessoas mais seguro</p>
            </AchievementTitle>

            <DivAchievements>
                <h3>#1 em emissão de identificação CNHs e RGs no Brasil</h3>

                <h3>Top 5 maiores fabricantes de SIM cards do mundo</h3>

                <h3>900M de aparelhos conectados com a tecnologia Valid</h3>

                <h3>Top 10 global em produção de cartões de crédito e débito</h3>
            </DivAchievements>
            
        </>
        
    )
}

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