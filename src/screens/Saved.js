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
        Saved
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardView option={'remove'} />
        <CardView option={'remove'} />
        <CardView option={'remove'} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Ads;
