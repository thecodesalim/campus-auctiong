/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Pressable} from 'react-native';

import Divider from '../components/Divider';

const MessageList = (props) => {
  return (
    <>
      <Pressable onPress={() => console.log('pressed')}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: 'orangered',
              }}
            />
            <View style={{marginTop: 10, marginLeft: 10}}>
              <Text>{props.username}</Text>
              <Text style={{fontSize: 12, marginTop: 6, color: 'grey'}}>
                {props.message}
              </Text>
            </View>
          </View>
          <Text style={{fontSize: 12, marginTop: 20, color: 'grey'}}>
            Date/Time
          </Text>
        </View>
        <Divider marginTop={20} />
      </Pressable>
    </>
  );
};

export default MessageList;
