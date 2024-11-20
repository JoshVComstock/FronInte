import React from "react";
import styled from "styled-components";

const Input = ({ title, value, placeholder, onchange, type }) => {
  return (
    <>
      <Label>{title}</Label>
      <InputStyled
        type={type}
        value={value}
        placeholder={placeholder ? placeholder : title}
        onChange={onchange}
      />
    </>
  );
};

export default Input;
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
