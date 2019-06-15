import React, { useContext, useMemo } from 'react';
import { withTheme } from 'styled-components';
import stylesObj from './styles.module.scss';
import SparkTheme, { ThemeContext } from '../SparkTheme';
import _ from 'lodash';

function useStyles() {
    const theme = useContext(ThemeContext);
    const mappedStyle = useMemo(
        () => _.mapValues(stylesObj, className => `.${theme} ${className} `),
        [theme]
    );
    return mappedStyle;
}

function DarkAgain() {
    return (
        <SparkTheme mode="dark">
            <div className={useStyles().main}>
                <h2 className={useStyles().subtitle}>This is Permenently dark Themed</h2>
            </div>
        </SparkTheme>
    );
}

function LightSection() {
    return (
        <SparkTheme mode="light">
            <div className={useStyles().main}>
                <h2 className={useStyles().subtitle}>This is Permenently light Themed</h2>
            </div>
            <DarkAgain />
        </SparkTheme>
    );
}

const CSSed = ({ theme }) => {
    return (
        <div className={useStyles().main}>
            <h1 className={useStyles().title}>Sass</h1>
            <h2 className={useStyles().subtitle}>This is made with css modules</h2>
            <LightSection />
        </div>
    );
};

export default withTheme(CSSed);
