/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import BackButton from '../components/BackButton';

const AccountScreen = (props) => {
  return (
    <SafeAreaView style={{flex: 1, padding: 5, backgroundColor: '#ffffff'}}>
      <View style={{padding: 5}}>
        <View style={{flexDirection: 'row'}}>
          <BackButton onPress={() => props.navigation.goBack()} />
          <Text style={{marginTop: 4, fontSize: 16, marginLeft: 10}}>
            Account
          </Text>
        </View>
        <View style={{marginBottom: 40}} />
        <View style={{marginLeft: 10}}>
          <Text>Terms & privacy policy</Text>
          <View style={{marginBottom: 20}} />
          <Text style={{color: 'red'}}>Delete account</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
