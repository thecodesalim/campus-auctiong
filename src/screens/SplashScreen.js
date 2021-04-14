/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

import Title from '../components/Title';

const SplashScreen = (props) => {
  const change = () => {
    setTimeout(() => props.navigation.navigate('RegisterScreen'), 1000);
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Title />
        <Text style={{fontSize: 10, paddingLeft: 80}}>
          Easy Buy, Easy Sell...
        </Text>
        {change()}
      </View>
    </>
  );
};

export default SplashScreen;
