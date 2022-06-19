import { StatusBar } from 'expo-status-bar';
import React from 'react';

import styled, { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk';
import AppLoading from 'expo-app-loading';
import theme from './assets/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, SpaceGrotesk_700Bold });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Title>Open up App.js to start working on your app!</Title>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.orange_brand};
`;
