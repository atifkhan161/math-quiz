import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// You can import from local files
import LoginScreen from './components/login.js';
import DashboardScreen from './components/dashboard.js';
import NaturalQuiz from './components/n-quiz.js';
import WholeQuiz from './components/w-quiz.js';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={DashboardScreen} />
        <Stack.Screen name="NaturalQuiz" component={NaturalQuiz} options={{ title: 'Natural Number' }}/>
        <Stack.Screen name="WholeQuiz" component={WholeQuiz} options={{ title: 'Whole Number' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
