import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = () => {
  return <Text style={styles.text}>Campus AuctionNG</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#4B0082',
    fontWeight: 'bold',
    margin: 10,
  },
});

export default Title;
