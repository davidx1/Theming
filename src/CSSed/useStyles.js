import { useContext } from 'react';
import _ from 'lodash';
import { ThemeContext } from '../SparkTheme';

function useStyles(stylesObj) {
    const theme = useContext(ThemeContext);
    const mappedStyle = _.mapValues(stylesObj, className => `${className}_${theme}`);
    return { mappedStyle, theme };
}

export default useStyles;
