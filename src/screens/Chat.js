/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Chat = () => {
  return (
    <SafeAreaView style={{flex: 1, padding: 10, backgroundColor: '#ffffff'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
        }}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <Image
                style={{marginLeft: 7.5, marginRight: 15, marginTop: 8}}
                source={require('../assets/settings.png')}
              />
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 50,
                  backgroundColor: 'orangered',
                }}
              />
              <Text
                style={{
                  marginTop: 9,
                  marginLeft: 8,
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                Burna Boy
              </Text>
            </View>

            <Image
              style={{
                marginLeft: 7.5,
                marginRight: 15,
                marginTop: 8,
              }}
              source={require('../assets/call.png')}
            />
          </View>
          <View style={{marginTop: 40, flexDirection: 'row'}}>
            <View
              style={{
                marginLeft: 10,
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: 'orangered',
                alignSelf: 'flex-end',
              }}
            />
            <View>
              <View
                style={{
                  width: windowWidth - 80,
                  borderRadius: 15,
                  backgroundColor: 'lightgrey',
                  marginLeft: 10,
                }}>
                <Text style={{justifyContent: 'center', alignSelf: 'center'}}>
                  blah blah blah blah blah blah blah blah blah blah blah blah
                  blah blah blah blah blah blah blah blah blah blah blah blah
                  blah blah blah blah blah blah blah blah bla
                </Text>
              </View>
              <Text
                style={{
                  color: 'grey',
                  fontSize: 11,
                  marginLeft: 10,
                  marginTop: 5,
                }}>
                Time
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              marginLeft: 10,
              marginTop: 20,
              flexDirection: 'row',
              width: windowWidth - 80,
              height: 35,
              borderWidth: 1,
              backgroundColor: 'lightgrey',
              borderRadius: 20,
              borderColor: 'lightgrey',
            }}>
            <Image
              style={{marginTop: 8, marginLeft: 8}}
              source={require('../assets/settings.png')}
            />
            <TextInput
              placeholder="Type message here"
              style={{marginLeft: 8, color: 'black'}}
            />
            <Text style={{marginLeft: 180, marginTop: 8}}>Send</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
