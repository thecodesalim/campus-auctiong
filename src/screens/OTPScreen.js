/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import Input from '../components/Input';
import CustomButton from '../components/CustomButton';

const OTPScreen = (props) => {
  return (
    <SafeAreaView style={{flex: 1, padding: 20, backgroundColor: '#ffffff'}}>
      <View style={{flex: 1}} />
      <Text
        style={{fontWeight: 'bold', textAlign: 'center', paddingBottom: 40}}>
        Please enter confirmation code
      </Text>

      <View style={{flex: 4}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text style={{}}>SMS sent to +234xxxxxxxx</Text>
          <Text style={{color: '#4B0082'}}>Wrong Number?</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <Input width={63} placeholder="" />
          <Input width={63} placeholder="" />
          <Input width={63} placeholder="" />
          <Input width={63} placeholder="" />
          <Input width={63} placeholder="" />
        </View>
        <View style={{alignSelf: 'center', paddingTop: 10}}>
          <CustomButton
            onPress={() => props.navigation.navigate('Home')}
            title="Verify"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <Text style={{}}>Did not receive code?</Text>
          <Text style={{color: '#4B0082'}}>Request Again</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OTPScreen;
