import styled from 'styled-components'
export const PostAreaContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    resize: vertical; /* Permite redimensionar verticalmente *//* Remove a borda de foco ao clicar */
`;

export const CustomTextArea = styled.textarea`

    background-color: #ededed;
    width: 100%;
    border: none;
    border-radius: 15px;
    padding: 10px;
    margin: 15px;
    resize: vertical; /* Permite redimensionar verticalmente *//* Remove a borda de foco ao clicar */
`;
export const StyledGradientButton = styled.button`

    background-color: #FF6489;
    background-image: linear-gradient(to right, #FF6489, #F9B24E);
    border-radius: 15px;
    color: white;
    width: 100%;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
`
