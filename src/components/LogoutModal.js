/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, Dimensions, Pressable} from 'react-native';
import Modal from 'react-native-modal';

const windowWidth = Dimensions.get('window').width;

const LogoutModal = (props) => {
  return (
    <SafeAreaView>
      <Modal isVisible={props.isModalVisible}>
        <View
          style={{
            alignSelf: 'center',
            height: 150,
            width: windowWidth - 100,
            borderRadius: 8,
            backgroundColor: 'white',
          }}>
          <Text style={{alignSelf: 'center', padding: 30}}>
            {props.details}
          </Text>
          <View style={{marginTop: 0}} />
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Pressable style={{marginTop: 15}}>
              <Text>Cancel</Text>
            </Pressable>
            <Pressable
              onPress={props.toggleModal}
              style={{
                color: 'white',
                backgroundColor: props.color,
                width: '35%',
                height: 48,
                borderRadius: 8,
              }}>
              <Text
                style={{
                  textAlignVertical: 'center',
                  textAlign: 'center',
                  color: 'white',
                  margin: 15,
                }}>
                {props.title}
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default LogoutModal;
