/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, SafeAreaView, Image, Dimensions} from 'react-native';

import Input from '../components/Input';
import MessageList from '../components/MessageList';

const windowWidth = Dimensions.get('window').width;

const Messages = () => {
  // return <AppNavigator />;
  return (
    <SafeAreaView style={{flex: 1, padding: 20, backgroundColor: '#ffffff'}}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{marginLeft: 7.5, marginRight: 15}}
          source={require('../assets/settings.png')}
        />
        <Text style={{marginTop: 1, fontSize: 16}}>Messages</Text>
      </View>
      <View style={{padding: 20}}>
        <Input width={windowWidth - 50} placeholder="Search user" />

        <MessageList username="Burna Boy" message="Hello" />
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
