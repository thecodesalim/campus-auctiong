/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AccountScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, padding: 5, backgroundColor: '#ffffff'}}>
      <View style={{padding: 5}}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name={'arrow-back'} size={25} />
          <Text style={{marginTop: 1, fontSize: 21, marginLeft: 10}}>
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
