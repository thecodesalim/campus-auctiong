/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, SafeAreaView, ScrollView} from 'react-native';

import CardView from '../components/CardView';

const Ads = () => {
  return (
    <SafeAreaView style={{flex: 1, padding: 5, backgroundColor: '#ffffff'}}>
      <Text
        style={{
          fontSize: 21,
          margin: 20,
        }}>
        Ads
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardView />
        <CardView />
        <CardView />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Ads;
