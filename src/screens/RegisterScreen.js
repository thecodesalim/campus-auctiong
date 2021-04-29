/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Title from '../components/Title';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';

const windowWidth = Dimensions.get('window').width;

const RegisterScreen = (props) => {
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginTop: 120,
            alignItems: 'center',
          }}>
          <Title />
          <View style={{alignItems: 'center', margin: 5}}>
            <Input
              width={windowWidth - 40}
              placeholder="Phone Number"
              keyboardType="phone-pad"
            />
            <Input
              width={windowWidth - 40}
              placeholder="School Name"
              keyboardType="email-address"
            />

            <Text
              style={{
                fontSize: 13,
                color: 'grey',
                paddingLeft: 20,
                paddingTop: 20,
              }}>
              By creating an account with us, you agree with our terms and
              conditions.
            </Text>
          </View>
          <View>
            <CustomButton
              onPress={() => props.navigation.navigate('OTPScreen')}
              title="Create Account"
            />

            <TouchableOpacity
              style={{alignSelf: 'center', margin: 10}}
              onPress={() => props.navigation.navigate('OTPScreen')}>
              <Text style={{color: '#4B0082', fontSize: 16}}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default RegisterScreen;
