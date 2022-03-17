import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
    font-family: Roboto;
    text-shadow: 1px 1px 2px black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    flex-wrap: wrap;
`;

const Cards = props => {
    if(props.paises.length !== 0){
        return (
            <Container>
            {props.paises.map(p => <Card
                key={p.id}
                flag={p.flag}
                onClose={() => props.onClose(p.id)}
                id={p.id}
                name={p.name}
                capital={p.capital}
                region={p.region}
                borders={p.borders}
                languages={p.languages}
                currencies={p.currencies}
                /> )}
            </Container>
        );
    } else {
        return(
            <Container>
                <h1>No hay países agregados</h1>
            </Container>
        )
    }
}

export default Cards;