import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CreateProfile from '../screens/CreateProfile';
import HomeScreen from '../screens/HomeScreen';
import OTPScreen from '../screens/OTPScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SplashScreen from '../screens/SplashScreen';
import AccountScreen from '../screens/AccountScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import Messages from '../screens/Messages';
import Chat from '../screens/Chat';
import AddItem from '../screens/AddItem';
import Ads from '../screens/Ads';
import Saved from '../screens/Saved';

const Stack = createStackNavigator();

const StartUp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateProfile"
        component={CreateProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContactUsScreen"
        component={ContactUsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddItem"
        component={AddItem}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MessageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AdsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Saved"
        component={Saved}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const SavedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ads" component={Ads} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export {AppNavigator, StartUp, MessageStack, AdsStack, SavedStack};
