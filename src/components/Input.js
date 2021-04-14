/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput} from 'react-native';

const Input = (props) => {
  return (
    <TextInput
      style={{
        margin: 5,
        borderColor: '#B1B1B1',
        borderWidth: 1,
        borderRadius: 8,
        width: props.width,
        height: 40,
      }}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
    />
  );
};

export default Input;
