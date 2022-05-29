import * as React from 'react';
import {DefaultTheme, NavigationContainer, DarkTheme,} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import { useColorScheme } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {

    const scheme = useColorScheme();

    const MyTheme = {
        dark: true,
        colors: {
            primary: 'rgb(255, 45, 85)',
            background: 'rgb(0,0,0)',
            card: 'rgb(255, 255, 255)',
            text: 'rgb(255,255,255)',
            border: 'rgb(255,255,255)',
            notification: 'rgb(255, 69, 58)',
        },
    };

  return (
    <NavigationContainer  theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen}
                      options={{ headerShown: false }}/>

        <Stack.Screen name="Details" component={DetailsScreen}
                      options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );

}
