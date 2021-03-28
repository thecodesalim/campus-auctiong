/**
 * Campus Auction
 * Salim Abubakar
 *
 *
 *
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Pressable,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Picker} from '@react-native-picker/picker';

const Stack = createStackNavigator();
const windowWidth = Dimensions.get('window').width;

const Title = () => {
  return (
    <Text
      style={{fontSize: 20, color: '#4B0082', fontWeight: 'bold', margin: 10}}>
      Campus AuctionNG
    </Text>
  );
};

const Input = (props) => {
  return (
    <TextInput
      style={{
        margin: 5,
        borderColor: '#B1B1B1',
        borderWidth: 1,
        borderRadius: 8,
        width: props.width,
        height: 40,
      }}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
    />
  );
};

const CustomButton = (props) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={{
        backgroundColor: '#4B0082',
        width: windowWidth - 40,
        height: 35,
        borderRadius: 5,
      }}>
      <Text style={{textAlign: 'center', color: 'white', paddingTop: 8}}>
        {props.title}
      </Text>
    </Pressable>
  );
};

const ScrollItem = (props) => {
  return (
    <View
      style={{
        width: 95,
        height: 40,
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
        margin: 22,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          width: 30,
          height: 25,
          backgroundColor: '#f56942',
          marginTop: 5,
          marginLeft: 5,
        }}
      />
      <Text
        style={{
          fontSize: 12,
          marginRight: 5,
          marginTop: 13,
        }}>
        {props.itemName}
      </Text>
    </View>
  );
};

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
const CardView = () => {
  return (
    <>
      <View style={{flex: 1, marginBottom: 10}}>
        <View
          style={{
            flex: 1,
            width: windowWidth - 10,
            height: 670,
            borderColor: '#B1B1B1',
            borderWidth: 1,
            borderRadius: 8,
          }}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  margin: 10,
                  width: 50,
                  height: 50,
                  backgroundColor: 'orangered',
                  borderRadius: 25,
                }}
              />
              <View style={{marginTop: 10}}>
                <Text>Fela Kuti</Text>
                <Text style={{fontSize: 12, color: '#707070'}}>
                  University of Lagos, Lagos
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text style={{fontSize: 13, color: '#333333'}}>
                Clean and beautiful Arabian dress close to you
              </Text>
              <Text style={{fontWeight: 'bold'}}>N35,000</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 5,
              width: windowWidth - 10,
              height: 290,
              borderRadius: 8,
              backgroundColor: '#B1B1B1',
            }}
          />
          <View style={{margin: 20, marginTop: 50}}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
          <Text style={{alignSelf: 'flex-end', marginRight: 5}}>
            Jan 9, 2019
          </Text>
        </View>
      </View>
    </>
  );
};
const SplashScreen = (props) => {
  const change = () => {
    setTimeout(() => props.navigation.navigate('RegisterScreen'), 1000);
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Title />
        <Text style={{fontSize: 10, paddingLeft: 80}}>
          Easy Buy, Easy Sell...
        </Text>
        {change()}
      </View>
    </>
  );
};

const RegisterScreen = (props) => {
  const [selectedValue, setSelectedValue] = React.useState(
    'Universityof Lagos',
  );
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginTop: 120,
            alignItems: 'center',
          }}>
          <Title />
          <View style={{alignItems: 'center', margin: 5}}>
            <Input
              width={windowWidth - 40}
              placeholder="Phone Number"
              keyboardType="phone-pad"
            />
            <View
              style={{
                borderColor: '#B1B1B1',
                borderWidth: 1,
                borderRadius: 8,
                width: props.width,
                height: 40,
              }}>
              <Picker
                selectedValue={selectedValue}
                style={{
                  height: 50,
                  width: windowWidth - 40,
                  borderWidth: 1,
                  borderRadius: 8,
                  borderColor: '#B1B1B1',
                }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }>
                <Picker.Item
                  label="University of Lagos"
                  value="University of Lagos"
                />
                <Picker.Item
                  label="Federal University of Technology"
                  value="js"
                />
              </Picker>
            </View>
            <Text style={{fontSize: 13, color: 'grey'}}>
              By creating an account with us, you agree with our terms and
              conditions.
            </Text>
          </View>
          <View>
            <CustomButton
              onPress={() => props.navigation.navigate('CreateProfile')}
              title="Create Account"
            />

            <TouchableOpacity
              style={{alignSelf: 'center', margin: 10}}
              onPress={() => props.navigation.navigate('OTPScreen')}>
              <Text style={{color: '#4B0082'}}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const OTPScreen = (props) => {
  return (
    <SafeAreaView style={{flex: 1, padding: 20, backgroundColor: '#ffffff'}}>
      <View style={{flex: 1}} />
      <Text
        style={{fontWeight: 'bold', textAlign: 'center', paddingBottom: 40}}>
        Please enter confirmation code
      </Text>

      <View style={{flex: 4}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text style={{}}>SMS sent to +234xxxxxxxx</Text>
          <Text style={{color: '#4B0082'}}>Wrong Number?</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <Input width={40} placeholder="" />
          <Input width={40} placeholder="" />
          <Input width={40} placeholder="" />
          <Input width={40} placeholder="" />
          <Input width={40} placeholder="" />
        </View>
        <View style={{alignSelf: 'center', paddingTop: 10}}>
          <CustomButton
            onPress={() => props.navigation.navigate('Home')}
            title="Verify"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <Text style={{}}>Did not receive code?</Text>
          <Text style={{color: '#4B0082'}}>Request Again</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const CreateProfile = (props) => {
  return (
    <SafeAreaView style={{flex: 1, padding: 20, backgroundColor: '#ffffff'}}>
      <View style={{alignItems: 'center', padding: 40}}>
        <Text style={{fontSize: 25}}>Create Profile</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: 'grey',
            marginBottom: 0,
          }}
        />
        <View
          style={{
            position: 'relative',
            left: 40,
            top: -40,
            zIndex: 2,
            width: 35,
            height: 35,
            borderRadius: 25,
            backgroundColor: '#4B0082',
            marginBottom: 0,
          }}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Input width={windowWidth - 40} placeholder="Username" />
        <Input width={windowWidth - 40} placeholder="First Name" />
        <Input width={windowWidth - 40} placeholder="Last Name" />
        <Input
          width={windowWidth - 40}
          placeholder="Email(Optional)"
          keyboardType="email-address"
        />
        <CustomButton
          onPress={() => props.navigation.navigate('Home')}
          title="Submit"
        />
      </View>
    </SafeAreaView>
  );
};

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, padding: 5, backgroundColor: '#ffffff'}}>
      <View style={{alignItems: 'center', padding: 0}}>
        <Text
          style={{
            fontSize: 20,
            color: '#4B0082',
            fontWeight: 'bold',
            margin: 10,
          }}>
          Campus AuctionNG
        </Text>
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

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateProfile"
          component={CreateProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
