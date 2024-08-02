import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const StartScreen = ({navigation}) => {
  const [compliteStageF, setCompliteStageF] = useState(false);

  useEffect(() => {
    getDataStageF();
  }, []);

  const getDataStageF = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`StageF`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setCompliteStageF(parsedData.compliteStageF);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  return (
    <View
      style={{
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#29516b',
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('StageF');
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
            fontSize: 45,
            fontWeight: 'bold',
            fontFamily: 'Starnberg',
          }}>
          STAGE 1
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={compliteStageF ? false : true}
        onPress={() => {
          navigation.navigate('StageS');
        }}
        style={{
          width: 250,
          height: 80,
          borderWidth: 3,
          borderColor: compliteStageF ? '#ff6a02' : 'grey',
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}>
        <Text
          style={{
            color: compliteStageF ? '#ff6a02' : 'grey',
            fontSize: 45,
            fontWeight: 'bold',
            fontFamily: 'Starnberg',
          }}>
          STAGE 2
        </Text>
      </TouchableOpacity>

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

export default StartScreen;
