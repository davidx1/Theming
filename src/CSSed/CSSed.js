import React, { useContext } from 'react';
import { withTheme } from 'styled-components';
import stylesObj from './styles.module.scss';
import SparkTheme, { ThemeContext } from '../SparkTheme';
import _ from 'lodash';

function useStyles() {
    const theme = useContext(ThemeContext);
    const mappedStyle = _.mapValues(stylesObj, className => `${className}_${theme}`);
    return { mappedStyle, theme };
}

function Section() {
    const { mappedStyle: styles, theme } = useStyles();
    return (
        <div className={styles.main}>
            <h2 className={styles.subtitle}>This is Permenently {theme} Themed</h2>
        </div>
    );
}

const CSSed = () => {
    const { mappedStyle: styles } = useStyles();
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Sass</h1>
            <Section />
            <SparkTheme mode="light">
                <Section />
                <SparkTheme mode="dark">
                    <Section />
                </SparkTheme>
            </SparkTheme>
        </div>
    );
};

export default withTheme(CSSed);
