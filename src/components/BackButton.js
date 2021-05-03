/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BackButton = (props) => {
  return (
    <Pressable
      style={{marginRight: 10, marginLeft: 10}}
      onPress={props.onPress}>
      <Ionicons name={'arrow-back'} size={25} />
    </Pressable>
  );
};

export default BackButton;
