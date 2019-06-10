import React from 'react';
import { ThemeProvider } from 'styled-components';

export const ThemeContext = React.createContext();

const ThemeObject = {
    dark: { bg: 'black', txt1: '#ccc', txt2: '#888' },
    light: { bg: 'white', txt1: '#333', txt2: '#777' }
};

const SparkTheme = ({ mode = 'light', children }) => {
    return (
        <ThemeContext.Provider value={mode}>
            <ThemeProvider theme={ThemeObject[mode]}>
                <>{children}</>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default SparkTheme;
