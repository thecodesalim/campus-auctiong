/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, Pressable, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileEntry from '../components/ProfileEntry';
import Divider from '../components/Divider';
import BackButton from '../components/BackButton';

const ProfileScreen = (props) => {
  return (
    <SafeAreaView style={{flex: 1, padding: 5, backgroundColor: '#ffffff'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <BackButton onPress={() => props.navigation.goBack()} />
          <Text style={{fontSize: 16, marginLeft: 10, marginTop: 6}}>
            Profile
          </Text>
        </View>
        <Pressable onPress={() => props.navigation.navigate('Settings')}>
          <Ionicons
            style={{marginRight: 10}}
            name={'settings-outline'}
            size={25}
          />
        </Pressable>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: 'orangered',
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
            borderRadius: 50,
            backgroundColor: '#4B0082',
            marginBottom: 0,
          }}>
          <Ionicons
            style={{position: 'relative', left: 10, top: 10}}
            name="pencil-outline"
            color="white"
            size={15}
          />
        </View>
      </View>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginBottom: 10}}>
              Personal Information
            </Text>
            <Ionicons name="pencil-outline" color="#4B0082" size={20} />
          </View>
          <ProfileEntry first="First Name" second="Fela" />
          <ProfileEntry first="Last Name" second="Kuti" />
          <ProfileEntry first="Email" second="felakuti@gmail.com" />
          <ProfileEntry first="Mobile" second="+234XXXXXXXXX" />
          <Divider marginTop={10} />
          <ProfileEntry
            first="University"
            second="University of Lagos, Lagos"
          />
          <Divider marginTop={10} />
          <ProfileEntry first="Bio" second="Blah blah blah blah blah" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
