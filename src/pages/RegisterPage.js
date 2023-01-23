import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import apiAuth from "../services/apiAuth"

export default function RegisterPage(){
    

    return (
        <Container>
            <MyWallet>MyWallet</MyWallet>
            <StyledForm>
                <StyledInput
                    name="name"
                    placeholder="Nome"
                    type="text"
                    required
                    
                />
                <StyledInput
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    required
                    
                />
                <StyledInput
                    name="password"
                    placeholder="Senha"
                    type="password"
                    required
                    
                />
                <StyledInput
                    name="passwordConfirm"
                    placeholder="Confirme a senha"
                    type="password"
                    required
                   
                />
                <RegisterButton type="submit" >
                    Cadastrar
                </RegisterButton>
            </StyledForm>

            <StyledLink to="/">
                Já tem uma conta? Entre agora!
            </StyledLink>
        </Container>
    )
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
`



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

const RegisterButton = styled.button`
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

const StyledLink = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    color: #ffffff;
`