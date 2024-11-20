import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../style/colors';

const ButtonGeneral = ({ onclick, name }) => {
  return (
    <ButtonG onclick={onclick}>{name}</ButtonG>
  )
}

export default ButtonGeneral;

const ButtonG = styled.button`

    background: #ffc107;
    color: ${Colors.white};
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    font-size: 16px; 

    &:hover {
        background: #ffca2c;
        transform: translateY(-2px);
    }

    &:active {
        background: #ffa000;
        transform: translateY(0px);
    }
`;