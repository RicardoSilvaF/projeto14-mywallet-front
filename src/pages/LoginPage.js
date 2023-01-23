import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useState } from "react"

export default function LoginPage(){
    return (
        <Container>
            <MyWallet>MyWallet</MyWallet>
          <StyledForm>
            <StyledInput name="email" type="email"  placeholder="E-mail" required />
            <StyledInput name="password" type="password"  placeholder="Senha" required />
            <EnterButton type="submit">Entrar</EnterButton> 
          </StyledForm>
          <RegisterButton to="/register">Primeira vez? Cadastre-se!</RegisterButton>
        </Container>
      );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #8c11be;
  align-items: center;
  justify-content: center;
  height: 667px;
  width: 375px;
  padding: 0 25px;
  position: relative;
`;

const MyWallet = styled.p`
    font-family: 'Saira Stencil One';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    color: #ffffff;
`

const StyledForm = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const StyledInput = styled.input`
    height: 58px;
    width: 326px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-bottom: 13px;
    color: #000000;
    padding-left:15px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    border: none;
`

const EnterButton = styled.button`
    width: 100%;
    height: 46px;
    background-color: #A328D6;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 36px;
    border: none;
    border-radius: 5px;
`

const RegisterButton = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    color: #ffffff;
`