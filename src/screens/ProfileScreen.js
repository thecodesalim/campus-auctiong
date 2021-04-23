/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileEntry from '../components/ProfileEntry';
import Divider from '../components/Divider';

const ProfileScreen = (props) => {
  return (
    <SafeAreaView style={{flex: 1, padding: 5, backgroundColor: '#ffffff'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name={'arrow-back'} size={25} />
          <Text style={{fontSize: 21, marginLeft: 10}}>Profile</Text>
        </View>
        <Pressable onPress={() => props.navigation.navigate('Settings')}>
          <Ionicons
            style={{marginRight: 10}}
            name={'settings-outline'}
            size={25}
          />
        </Pressable>
      </View>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: 'orangered',
          alignSelf: 'center',
        }}
      />
      <Text
        style={{
          marginTop: 20,
          alignSelf: 'center',
          fontSize: 18,
          fontWeight: 'bold',
        }}>
        Fela Kuti
      </Text>
      <Divider marginTop={50} />
      <View style={{padding: 20}}>
        <Text style={{fontSize: 15, fontWeight: 'bold', marginBottom: 10}}>
          Personal Information
        </Text>
        <ProfileEntry first="First Name" second="Fela" />
        <ProfileEntry first="Last Name" second="Kuti" />
        <ProfileEntry first="Email" second="felakuti@gmail.com" />
        <ProfileEntry first="Mobile" second="+234XXXXXXXXX" />
        <Divider marginTop={10} />
        <ProfileEntry first="University" second="University of Lagos, Lagos" />
        <Divider marginTop={10} />
        <ProfileEntry first="Bio" second="Blah blah blah blah blah" />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
