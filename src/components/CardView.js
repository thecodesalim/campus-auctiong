/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const CardView = () => {
  return (
    <>
      <View style={{flex: 1, marginBottom: 10, paddingLeft: 5}}>
        <View
          style={{
            flex: 1,
            width: windowWidth - 20,
            height: 670,
            borderColor: '#B1B1B1',
            borderWidth: 1,
            borderRadius: 8,
          }}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  margin: 10,
                  width: 50,
                  height: 50,
                  // backgroundColor: 'orangered',
                  borderRadius: 25,
                }}
                source={require('../assets/fela-kudi.png')}
              />
              <View style={{marginTop: 10}}>
                <Text>Fela Kuti</Text>
                <Text style={{fontSize: 12, color: '#707070'}}>
                  University of Lagos, Lagos
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text style={{fontSize: 13, color: '#333333'}}>
                Clean and beautiful Arabian dress close to you
              </Text>
              <Text style={{fontWeight: 'bold'}}>N35,000</Text>
            </View>
          </View>
          <Image
            style={{
              marginTop: 5,
              width: windowWidth - 22,
              height: 290,
              borderRadius: 8,
              // backgroundColor: '#B1B1B1',
            }}
            source={require('../assets/chair.jpg')}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{margin: 15}}
                source={require('../assets/messag1.png')}
              />
              <Image
                style={{margin: 15}}
                source={require('../assets/call.png')}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{margin: 15}}
                source={require('../assets/info1.png')}
              />
              <Image
                style={{margin: 15}}
                source={require('../assets/save1.png')}
              />
            </View>
          </View>
          <View style={{margin: 20, marginTop: 20}}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
          <Text style={{alignSelf: 'flex-end', marginRight: 5, fontSize: 12}}>
            Jan 9, 2019
          </Text>
        </View>
      </View>
    </>
  );
};

export default CardView;
