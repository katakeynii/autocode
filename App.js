/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NativeBaseProvider, Box, Center, Square, Circle} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import OtpConfirmation from './src/pages/OtpConfirmation';
import AppNavigator from './src/pages/app/AppNavigator';
import {DefaultTheme} from '@react-navigation/native';
const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    primary: '#2C67AD',
  },
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NativeBaseProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
          })}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="OtpConfirmationPage"
            component={OtpConfirmation}
          />
          <Stack.Screen name="app" component={AppNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
