import React from 'react';

import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{title:'Meu App'}} component = {HomeScreen}/>
        <Stack.Screen name="Detail" options={{title:'Resultado'}} component = {DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;