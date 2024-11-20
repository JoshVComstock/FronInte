import React from "react";
import {
  DivFlavor,
  ImgFlavor,
  LoginBox,
  LoginContainer,
  LoginImage,
  Izquierda,
  LoginRight,
  LoginTitle,
} from "../../../style/login";
import Logo from "../../../assets/img/Logo.png";
import OndaLogo from "../../../assets/img/ondasLogo.png";
import Button from "../../../components/commun/button";
import Input from "../../../components/commun/input";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../enums/routes/Routes";
import styled from "styled-components";
import { useState } from "react";
import useFetch from "../../../hook/useFetch";

const Login = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const { data, error, loading, fetchData } = useFetch("login", {
    method: "POST",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    await fetchData({
      body: JSON.stringify({ correo: correo, password: password }),
    });

    if (data.data.correo == "ross@gmail.com") {
      navigate(ROUTES.USUARIO);
    } else {
      navigate(ROUTES.DASHBOARD);
    }
  };

  return (
    <LoginContainer>
      <Izquierda>
        <LoginBox>
          <LoginTitle>Login</LoginTitle>
          <form>
            <Label>Correo</Label>
            <InputStyled
              type="text"
              onChange={(e) => setCorreo(e.target.value)}
            />
            <Label>contraseña</Label>
            <InputStyled
              type="text"
              onChange={(e) => setPassword(e.target.value)}
            />
            <LoginButton onClick={handleLogin}>
              {loading ? "Cargando..." : "Entrar"}
            </LoginButton>
          </form>
        </LoginBox>
      </Izquierda>
      <LoginRight>
        <DivFlavor>
          <LoginImage src={OndaLogo} alt="Imagen de fondo" />
          <ImgFlavor src={Logo} alt="Logo de UNIFRANZ" />
        </DivFlavor>
      </LoginRight>
    </LoginContainer>
  );
};

export default Login;

const LoginButton = styled.button`
  width: 100%;
  background-color: #f06724;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 40px;

  &:hover {
    background-color: #e05b1e;
  }
`;
const InputStyled = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 40px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
  display: block;
  margin: 10px 0;
`;
