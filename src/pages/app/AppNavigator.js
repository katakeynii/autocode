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

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cours from './cours/Cours';
import Home from './Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Exams from './exams/Exams';
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor={'#fff'}
      />
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Cours') {
              // iconName = focused ? 'ios-albums' : 'ios-albums-outline';
              iconName = 'ios-albums';
            }
            if (route.name === 'Home') {
              // iconName = focused ? 'ios-home' : 'ios-home-outline';
              iconName = 'ios-home';
            }

            if (route.name === 'Exams') {
              // iconName = focused ? 'ios-folder-open' : 'ios-folder-open-outline';
              iconName = 'ios-folder-open';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2C67AD',
          tabBarInactiveTintColor: '#BEBEBE',
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cours" component={Cours} />
        <Tab.Screen name="Exams" component={Exams} />
      </Tab.Navigator>
    </>
  );
};

export default AppNavigator;
