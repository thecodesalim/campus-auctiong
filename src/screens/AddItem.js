/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';

import Input from '../components/Input';
import CustomButton from '../components/CustomButton';
import LogoutModal from '../components/LogoutModal';
import {Picker} from '@react-native-picker/picker';
import Modal from 'react-native-modal';

const windowWidth = Dimensions.get('window').width;

const AddItem = (props) => {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <Modal isVisible={props.isModalVisible}>
      <SafeAreaView style={{flex: 1, padding: 10, backgroundColor: '#ffffff'}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#4B0082', marginLeft: 5, marginBottom: 10}}>
            Cancel
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{margin: 5}}>
          <Text style={{fontSize: 16}}>Category</Text>
          <Picker>
            <Picker.Item label="Electronics" value="Electronices" />
            <Picker.Item label="Furniture" value="Furniture" />
          </Picker>
          <Text style={{fontSize: 16}}>Sub-Category</Text>
          <Picker>
            <Picker.Item label="Laptop" value="Laptop" />
            <Picker.Item label="Phone" value="Phone" />
          </Picker>
          <Text style={{fontSize: 16}}>Title</Text>
          <Input placeholder="Make it brief and clear" />
          <Text style={{fontSize: 16}}>Price</Text>
          <Input placeholder="Price" keyboardType="numeric" />
          <Text style={{fontSize: 16}}>Description</Text>
          <TextInput
            multiline={true}
            style={{
              textAlignVertical: 'top',
              marginTop: 5,
              borderColor: '#B1B1B1',
              borderWidth: 1,
              borderRadius: 8,
              width: windowWidth - 22,
              height: 100,
              marginBottom: 20,
            }}
            placeholder="Detailed information about the product"
          />
          <Text style={{fontSize: 16}}>Add photo or video</Text>
          <Text style={{color: 'grey'}}>
            Can upload a maximum of 4 photos and 1 video
          </Text>

          <Image
            style={{
              marginLeft: 10,
              marginRight: 15,
              alignSelf: 'center',
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require('../assets/add_product.png')}
          />
          <CustomButton title="Post" onPress={() => toggleModal()} />
        </ScrollView>
        <LogoutModal
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
          details="Post your product and connect with buyers
        close to you"
          title="Post"
          color="#4B0082"
        />
      </SafeAreaView>
    </Modal>
  );
};

export default AddItem;
