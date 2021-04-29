/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, SafeAreaView, Dimensions, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;

const Chat = () => {
  return (
    <SafeAreaView style={{flex: 1, padding: 5, backgroundColor: '#ffffff'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
        }}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <Ionicons name={'arrow-back'} size={30} />
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
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Burna Boy
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Ionicons
                style={{
                  marginLeft: 7.5,
                  marginRight: 15,
                  marginTop: 8,
                }}
                name={'call'}
                size={25}
              />
              <Ionicons
                style={{
                  marginLeft: 7.5,
                  marginRight: 15,
                  marginTop: 8,
                }}
                name={'ellipsis-vertical'}
                size={25}
              />
            </View>
          </View>
          <View style={{marginTop: 40, flexDirection: 'row'}}>
            <View
              style={{
                marginLeft: 10,
                width: 35,
                height: 35,
                borderRadius: 50,
                backgroundColor: 'orangered',
                alignSelf: 'flex-end',
              }}
            />
            <View>
              <View
                style={{
                  width: windowWidth - 90,
                  borderRadius: 10,
                  backgroundColor: 'lightgrey',
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginLeft: 5,
                  }}>
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
              marginBottom: 10,
              flexDirection: 'row',
              width: windowWidth - 80,
              height: 35,
              borderWidth: 1,
              backgroundColor: 'lightgrey',
              borderRadius: 20,
              borderColor: 'lightgrey',
            }}>
            <Ionicons
              style={{marginTop: 3, marginLeft: 8}}
              name={'image'}
              size={25}
              color="#4B0082"
            />
            <TextInput
              placeholder="Type message here"
              style={{marginLeft: 8, color: 'black', height: 35}}
            />

            <Ionicons
              style={{marginLeft: 170, marginTop: 5}}
              name={'send'}
              size={25}
              color="#4B0082"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
