import styled from 'styled-components'
export const StyledTitle = styled.h1`
    font-size: 2rem; /* Tamanho grande da fonte */
    color: #373737;
    padding-left: 20px;
    padding-top: 20px;
`

export const TitleContainer = styled.div`
    height: 30vh;
    width: 100%;
    max-width: 500px;  
    margin: 0 auto;
`;
export const StyledInputContainer = styled.form`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 30px; 
    width: 100%;
    max-width: 500px;
`
export const StyledInput = styled.input`
  width: 90%;
  padding: 12px 20px;
  margin: 6px 0;
  display: inline-block;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`

export const Syledp = styled.p`
    width: 90%;
    
`
export const StyledLabel = styled.label`
    display: flex; /* Para alinhar o checkbox e o texto na mesma linha */
    align-items: center; /* Para centralizar verticalmente o conteúdo */
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 20px;
    padding-right: 20px;
`

export const InputCheckbox = styled.input`
    position: relative;
    cursor: pointer;
    margin-right: 8px;
    font-size: 0.5rem;
`