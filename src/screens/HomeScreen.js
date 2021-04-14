/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';

import CardView from '../components/CardView';
import CategoryView from '../components/CategoryView';

const HomeScreen = (props) => {
  return (
    <SafeAreaView style={{flex: 1, padding: 5, backgroundColor: '#ffffff'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image
          style={{margin: 10}}
          source={require('../assets/notifications.png')}
        />
        <Text
          style={{
            fontSize: 20,
            color: '#4B0082',
            fontWeight: 'bold',
            margin: 10,
          }}>
          Campus AuctionNG
        </Text>

        <Image style={{margin: 10}} source={require('../assets/search.png')} />
        <Pressable onPress={() => props.navigation.navigate('Profile')}>
          <Image
            style={{margin: 10}}
            source={require('../assets/userhome.png')}
          />
        </Pressable>
      </View>
      <CategoryView />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardView />
        <CardView />
        <CardView />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
