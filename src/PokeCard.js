import React from 'react';
import styled from 'styled-components';


const StyledPokeCard = styled.article`
    padding: 25px 25px 0 25px;
    background-color: #fff;
    text-align: center;
    height: 100%;
`;

const StyledPokeCardImage = styled.img`
    width: 50%;
`;

const PokeCard = ({name, image}) => (
    <StyledPokeCard>
        <h3>{name}</h3>
        <StyledPokeCardImage src={image} />
    </StyledPokeCard>
);

export default PokeCard;

