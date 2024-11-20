import React from 'react'
import styled from 'styled-components'

const Button = ({ onclick, name }) => {
  return (
    <LoginButton onclick={onclick}>{name}</LoginButton>
  )
}

export default Button;

const LoginButton = styled.button`
  width: 100%;
  background-color: #F06724;
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