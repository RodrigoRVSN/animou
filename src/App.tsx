import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from '@expo-google-fonts/inter';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk';
import { Provider } from 'react-redux';

import theme from './assets/styles/theme';
import { Routes } from './routes';
import * as SplashScreen from 'expo-splash-screen';
import { store } from '@store/index';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({ Inter_400Regular, SpaceGrotesk_700Bold });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const hideSplashScreen = async () => {
    await SplashScreen.hideAsync();
  };

  useEffect(() => {
    if (appIsReady && fontsLoaded) {
      hideSplashScreen();
    }
  }, [appIsReady, fontsLoaded]);

  if (!appIsReady || !fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />

      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  );
}
