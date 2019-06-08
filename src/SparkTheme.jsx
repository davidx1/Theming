import React from 'react';
import { ThemeProvider } from 'styled-components';

const ThemeObject = {
    dark: { bg: 'black', txt1: '#ccc', txt2: '#888' },
    light: { bg: 'white', txt1: '#333', txt2: '#777' }
};

const SparkTheme = ({ mode = 'light', children }) => {
    return (
        <ThemeProvider theme={ThemeObject[mode]}>
            <div class={mode}>{children}</div>
        </ThemeProvider>
    );
};

export default SparkTheme;
