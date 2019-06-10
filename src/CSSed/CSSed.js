import React, { useContext } from 'react';
import { withTheme } from 'styled-components';
import stylesObj from './App.module.scss';
import SparkTheme, { ThemeContext } from '../SparkTheme';
import _ from 'lodash';

function useStyles() {
    const theme = useContext(ThemeContext);
    return _.mapValues(stylesObj, className => `${className}--${theme}`);
}

function DarkAgain() {
    return (
        <SparkTheme mode="dark">
            <div class={useStyles().main}>
                <h2 class={useStyles().subtitle}>This is Permenently light Themed</h2>
            </div>
        </SparkTheme>
    );
}

function LightSection() {
    return (
        <SparkTheme mode="light">
            <div class={useStyles().main}>
                <h2 class={useStyles().subtitle}>This is Permenently light Themed</h2>
            </div>
            <DarkAgain />
        </SparkTheme>
    );
}

const CSSed = ({ theme }) => {
    return (
        <div class={useStyles().main}>
            <h1 class={useStyles().title}>Sass</h1>
            <h2 class={useStyles().subtitle}>This is made with css modules</h2>
            <LightSection />
        </div>
    );
};

export default withTheme(CSSed);
