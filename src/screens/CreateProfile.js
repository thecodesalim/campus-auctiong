/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';

import Input from '../components/Input';
import CustomButton from '../components/CustomButton';

const windowWidth = Dimensions.get('window').width;

const CreateProfile = (props) => {
  return (
    <SafeAreaView style={{flex: 1, padding: 20, backgroundColor: '#ffffff'}}>
      <View style={{alignItems: 'center', padding: 40}}>
        <Text style={{fontSize: 25}}>Create Profile</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: 'grey',
            marginBottom: 0,
          }}
        />
        <View
          style={{
            position: 'relative',
            left: 40,
            top: -40,
            zIndex: 2,
            width: 35,
            height: 35,
            borderRadius: 25,
            backgroundColor: '#4B0082',
            marginBottom: 0,
          }}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Input width={windowWidth - 40} placeholder="Username" />
        <Input width={windowWidth - 40} placeholder="First Name" />
        <Input width={windowWidth - 40} placeholder="Last Name" />
        <Input
          width={windowWidth - 40}
          placeholder="Email(Optional)"
          keyboardType="email-address"
        />
        <CustomButton
          onPress={() => props.navigation.navigate('Main')}
          title="Submit"
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateProfile;
