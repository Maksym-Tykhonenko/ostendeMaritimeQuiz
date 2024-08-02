import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Modal,
} from 'react-native';
import {Dimensions} from 'react-native';

const AbouteScreem = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#29516b'}}>
      <ScrollView>
        <View style={{marginTop: 50, marginHorizontal: 10}}>
          <Text
            style={{
              fontSize: 30,
              color: '#ff6a02',
              fontWeight: 'bold',
              marginBottom: 20,
              fontFamily: 'Starnberg',
            }}>
            Discover Ostend: Maritime History Adventures
          </Text>
          <Text
            style={{fontSize: 25, color: '#ff6a02', fontFamily: 'Starnberg'}}>
            {'  '}Dive into the rich maritime history of Ostend with our
            interactive quiz app! Explore fascinating stories, test your
            knowledge, and uncover hidden legends through 10 captivating topics.
            Perfect for history enthusiasts and curious minds, our app offers
            engaging quizzes with multiple-choice questions, each supported by
            intriguing narratives about Ostend's maritime past. Challenge
            yourself and learn about famous sailors, naval battles, maritime
            trade, and much more. Embark on a journey through time and the sea,
            right from your device!
          </Text>
        </View>
      </ScrollView>
      {/**Btn BAck */}
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          borderWidth: 3,
          borderColor: '#ff6a02',
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}>
        <Text style={{color: '#ff6a02', fontSize: 40, fontWeight: 'bold'}}>
          {'<'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AbouteScreem;
