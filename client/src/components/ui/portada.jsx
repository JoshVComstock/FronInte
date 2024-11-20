import React from 'react';
import styled from 'styled-components';
import ImgProg from '../../assets/img/programador.png';
import { FaSearch } from 'react-icons/fa';
import { Colors } from '../../style/colors';

const Portada = ({ onClick, name }) => {
    return (
        <Container>
            <SearchContainer>
                <SearchBar>
                    <IconWrapper><FaSearch /></IconWrapper>
                    <SearchInput type="text" placeholder="Buscar" />
                </SearchBar>
            </SearchContainer>
            <ContentWrapper>
                <ButtonWrapper>
                    <Button onClick={onClick}>{name}</Button>
                </ButtonWrapper>
                <ImageContainer>
                    <img src={ImgProg} alt="Illustration" />
                </ImageContainer>
            </ContentWrapper>
        </Container>
    );
};

export default Portada;

const Container = styled.div`
    width: 100%;
    max-width: 1200px; 
    display: flex;
    flex-direction: column;
    background: linear-gradient(${Colors.primary500}, ${Colors.primary200});
    border-radius: 10px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    padding: 15px;
`;

const SearchContainer = styled.div`
    width: 100%;
    height: 60px; 
    display: flex;
    align-items: center;
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
    background: ${Colors.primary400};
    border-radius: 10px;
    svg {
        font-size: 20px;
        color: ${Colors.white};
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

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${Colors.secundary700};
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    height: 180px;
`;

const ButtonWrapper = styled.div`
    width: 180px;
    height: 130px;
    display: flex;
    justify-content:center ;
    align-items: flex-end;
`;

const Button = styled.button`
    width: 120px;
    height: 40px;
    background: ${Colors.primary400};
    color: ${Colors.white};
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    font-size: 16px; 

    &:hover {
        background: ${Colors.primary600};
        transform: translateY(-2px);
    }

    &:active {
        background: ${Colors.primary700};
        transform: translateY(0px);
    }
`;

const ImageContainer = styled.div`
    width: 45%; 
    height: 100%; 
    display: flex;
    align-items: flex-end;
    img {
        width: 450px; 
        height: 350px; 
    }
`;




