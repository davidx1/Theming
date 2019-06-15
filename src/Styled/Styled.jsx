import React, { useContext } from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import SparkTheme, { ThemeContext } from '../SparkTheme';

function Section() {
    const theme = useContext(ThemeContext);
    return (
        <StyledDiv>
            <Subtitle>This is {theme} themed via styled component</Subtitle>
        </StyledDiv>
    );
}

const Styled = () => {
    return (
        <StyledDiv>
            <Title>Styled-Component</Title>
            <Section />
            <SparkTheme mode="light">
                <Section />
                <SparkTheme mode="dark">
                    <Section />
                </SparkTheme>
            </SparkTheme>
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
