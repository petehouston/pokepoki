import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.header`
    width: 100%;
    text-align: center;
    font-size: 2em;
    padding: 20px;
    background-color: #34495e;
    color: #fff;
`;

const Title = (props) => <StyledTitle>{props.text}</StyledTitle>

export default Title;