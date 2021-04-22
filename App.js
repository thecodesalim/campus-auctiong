import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  AppNavigator,
  StartUp,
  MessageStack,
} from './src/configuration/AppNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{style: {backgroundColor: 'lightgrey'}}}>
      <Tab.Screen name="Home" component={AppNavigator} />
      <Tab.Screen name="Messages" component={MessageStack} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator name="StartUp">
        <Stack.Screen
          name="StartUp"
          component={StartUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={MyTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
