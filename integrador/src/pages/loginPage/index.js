import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logoLoginPage from '../../images/logo-login.png';
import {
  LoginLogoContainer,
  StyledImg,
  StyledInput,
  StyledInputContainer,
  StyledForm,
  StyledButton,
  StyledDiv,
  GradientLineLogin
} from "./styled";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import { goToPostsPage, goToSignupPage } from "../../routes/coordinator";
import { DegradeeButton } from "../../components";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const body = {
        email: form.email,
        password: form.password
      };

      const response = await axios.post(`${BASE_URL}/users/login`, body);
      const authToken = response.data.token;

      // Armazena o token no localStorage
      window.localStorage.setItem(TOKEN_NAME, authToken);

      setIsLoading(false);
      goToPostsPage(navigate);
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
      setIsLoading(false);
    }
  };

  return (
    <>
      <LoginLogoContainer>
        <StyledImg src={logoLoginPage} alt="Logo Login Page" />
        <p>O projeto de rede social da Labenu</p>
      </LoginLogoContainer>
      <StyledForm onSubmit={login} autoComplete="off">
        <StyledInputContainer>
          <StyledInput
            name="email"
            type="email"
            value={form.email}
            placeholder="E-mail"
            onChange={changeForm}
            required
          />
          <StyledInput
            name="password"
            type="password"
            value={form.password}
            onChange={changeForm}
            placeholder="Senha"
            minLength="4" 
            required
            isFilled={form.password.length > 0}
          />
        </StyledInputContainer>
        <DegradeeButton disabled={isLoading}>Continuar</DegradeeButton>
        <GradientLineLogin />
      </StyledForm>
      <StyledDiv>
        <StyledButton onClick={() => goToSignupPage(navigate)}>Crie uma conta!</StyledButton>
      </StyledDiv>
    </>
  );
};
