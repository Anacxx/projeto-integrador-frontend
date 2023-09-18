import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios"; 
import Header from "../../components/header"; 

import {
  StyledInput,
  StyledInputContainer,
  StyledTitle,
  TitleContainer,
  Syledp,
  StyledLabel,
  InputCheckbox
} from "./styled";
import { goToLoginPage, goToUserAgreementPage } from "../../routes/coordinator"; 
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import { DegradeeButton } from "../../components";

export const SignupPage = () => {
  const navigate = useNavigate()
  const [agreed, setAgreed] = useState(false);

  const handleAgreeChange = () => {
    setAgreed(!agreed);
  };

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    nickName: "",
    email: "",
    password: ""
  });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const signup = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);

      const body = {
        nickName: form.nickName,
        email: form.email,
        password: form.password
      };

      const response = await axios.post(BASE_URL + "/users/signup", body);
      window.localStorage.setItem(TOKEN_NAME, response.data.token);

      setIsLoading(false);
      goToLoginPage(navigate);
    } catch (error) {
      setIsLoading(false);
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  };

  return (
    <>
      <Header onClick={() => goToLoginPage(navigate)} buttonName="Entrar" />
      <TitleContainer>
        <StyledTitle>Olá, boas vindas ao LabEddit ;)</StyledTitle>
      </TitleContainer>
      <StyledInputContainer onSubmit={signup} autoComplete="off">
        <StyledInput
        name={"nickName"}
        type="text"
        placeholder="Apelido"
        value = {form.nickName}
        onChange={changeForm}
        required
        />

        <StyledInput 
        name={"email"}
        type="email"
        placeholder="E-mail"
        value = {form.email}
        onChange={changeForm}
        required
        />

        <StyledInput
        name={"password"}
        type="password"
        placeholder="Senha"
        value={form.password}
        onChange={changeForm}
        minLength={4}
        required
        />
        <Syledp>
          Ao continuar, você concorda com nosso <a href="/agreement" onClick={() => goToUserAgreementPage(navigate)} style={{ color: '#5092cf', cursor: 'pointer'  }}>Contrato de usuário</a>  e nossa{' '}
          <a href="/agreement" onClick={() => goToUserAgreementPage(navigate)} style={{ color: '#5092cf', cursor: 'pointer'  }}>Política de privacidade</a>
        </Syledp>
        <StyledLabel>
          <InputCheckbox type="checkbox" checked={agreed} onChange={handleAgreeChange} />
          Eu concordo em receber e-mails sobre coisas legais no Labeddit
        </StyledLabel>
        <DegradeeButton type = "submit" disabled={isLoading}>Cadastrar</DegradeeButton>
      </StyledInputContainer>
    </>
  );
};
