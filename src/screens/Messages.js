/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';

import Input from '../components/Input';
import MessageList from '../components/MessageList';

const windowWidth = Dimensions.get('window').width;

const Messages = (props) => {
  // return <AppNavigator />;
  return (
    <SafeAreaView style={{flex: 1, padding: 10, backgroundColor: '#ffffff'}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{marginTop: 1, marginLeft: 10, fontSize: 21}}>
          Messages
        </Text>
      </View>
      <View style={{padding: 10}}>
        <Input width={windowWidth - 50} placeholder="Search user" />

        <MessageList
          username="Burna Boy"
          message="Hello"
          onPress={() => props.navigation.navigate('Chat')}
        />
        <MessageList
          username="Naira Marley"
          message="I'm not interested anymore"
        />
        <MessageList username="Tiwa Savage" message="I'll call you later" />
      </View>
    </SafeAreaView>
  );
};

export default Messages;
