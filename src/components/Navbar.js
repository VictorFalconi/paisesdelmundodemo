import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    font-family: "Roboto";
    width: 100vw;
    justify-content: space-between;
    background-color: white;
`;

const Title = styled.h1`
    margin: 1rem;
    font-size: 2rem;
`;

const SearchBar = styled.div`
    margin: 1rem;
    display: flex;
    align-content: center;
    justify-content: center;
`;

const Search = styled.input`
    padding: 0.5rem;
    width: 110%;
`;

const SearchButton = styled.button`
    padding: 0 0.5rem;
    cursor: pointer;
    font-weight: 800;
`;

const Navbar = props => {
    const [pais, setPais] = useState('');
    return (
        <Container>
            <Title>Países del Mundo</Title>
            <form onSubmit={e => {
                e.preventDefault();
                props.onSearch(pais);
            }}>
                <SearchBar>
                    <Search type="text" placeholder="Ingresa un país" onChange={e => setPais(e.target.value)} value={pais}/>
                    <SearchButton type="submit" value="agregar">Agregar</SearchButton>
                </SearchBar>
            </form>
        </Container>
    )
}

export default Navbar;