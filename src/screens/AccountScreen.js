/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';

const AccountScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, padding: 5, backgroundColor: '#ffffff'}}>
      <View style={{padding: 5}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{marginLeft: 7.5, marginRight: 15}}
            source={require('../assets/settings.png')}
          />
          <Text style={{marginTop: 1, fontSize: 16}}>Account</Text>
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
