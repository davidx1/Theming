import React from 'react';
import { withTheme } from 'styled-components';
import stylesObj from './styles.module.scss';
import useStyles from './useStyles';
import SparkTheme from '../SparkTheme';

function Section() {
    const { mappedStyle: styles, theme } = useStyles(stylesObj);
    return (
        <div className={styles.main}>
            <h2 className={styles.subtitle}>This is {theme} Themed via scss</h2>
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
