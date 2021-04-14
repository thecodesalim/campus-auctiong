import React from 'react';
import {View, ScrollView} from 'react-native';

import ScrollItem from '../components/ScrollItem';

const CategoryView = () => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ScrollItem itemName="House" />
        <ScrollItem itemName="Phone" />
        <ScrollItem itemName="Fashion Beauty" />
        <ScrollItem itemName="Electronics" />
        <ScrollItem itemName="Laptop & Comp" />
      </ScrollView>
    </View>
  );
};

export default CategoryView;
