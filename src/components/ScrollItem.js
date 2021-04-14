/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const ScrollItem = (props) => {
  return (
    <View
      style={{
        height: 40,
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
        margin: 22,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          width: 30,
          height: 25,
          borderRadius: 8,
          backgroundColor: '#f56942',
          marginTop: 7.5,
          marginLeft: 5,
          marginRight: 5,
        }}
      />
      <Text
        style={{
          fontSize: 12,
          marginRight: 5,
          marginTop: 13,
        }}>
        {props.itemName}
      </Text>
    </View>
  );
};

export default ScrollItem;
