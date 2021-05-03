/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Dimensions, Image, Pressable} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;

const CardView = (props) => {
  const option = () => {
    if (props.option === 'more') {
      return <MoreButton />;
    } else if (props.option === 'remove') {
      return <RemoveButton />;
    } else {
      return <></>;
    }
  };
  return (
    <>
      <View style={{flex: 1, marginBottom: '2.5%', alignSelf: 'center'}}>
        <View
          style={{
            flex: 1,
            width: '90%',
            borderColor: '#B1B1B1',
            borderWidth: 1,
            borderRadius: 8,
          }}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#707070',
                      alignItems: 'flex-end',
                    }}>
                    University of Lagos, Lagos
                  </Text>
                </View>
                {/* {props.option ? <MoreButton /> : <RemoveButton />} */}
                {option()}
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 13, color: '#333333', marginLeft: 3}}>
                Clean and beautiful Arabian dress close to you
              </Text>
              <Text style={{fontWeight: 'bold', marginRight: 3}}>N35,000</Text>
            </View>
          </View>
          <Image
            style={{
              marginTop: 5,
              width: windowWidth - 30,
              height: 290,
              borderRadius: 0,
              // backgroundColor: '#B1B1B1',
            }}
            source={require('../assets/3.jpg')}
          />
          {props.views ? <EyeView /> : <IconMenu />}
          <View style={{margin: 5, marginTop: 0, marginLeft: 5}}>
            <Text style={{fontSize: 12}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </Text>
          </View>
          <Text
            style={{
              alignSelf: 'flex-end',
              marginRight: 5,
              fontSize: 9,
              color: 'grey',
              marginBottom: 5,
            }}>
            Jan 9, 2019
          </Text>
        </View>
      </View>
    </>
  );
};

const RemoveButton = () => {
  return (
    <Pressable style={{alignSelf: 'flex-start', marginLeft: '24%'}}>
      <Text style={{color: 'red'}}>Remove</Text>
    </Pressable>
  );
};

const MoreButton = () => {
  return (
    <Pressable style={{alignSelf: 'flex-start', marginLeft: '26.5%'}}>
      <Ionicons
        style={{margin: 15, marginBottom: 5}}
        name={'ellipsis-vertical'}
        size={25}
      />
    </Pressable>
  );
};

const IconMenu = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Ionicons
          style={{margin: 10, marginBottom: 5}}
          name={'chatbubble-ellipses-outline'}
          size={25}
        />
        <Ionicons
          style={{margin: 10, marginBottom: 5}}
          name={'call-outline'}
          size={25}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Ionicons
          style={{margin: 10, marginBottom: 5}}
          name={'information-circle-outline'}
          size={30}
        />
        <Ionicons
          style={{margin: 10, marginBottom: 5}}
          name={'bookmark-outline'}
          size={25}
        />
      </View>
    </View>
  );
};

const EyeView = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Ionicons
        style={{
          margin: 10,
          marginBottom: 5,
          marginTop: 10,
          marginRight: 3,
        }}
        name={'eye-outline'}
        size={20}
      />
      <Text style={{marginTop: 12, color: 'black', fontSize: 12}}>243,593</Text>
    </View>
  );
};

export default CardView;
