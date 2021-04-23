import 'react-native-gesture-handler';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  AppNavigator,
  StartUp,
  MessageStack,
  AdsStack,
  SavedStack,
} from './src/configuration/AppNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Messages') {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          } else if (route.name === 'Saved') {
            iconName = focused ? 'save' : 'save-outline';
          } else if (route.name === 'Ads') {
            iconName = focused ? 'images' : 'images-outline';
          }

          return <Ionicons name={iconName} size={size} color={'#4B0082'} />;
        },
      })}
      tabBarOptions={{
        style: {backgroundColor: '#ffff'},
        showLabel: false,
        showIcon: true,
      }}>
      <Tab.Screen name="Home" component={AppNavigator} />
      <Tab.Screen name="Ads" component={AdsStack} />
      <Tab.Screen name="Messages" component={MessageStack} />
      <Tab.Screen name="Saved" component={SavedStack} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    // <AddItem />
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
