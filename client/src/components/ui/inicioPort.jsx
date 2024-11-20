import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { Colors } from '../../style/colors';

const InicioPort = ({name}) => {
    return (
        <Container>
            <Titulo><h1>{name}</h1></Titulo>
            <SearchContainer>
                <SearchBar>
                    <IconWrapper><FaSearch /></IconWrapper>
                    <SearchInput type="text" placeholder="Buscar" />
                </SearchBar>
            </SearchContainer>
        </Container>
    );
};

export default InicioPort;

const Container = styled.div`
    width: 100%;
    max-width: 1200px; 
    display: flex;
    flex-direction: row;
    background: linear-gradient(${Colors.primary500}, ${Colors.primary200});
    border-radius: 10px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    padding: 15px;
`;

const Titulo = styled.div`
    width: 100%;
    height: auto;
    flex-direction:column;
    display: flex;
    align-items:center;
    justify-content:center;
    h1{
        color: ${Colors.white};
        font-size:25px;
        font-weight:bold;
    }
`;

const SearchContainer = styled.div`
    width: 100%;
    height: 60px; 
    display: flex;
    align-items: center;
    justify-content:right;
    margin-bottom: 10px; 
`;

const SearchBar = styled.div`
    width: 100%;
    max-width: 400px;
    height: 40px;
    display: flex;
    align-items: center;
    background: ${Colors.white};
    border-radius: 10px; 
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const IconWrapper = styled.div`
    width: 50px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    svg {
        font-size: 20px;
        color: ${Colors.primary400};
    }
`;

const SearchInput = styled.input`
    width: calc(100% - 50px); 
    border: none;
    outline: none;
    font-size: 16px;
    padding: 0 10px;
    color: ${Colors.black};
`;