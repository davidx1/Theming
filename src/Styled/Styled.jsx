import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import SparkTheme from '../SparkTheme';

function DarkAgain() {
    return (
        <SparkTheme mode="dark">
            <StyledDiv>
                <Subtitle>This is section is always dark themed</Subtitle>
            </StyledDiv>
        </SparkTheme>
    );
}

function LightSection() {
    return (
        <SparkTheme mode="light">
            <StyledDiv>
                <Subtitle>This is section is always light themed</Subtitle>
            </StyledDiv>
            <DarkAgain />
        </SparkTheme>
    );
}

const Styled = () => {
    return (
        <StyledDiv>
            <Title>Styled-Component</Title>
            <Subtitle>This is a made with styled components</Subtitle>
            <LightSection />
        </StyledDiv>
    );
};

export default Styled;

const StyledDiv = styled.div`
    border: 1px solid black;
    box-sizing: border-box;
    background-color: ${theme('bg')};
`;

const Title = styled.h1`
    color: ${theme('txt1')};
`;

const Subtitle = styled.h2`
    color: ${theme('txt2')};
`;
