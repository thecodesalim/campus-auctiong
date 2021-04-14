/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Pressable, Text, Image} from 'react-native';

const SettingsItem = (props) => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 10, marginTop: 10}}>
      <Image style={{marginLeft: 10, marginRight: 25}} source={props.icon} />
      <Pressable onPress={props.onPress}>
        <Text style={{marginTop: 0}}>{props.item}</Text>
      </Pressable>
    </View>
  );
};

export default SettingsItem;
