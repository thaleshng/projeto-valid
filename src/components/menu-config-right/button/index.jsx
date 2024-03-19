import styled from "styled-components"

export const Button = () => {
    return (
        <button>
            <A href="">Fale conosco</A>
        </button>
    )
}

const A = styled.a`
    font-size: 14px;
    padding: 10px 24px;
    background-color: #1767E5;
    border-radius: 999px;
    transition: 0.2s ease-in-out;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;

    &:hover {
        background-color: #182799;
    }
`