import React, { useState } from 'react';
import styled from 'styled-components';
import SparkTheme from './SparkTheme';
import Styled from './Styled';
import CSSed from './CSSed';
import Switch from 'react-switch';

function App() {
    const [isLight, setLightMode] = useState(true);

    return (
        <div>
            <h3>Toggle Theme</h3>
            <Switch checked={isLight} onChange={(checked)=>setLightMode(checked)} />
            <SparkTheme mode={isLight ? 'light' : 'dark'}>
                <Section>
                    <Styled />
                </Section>
                <Section>
                    <CSSed />
                </Section>
            </SparkTheme>
        </div>
    );
}

export default App;

const Section = styled.div`
    margin-bottom: 24px;
`;
