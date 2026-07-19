import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="Login" options={{ title: 'Login' }} />
        <Stack.Screen name="Register" options={{ title: 'Register' }} />
        <Stack.Screen name="Settings" options={{ title: 'Settings' }} />
        <Stack.Screen name="Profile" options={{ title: 'Profile' }} />
        <Stack.Screen name="Home" options={{ title: 'StudyScreen' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
