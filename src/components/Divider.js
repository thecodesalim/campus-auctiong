/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Divider = (props) => {
  return (
    <View
      style={{
        marginBottom: 10,
        marginTop: props.marginTop,
        width: windowWidth,
        height: 1,
        backgroundColor: 'lightgrey',
      }}
    />
  );
};

export default Divider;
