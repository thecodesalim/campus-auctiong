/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SettingsItem from '../components/SettingsItem';
import LogoutModal from '../components/LogoutModal';

const SettingsScreen = (props) => {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={{flex: 1, padding: 5, backgroundColor: '#ffffff'}}>
      <View style={{padding: 5}}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons
            style={{marginLeft: 7.5, marginRight: 15}}
            name={'arrow-back'}
            size={25}
          />
          <Text style={{marginTop: 1, fontSize: 21}}>Settings</Text>
        </View>
        <View style={{marginBottom: 40}} />
        <Pressable onPress={() => props.navigation.navigate('Account')}>
          <SettingsItem
            name="person-circle-outline"
            item="Account"
            onPress={() => props.navigation.navigate('Account')}
          />
        </Pressable>
        <SettingsItem
          name="chatbox-outline"
          item="Contact us"
          onPress={() => props.navigation.navigate('ContactUsScreen')}
        />

        <SettingsItem name="person-circle-outline" item="About us" />

        <SettingsItem name="information-circle-outline" item="App info" />

        <SettingsItem
          style={{color: 'red'}}
          name="log-out-outline"
          color="red"
          item="Log out"
          onPress={() => toggleModal()}
        />

        <LogoutModal
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
          details="Dear Fela, are you sure you want to log out?"
          title="Logout"
          color="red"
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
