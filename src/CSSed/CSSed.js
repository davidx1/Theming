import React from 'react';
import { withTheme } from 'styled-components';
import styles from './App.module.scss';
import SparkTheme from '../SparkTheme';

const CSSed = ({ theme }) => {
    return (
        <div class={styles.main}>
            <h1 class={styles.title}>Sass</h1>
            <h2 class={styles.subtitle}>This is made with css modules</h2>
            <SparkTheme mode="dark">
                <div class={styles.main}>
                    <h2 class={styles.subtitle}>This is Permenently dark Themed</h2>
                </div>
            </SparkTheme>
        </div>
    );
};

export default withTheme(CSSed);
