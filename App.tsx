import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';

import styled from 'styled-components/native';

export default function App(): JSX.Element {
  return (
    <Container>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
