import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-family: Roboto;
    color: black;
    background-color: #FFF8E7;
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-shadow: none;
    width: 250px;
    text-align: center;
`;

const Flag = styled.img`
    width: 15rem;
    height: 10rem;
`;

const Card = props => {
  return (
    <Container>
        <Flag src={props.flag}/>
        <h2>{props.name}</h2>
        <p>Capital: {props.capital}</p>
        <p>Region: {props.region}</p>
        <p>Países limítrofes: {props.borders}</p>
        <p>Lenguas: {props.languages}</p>
        <p>Moneda: {props.currencies}</p>
    </Container>
  )
}

export default Card;