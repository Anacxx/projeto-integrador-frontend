import styled from 'styled-components';

export const LoginLogoContainer = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    height: 40vh;
    width: 100;
    max-width: 500px;
    margin: 0 auto;
    overflow: hidden; 
    position: relative; /*  a imagem será posicionada em relação a esse container */
`;

export const StyledImg = styled.img`
    display: block; /* para garantir que a imagem ocupe todo o espaço horizontal disponível */
    max-width: 100%; /* para que a imagem não ultrapasse a largura do container */
`;

export const StyledInput = styled.input`
  width: 90%;
  padding: 12px 20px;
  margin: 6px 0;
  display: inline-block;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: white;

`
export const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 30px;
    width: 100%;
    max-width: 500px;
    overflow: hidden; 

`
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    overflow: hidden; 

`
export const SignupButton = styled.button`
    width: 90%;
    background-color: white;
    color: orange;
    border-radius: 20px;
    border: 2px solid orange;
    padding: 6px;
    margin: 20px;
    font-weight: bold;
`;

export const StyledButton = styled.button`
    border-radius: 20px;
    color: #fe9026;
    font-weight: bold;
    width: 90%;
    padding: 10px 20px;
    font-size: 16px;
    border: 1.3px solid #fe9026;
    cursor: pointer;
    margin: 20px;
    background-color: white;

`

export const StyledDiv = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    overflow: hidden; 
`