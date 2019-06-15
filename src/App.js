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
            <FlexRow>
                <h2>Toggle Theme</h2>
                <Switch checked={isLight} onChange={checked => setLightMode(checked)} />
            </FlexRow>
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

const FlexRow = styled.div`
    display: flex;
    align-items: center;
`;
