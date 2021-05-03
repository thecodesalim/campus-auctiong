/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CardView from '../components/CardView';
import CategoryView from '../components/CategoryView';
import AddItem from '../screens/AddItem';

const HomeScreen = (props) => {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={{flex: 1, padding: 5, backgroundColor: '#ffffff'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Ionicons name={'notifications-outline'} size={25} />
        <Text
          style={{
            fontSize: 16,
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
          marginLeft: '81%',
          position: 'absolute',
        }}
        onPress={() => toggleModal()}>
        <Ionicons name={'add-circle'} size={65} color="#4B0082" />
      </Pressable>
      <AddItem isModalVisible={isModalVisible} onPress={() => toggleModal()} />
    </SafeAreaView>
  );
};

export default HomeScreen;
