import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#29516b'}}>
      <View>
        <Image
          source={require('../assets/prevPhoto.jpeg')}
          style={{width: windowWidth, height: 250}}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('StartScreen');
              }}
              style={{
                width: 250,
                height: 80,
                borderWidth: 3,
                borderColor: '#ff6a02',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
                marginTop: 20,
              }}>
              <Text
                style={{
                  color: '#ff6a02',
                  fontSize: 40,
                  fontWeight: 'bold',
                  fontFamily: 'Starnberg',
                }}>
                Start
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ResultScreen');
              }}
              style={{
                width: 250,
                height: 80,
                borderWidth: 3,
                borderColor: '#ff6a02',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
              <Text
                style={{
                  color: '#ff6a02',
                  fontSize: 40,
                  fontWeight: 'bold',
                  fontFamily: 'Starnberg',
                }}>
                Shop
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProfileScreen');
              }}
              style={{
                width: 250,
                height: 80,
                borderWidth: 3,
                borderColor: '#ff6a02',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
              <Text
                style={{
                  color: '#ff6a02',
                  fontSize: 40,
                  fontWeight: 'bold',
                  fontFamily: 'Starnberg',
                }}>
                Profile
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('RulesScreen');
              }}
              style={{
                width: 250,
                height: 80,
                borderWidth: 3,
                borderColor: '#ff6a02',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
              <Text
                style={{
                  color: '#ff6a02',
                  fontSize: 40,
                  fontWeight: 'bold',
                  fontFamily: 'Starnberg',
                }}>
                Rules
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AbouteScreem');
              }}
              style={{
                width: 250,
                height: 80,
                borderWidth: 3,
                borderColor: '#ff6a02',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
              <Text
                style={{
                  color: '#ff6a02',
                  fontSize: 40,
                  fontWeight: 'bold',
                  fontFamily: 'Starnberg',
                }}>
                About
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 150}}></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
