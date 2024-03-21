import styled, { keyframes } from "styled-components";

const slideAnimation = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
`;

export const Costumers = () => {
    return (
        <DivGeneralCostumers>
            <h2>ALGUNS DE NOSSOS CLIENTES</h2>
            <DivCostumers>
                <ImgContainer>
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e629c4dec4e007d67229b5_govsp.svg" alt="Ícone Governo SP" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e62a5731871ff587474b68_govrs.svg" alt="Ícone Governo RS" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e62a7058fcda0423a523de_govpiaiu.svg" alt="Ícone Governo Piauí" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e62afd43845d449b37795e_detranrj.svg" alt="Ícone Detran RJ" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e62ace5547c6c0908583da_detransp.svg" alt="Ícone Detran SP" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e62aa9649931b3e0c8565a_detranpr.svg" alt="Ícone Detran PR" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e62a9235b95f53585fe8be_celepar.svg" alt="Ícone Celepar" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/659dba2780d2cd860fa34624_caixa.svg" alt="Ícone Caixa" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e62838a396de1ab932764e_nubank.svg" alt="Ícone Nubank" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/659dba28d999ab61d5983cc9_c6.svg" alt="Ícone C6 Bank" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e628a83c4e0b077ef07d96_inter.svg" alt="Ícone Banco Inter" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/659dba87bdb606e1800ec55e_bradesco.svg" alt="Ícone Bradesco" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/659dbaa0f0a7aa76be197a66_itau.svg" alt="Ícone Itaú" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e628e858fcda0423a43ae5_%20bb.svg" alt="Ícone Banco do Brasil" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e62880e7105c6e3f783b29_citibank.svg" alt="Ícone Citibank" />

                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e629c4dec4e007d67229b5_govsp.svg" alt="Ícone Governo SP" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e62a5731871ff587474b68_govrs.svg" alt="Ícone Governo RS" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e62a7058fcda0423a523de_govpiaiu.svg" alt="Ícone Governo Piauí" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e62afd43845d449b37795e_detranrj.svg" alt="Ícone Detran RJ" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e62ace5547c6c0908583da_detransp.svg" alt="Ícone Detran SP" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e62aa9649931b3e0c8565a_detranpr.svg" alt="Ícone Detran PR" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e62a9235b95f53585fe8be_celepar.svg" alt="Ícone Celepar" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/659dba2780d2cd860fa34624_caixa.svg" alt="Ícone Caixa" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e62838a396de1ab932764e_nubank.svg" alt="Ícone Nubank" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/659dba28d999ab61d5983cc9_c6.svg" alt="Ícone C6 Bank" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e628a83c4e0b077ef07d96_inter.svg" alt="Ícone Banco Inter" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/659dba87bdb606e1800ec55e_bradesco.svg" alt="Ícone Bradesco" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/659dbaa0f0a7aa76be197a66_itau.svg" alt="Ícone Itaú" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e628e858fcda0423a43ae5_%20bb.svg" alt="Ícone Banco do Brasil" />
                    <img src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65e62880e7105c6e3f783b29_citibank.svg" alt="Ícone Citibank" />
                </ImgContainer>
            </DivCostumers>
        </DivGeneralCostumers>
    )
}

const DivGeneralCostumers = styled.div`
    & > h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        color: #FFF;
        font-weight: 600;
        text-align: center;
        margin-bottom: 40px;
    }
`

const DivCostumers = styled.div`
    overflow-x: hidden;
`;

const ImgContainer = styled.div`
    display: flex;
    gap: 200px;
    animation: ${slideAnimation} 25s linear infinite;

    & > img {
        max-width: 130px;
        max-height: 45px;
    }
`