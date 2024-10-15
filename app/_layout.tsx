import { DarkTheme, DefaultTheme, ThemeProvider, } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Bell } from 'lucide-react-native'; 

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTitleStyle: {
            color: '#000',
            fontWeight: '700',
            fontSize: 25,
          },
          headerTintColor: '#000000',
        }}
      >
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="Signup" options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" options={{ headerShown: false }} />
        <Stack.Screen name="ResetPassword" options={{ headerShown: false }} />
        <Stack.Screen name="ProductDetail" options={{ headerShown: true }} />
        <Stack.Screen name="MyDetail" options={{ headerShown: false }} />
        <Stack.Screen
          name="MyOrder"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerTitle: 'My Order',
            headerTitleAlign: 'center',
            headerRight: () => (
              <Bell
                size={24}
                color={'#000000'}
              />
            ),
          }}
        />
        <Stack.Screen name="OTPScreen" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="address" options={{ headerShown: false }} />
        <Stack.Screen name="CustomerService" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
