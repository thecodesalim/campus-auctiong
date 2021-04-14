import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ProfileEntry = (props) => {
  return (
    <>
      <Text style={styles.firstText}>{props.first}</Text>
      <Text style={styles.secondText}>{props.second}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  firstText: {
    marginBottom: 10,
  },
  secondText: {
    color: 'grey',
    fontSize: 13,
    marginBottom: 10,
  },
});

export default ProfileEntry;
