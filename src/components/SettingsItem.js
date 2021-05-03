/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Pressable, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingsItem = (props) => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 10, marginTop: 10}}>
      <Ionicons
        style={{marginLeft: 10, marginRight: 25}}
        name={props.name}
        size={25}
        color={props.color}
      />
      <Pressable onPress={props.onPress}>
        <Text style={{marginTop: 5}}>{props.item}</Text>
      </Pressable>
    </View>
  );
};

export default SettingsItem;
