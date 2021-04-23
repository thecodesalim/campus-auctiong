/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CardView from '../components/CardView';
import CategoryView from '../components/CategoryView';

const windowWidth = Dimensions.get('window').width;

const HomeScreen = (props) => {
  return (
    <SafeAreaView style={{flex: 1, padding: 5, backgroundColor: '#ffffff'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Ionicons name={'notifications-outline'} size={25} />
        <Text
          style={{
            fontSize: 21,
            color: '#4B0082',
            fontWeight: 'bold',
          }}>
          Campus AuctionNG
        </Text>

        <Ionicons name={'search-outline'} size={25} />
        <Pressable onPress={() => props.navigation.navigate('Profile')}>
          <Ionicons name={'person-outline'} size={25} />
        </Pressable>
      </View>
      <CategoryView />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardView />
        <CardView />
        <CardView />
      </ScrollView>
      <Pressable
        style={{
          bottom: 0,
          //alignSelf: 'flex-end',
          //margin: 30,
          marginLeft: windowWidth - 90,
          position: 'absolute',
        }}
        onPress={() => props.navigation.navigate('AddItem')}>
        <Ionicons name={'add-circle'} size={80} color="#4B0082" />
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeScreen;
