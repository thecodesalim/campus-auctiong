/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, Text, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const CustomButton = (props) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={{
        alignSelf: 'center',
        backgroundColor: '#4B0082',
        width: windowWidth - 50,
        height: 48,
        borderRadius: 8,
      }}>
      <Text style={{textAlign: 'center', color: 'white', margin: 15}}>
        {props.title}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
