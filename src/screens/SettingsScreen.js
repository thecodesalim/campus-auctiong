/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, Image, Pressable} from 'react-native';

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
          <Image
            style={{marginLeft: 7.5, marginRight: 15}}
            source={require('../assets/settings.png')}
          />
          <Text style={{marginTop: 1, fontSize: 16}}>Settings</Text>
        </View>
        <View style={{marginBottom: 40}} />
        <Pressable onPress={() => props.navigation.navigate('Account')}>
          <SettingsItem
            icon={require('../assets/user_account.png')}
            item="Account"
            onPress={() => props.navigation.navigate('Account')}
          />
        </Pressable>
        <SettingsItem
          icon={require('../assets/user_message.png')}
          item="Contact us"
          onPress={() => props.navigation.navigate('ContactUsScreen')}
        />

        <SettingsItem
          icon={require('../assets/user_avatar.png')}
          item="About us"
        />

        <SettingsItem
          icon={require('../assets/user_info.png')}
          item="App info"
        />

        <SettingsItem
          style={{color: 'red'}}
          icon={require('../assets/user_logout.png')}
          item="Log out"
          onPress={() => toggleModal()}
        />

        <LogoutModal
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
