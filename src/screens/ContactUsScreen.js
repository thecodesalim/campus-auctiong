/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, TextInput, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomButton from '../components/CustomButton';

const windowWidth = Dimensions.get('window').width;

const ContactUsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, padding: 10, backgroundColor: '#ffffff'}}>
      <View style={{flexDirection: 'row'}}>
        <Ionicons
          style={{marginLeft: 7.5, marginRight: 15}}
          name={'arrow-back'}
          size={25}
        />
        <Text style={{marginTop: 1, fontSize: 21}}>Contact Us</Text>
      </View>
      <View style={{padding: 15}}>
        <Text>Email</Text>
        <TextInput
          placeholder="Enter your email"
          style={{
            marginTop: 5,
            borderColor: '#B1B1B1',
            borderWidth: 1,
            borderRadius: 8,
            width: windowWidth - 50,
            height: 40,
          }}
        />
        <Text style={{marginTop: 30}}>Suggestion/Complaint</Text>
        <TextInput
          placeholder="Do you have any suggestions or complaints? Kindly type it here"
          multiline={true}
          style={{
            marginTop: 5,
            borderColor: '#B1B1B1',
            borderWidth: 1,
            borderRadius: 8,
            width: windowWidth - 50,
            height: 100,
            marginBottom: 20,
          }}
        />
        <CustomButton title="Send" />
      </View>
    </SafeAreaView>
  );
};

export default ContactUsScreen;
