import React, {useState, useEffect} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
  Modal,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const windowWidth = Dimensions.get('window').width;

const ProfileScreen = ({navigation}) => {
  const [selectAvatar, setSelectAvatar] = useState(null);
  console.log('selectAvatar==>', selectAvatar);
  const [prevName, setPrevName] = useState('');
  const [name, setName] = useState('');
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  console.log('correctAnswersCount==>', correctAnswersCount);
  const [lives, setLives] = useState(3); // початкова кількість життів
  console.log('lives==>', lives);
  const [hints, setHints] = useState(3); // початкова кількість підказок
  console.log('hints==>', hints);

  useEffect(() => {
    getData();
    getProfileData();
  }, []);

  useEffect(() => {
    setData();
  }, [name, selectAvatar]);

  const setData = async () => {
    try {
      const data = {
        name,
        selectAvatar,
      };

      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`ProfileScreen`, jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getProfileData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`ProfileScreen`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setName(parsedData.name);
        setSelectAvatar(parsedData.selectAvatar);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`correctAnswers`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setCorrectAnswersCount(parsedData.correctAnswersCount);
        setLives(parsedData.lives ?? 3);
        setHints(parsedData.hints ?? 3);
        setName(parsedData.name);
        setSelectAvatar(parsedData.selectAvatar);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const AvatarPicer = () => {
    let options = {
      storageOptios: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      if (!response.didCancel) {
        //console.log('response==>', response.assets[0].uri);
        setSelectAvatar(response.assets[0].uri);
      } else {
        console.log('Вибір скасовано');
      }
    });
  };

  const SaveName = () => {
    if (prevName === '') {
      Alert.alert('Поле не може бути пустим');
      return;
    } else {
      setName(prevName);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#29516b'}}>
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{alignItems: 'center'}}>
            {/**Avatar */}
            <TouchableOpacity
              onPress={() => {
                AvatarPicer();
              }}>
              {!selectAvatar ? (
                <Image
                  source={require('../assets/icons/photo.png')}
                  style={{width: windowWidth * 0.7, height: windowWidth * 0.7}}
                />
              ) : (
                <Image
                  source={{uri: selectAvatar}}
                  style={{
                    width: windowWidth * 0.7,
                    height: windowWidth * 0.7,
                    borderBottomRightRadius: 150,
                    borderBottomLeftRadius: 150,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
              )}
            </TouchableOpacity>

            {/**name */}
            {!name ? (
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={{
                    height: 60,
                    width: windowWidth * 0.6,
                    margin: 12,
                    padding: 10,
                    borderWidth: 3,
                    borderColor: '#ff6a02',
                    borderRadius: 15,
                    color: '#ff6a02',
                    fontSize: 25,
                  }}
                  onChangeText={setPrevName}
                  value={prevName}
                />

                <TouchableOpacity
                  onPress={() => {
                    SaveName();
                  }}
                  style={{
                    height: 60,
                    width: windowWidth * 0.3,
                    borderWidth: 3,
                    marginTop: 11,
                    borderColor: '#ff6a02',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                  }}>
                  <Text
                    style={{
                      color: '#ff6a02',
                      fontSize: 35,
                      fontWeight: 'bold',
                      fontFamily: 'Starnberg',
                    }}>
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <Text
                style={{fontSize: 40, fontWeight: 'bold', color: '#ff6a02'}}>
                {name}
              </Text>
            )}

            {/**Gains */}
            <View>
              {/**correctAnswersCount*/}
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Image
                  source={require('../assets/icons/trophy.png')}
                  style={{width: 90, height: 90}}
                />
                <Text
                  style={{
                    color: '#ff6a02',
                    fontSize: 50,
                    marginTop: 10,
                    marginLeft: 20,
                    fontFamily: 'Starnberg',
                  }}>
                  X
                </Text>
                <Text
                  style={{
                    color: '#ff6a02',
                    fontSize: 50,
                    marginTop: 10,
                    marginLeft: 20,
                    fontFamily: 'Starnberg',
                  }}>
                  {Math.round(correctAnswersCount * 100)}
                </Text>
              </View>

              {/**life*/}
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Image
                  source={require('../assets/icons/heart.png')}
                  style={{width: 90, height: 90}}
                />
                <Text
                  style={{
                    color: '#ff6a02',
                    fontSize: 50,
                    marginTop: 10,
                    marginLeft: 20,
                    fontFamily: 'Starnberg',
                  }}>
                  X
                </Text>
                <Text
                  style={{
                    color: '#ff6a02',
                    fontSize: 50,
                    marginTop: 10,
                    marginLeft: 20,
                    fontFamily: 'Starnberg',
                  }}>
                  {lives}
                </Text>
              </View>

              {/**hints*/}
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Image
                  source={require('../assets/icons/bulb.png')}
                  style={{width: 90, height: 90}}
                />
                <Text
                  style={{
                    color: '#ff6a02',
                    fontSize: 50,
                    marginTop: 10,
                    marginLeft: 20,
                    fontFamily: 'Starnberg',
                  }}>
                  X
                </Text>
                <Text
                  style={{
                    color: '#ff6a02',
                    fontSize: 50,
                    marginTop: 10,
                    marginLeft: 20,
                    fontFamily: 'Starnberg',
                  }}>
                  {hints}
                </Text>
              </View>
            </View>
          </View>
          <View style={{height: 150}}></View>
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
      </SafeAreaView>
    </View>
  );
};

export default ProfileScreen;
