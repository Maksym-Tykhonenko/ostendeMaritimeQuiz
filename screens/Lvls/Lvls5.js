import React, {useState, useEffect} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
  Modal,
} from 'react-native';
import {Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {topick5} from '../../data/topick5';
import {history} from '../../data/history';

const windowWidth = Dimensions.get('window').width;

const getNextScreenName = routeName => {
  switch (routeName) {
    case 'Lvls1':
      return 'Lvls2';
    case 'Lvls2':
      return 'Lvls3';
    case 'Lvls3':
      return 'Lvls4';
    case 'Lvls4':
      return 'Lvls5';
    case 'Lvls5':
      return 'Lvls6';
    case 'Lvls6':
      return 'Lvls7';
    case 'Lvls7':
      return 'Lvls8';
    case 'Lvls8':
      return 'Lvls9';
    case 'Lvls9':
      return 'Lvls10';
    default:
      return 'Home';
  }
};

const Lvls5 = ({navigation, route}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  console.log('currentQuestionIndex==>', currentQuestionIndex);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [lives, setLives] = useState(3);
  const [hints, setHints] = useState(3);
  const [options, setOptions] = useState([]);
  const [usedHintsForCurrentQuestion, setUsedHintsForCurrentQuestion] =
    useState(false);
  //console.log('topickLength==>', topick5.length);
  const [noHintsModal, setNoHintsModal] = useState(false);
  const [incorrectAnswerModal, setIncorrectAnswerModal] = useState(false);
  const [gameOverModal, setGameOverModal] = useState(false);
  const [fifthCompl, setFifthCompl] = useState(false);

  useEffect(() => {
    if (currentQuestionIndex === 10) {
      setFifthCompl(true);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    getData();
    getDataLvls5();
  }, []);

  useEffect(() => {
    setData();
  }, [lives, hints]);

  useEffect(() => {
    setDataLvls5();
  }, [fifthCompl]);

  useEffect(() => {
    if (currentQuestionIndex < 10) {
      const currentQuestion = topick5[currentQuestionIndex];
      setOptions(
        Object.entries(currentQuestion.options).map(([key, value]) => ({
          key,
          value,
        })),
      );
      setUsedHintsForCurrentQuestion(false);
    }
  }, [currentQuestionIndex]);

  const setDataLvls5 = async () => {
    try {
      const data = {
        fifthCompl,
      };

      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`Lvls5`, jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };
  const getDataLvls5 = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Lvls5`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setFifthCompl(parsedData.fifthCompl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const setData = async () => {
    try {
      const data = {
        lives,
        hints,
      };

      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`correctAnswers`, jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };
  const getData = async () => {
    console.log('dddd');
    try {
      const jsonData = await AsyncStorage.getItem(`correctAnswers`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLives(parsedData.lives >= 3 ? parsedData.lives : 3);
        setHints(parsedData.hints >= 3 ? parsedData.hints : 3);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const handleAnswer = optionValue => {
    const currentQuestion = topick5[currentQuestionIndex];
    if (optionValue === currentQuestion.answer) {
      setIsCorrect(true);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsCorrect(null);
      setUserAnswer('');
    } else {
      setIsCorrect(false);
      setLives(prevLives => prevLives - 1);
      if (lives - 1 <= 0) {
        setGameOverModal(true);
      } else {
        setIncorrectAnswerModal(true);
      }
      setUserAnswer('');
      setIsCorrect(null);
    }
  };

  const handleHintPress = () => {
    if (hints > 0 && !usedHintsForCurrentQuestion) {
      const currentQuestion = topick5[currentQuestionIndex];
      const incorrectOptions = Object.entries(currentQuestion.options).filter(
        ([key, value]) => value !== currentQuestion.answer,
      );

      if (incorrectOptions.length > 0) {
        const [optionToRemove] = incorrectOptions;

        setOptions(prevOptions =>
          prevOptions.filter(option => option.value !== optionToRemove[1]),
        );

        setHints(hints - 1);
        setUsedHintsForCurrentQuestion(true);
      } else {
        Alert.alert(
          'Не залишилося неправильних відповідей',
          'Не залишилося неправильних відповідей',
        );
      }
    } else {
      setNoHintsModal(true);
      // Alert.alert('No hints', 'You have used all your hints');
    }
  };

  const currentQuestion = topick5[currentQuestionIndex];

  return (
    <View
      style={{
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#29516b',
        paddingTop: 50,
      }}>
      {currentQuestionIndex >= topick5.length ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#29516b',
            //paddingTop: 20,
            paddingHorizontal: 10,
          }}>
          <ScrollView>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  color: '#ff6a02',
                  textAlign: 'center',
                  fontFamily: 'Starnberg',
                }}>
                Congratulations!
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: '#ff6a02',
                  textAlign: 'center',
                  fontFamily: 'Starnberg',
                }}>
                You have completed this level. Keep an interesting story on the
                topic of this level
              </Text>
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#ff6a02',
                  textAlign: 'center',
                  fontFamily: 'Starnberg',
                }}>
                {history[4]}
              </Text>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(getNextScreenName(route.name))
                }
                style={{
                  width: 200,
                  marginTop: 20,
                  borderWidth: 2,
                  //borderRadius: 15,
                  borderColor: '#ff6a02',
                  padding: 5,
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: '#ff6a02',
                    textAlign: 'center',
                    fontFamily: 'Starnberg',
                  }}>
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      ) : (
        <View style={{paddingHorizontal: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: windowWidth,
              marginBottom: 20,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/icons/heart.png')}
                style={{width: 60, height: 60}}
              />
              <Text
                style={{
                  color: '#ff6a02',
                  fontSize: 40,
                  marginTop: 10,
                  marginLeft: 5,
                  fontFamily: 'Starnberg',
                }}>
                {' '}
                {lives}
              </Text>
            </View>
            <TouchableOpacity
              disabled={usedHintsForCurrentQuestion ? true : false}
              onPress={handleHintPress}
              style={{
                borderWidth: 3,
                borderColor: usedHintsForCurrentQuestion ? 'grey' : '#ff6a02',
                borderRadius: 15,
                paddingRight: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../../assets/icons/bulb.png')}
                  style={{width: 60, height: 60}}
                />
                <Text
                  style={{
                    color: usedHintsForCurrentQuestion ? 'grey' : '#ff6a02',
                    fontSize: 30,
                    marginTop: 10,
                    marginLeft: 5,
                    fontFamily: 'Starnberg',
                  }}>
                  Hints: {hints}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/**Content */}
          <ScrollView>
            <Image
              source={require('../../assets/Stage2/T5.png')}
              style={{width: windowWidth, height: 245}}
            />

            <Text
              style={{
                fontSize: 40,
                fontWeight: 'bold',
                color: '#ff6a02',
                textAlign: 'center',
                fontFamily: 'Starnberg',
              }}>
              {currentQuestion.question}
            </Text>

            <View style={{marginTop: 20, alignItems: 'center'}}>
              {options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleAnswer(option.value)}
                  style={{
                    marginTop: 20,
                    borderWidth: 2,
                    borderColor: '#ff6a02',
                    padding: 5,
                    width: windowWidth * 0.9,
                  }}>
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: 'bold',
                      color: '#ff6a02',
                      textAlign: 'center',
                      fontFamily: 'Starnberg',
                    }}>
                    - {option.value}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={{height: 150}}></View>
          </ScrollView>

          {/**incorrectAnswerModal */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={incorrectAnswerModal}>
            <View
              style={{
                backgroundColor: '#29516b',
                flex: 1,
                marginVertical: '50%',
                marginHorizontal: '5%',
                borderRadius: 10,
                borderWidth: 3,
                borderColor: '#ff6a02',
              }}>
              <View
                style={{
                  flex: 0.8,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#ff6a02',
                    fontSize: 40,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: 20,
                    fontFamily: 'Starnberg',
                  }}>
                  Wrong answer
                </Text>
                <Text
                  style={{
                    color: '#ff6a02',
                    fontSize: 30,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontFamily: 'Starnberg',
                  }}>
                  Try again.
                </Text>
                <Text
                  style={{
                    color: '#ff6a02',
                    fontSize: 30,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontFamily: 'Starnberg',
                  }}>
                  You have
                </Text>
                <Text
                  style={{
                    color: '#ff6a02',
                    fontSize: 30,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontFamily: 'Starnberg',
                  }}>
                  {lives} lives left
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    setIncorrectAnswerModal(false);
                  }}
                  style={{
                    marginTop: 40,
                    width: 140,
                    height: 50,
                    borderWidth: 3,
                    borderRadius: 50,
                    borderColor: '#ff6a02',
                    backgroundColor: '#ff6a02',
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: '#ff6a02',
                    shadowOffset: {width: 30, height: 10},
                    shadowRadius: 15,
                    shadowOpacity: 0.2,
                    elevation: 5,
                  }}>
                  <Text
                    style={{
                      color: '#29516b',
                      fontSize: 20,
                      fontWeight: 'bold',
                      shadowColor: '#29516b',
                      shadowOffset: {width: 30, height: 10},
                      shadowRadius: 15,
                      shadowOpacity: 0.2,
                      elevation: 5,
                      fontFamily: 'Starnberg',
                    }}>
                    Ok
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/**gameOverModal */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={gameOverModal}>
            <View
              style={{
                backgroundColor: '#29516b',
                flex: 1,
                marginVertical: '50%',
                marginHorizontal: '5%',
                borderRadius: 10,
                borderWidth: 3,
                borderColor: '#ff6a02',
              }}>
              <View
                style={{
                  flex: 0.8,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#ff6a02',
                    fontSize: 40,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: 20,
                    fontFamily: 'Starnberg',
                  }}>
                  Game Over
                </Text>
                <Text
                  style={{
                    color: '#ff6a02',
                    fontSize: 30,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontFamily: 'Starnberg',
                  }}>
                  You have no lives left!
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('StartScreen');
                  }}
                  style={{
                    marginTop: 40,
                    width: 140,
                    height: 50,
                    borderWidth: 3,
                    borderRadius: 50,
                    borderColor: '#ff6a02',
                    backgroundColor: '#ff6a02',
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: '#ff6a02',
                    shadowOffset: {width: 30, height: 10},
                    shadowRadius: 15,
                    shadowOpacity: 0.2,
                    elevation: 5,
                  }}>
                  <Text
                    style={{
                      color: '#29516b',
                      fontSize: 20,
                      fontWeight: 'bold',
                      shadowColor: '#29516b',
                      shadowOffset: {width: 30, height: 10},
                      shadowRadius: 15,
                      shadowOpacity: 0.2,
                      elevation: 5,
                      fontFamily: 'Starnberg',
                    }}>
                    Ok
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/**noHintsModal */}
          <Modal animationType="fade" transparent={true} visible={noHintsModal}>
            <View
              style={{
                backgroundColor: '#29516b',
                flex: 1,
                marginVertical: '50%',
                marginHorizontal: '5%',
                borderRadius: 10,
                borderWidth: 3,
                borderColor: '#ff6a02',
              }}>
              <View
                style={{
                  flex: 0.8,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#ff6a02',
                    fontSize: 40,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: 20,
                    fontFamily: 'Starnberg',
                  }}>
                  No hints
                </Text>
                <Text
                  style={{
                    color: '#ff6a02',
                    fontSize: 30,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontFamily: 'Starnberg',
                  }}>
                  You have used all your hints
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    setNoHintsModal(false);
                  }}
                  style={{
                    marginTop: 40,
                    width: 140,
                    height: 50,
                    borderWidth: 3,
                    borderRadius: 50,
                    borderColor: '#ff6a02',
                    backgroundColor: '#ff6a02',
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: '#ff6a02',
                    shadowOffset: {width: 30, height: 10},
                    shadowRadius: 15,
                    shadowOpacity: 0.2,
                    elevation: 5,
                  }}>
                  <Text
                    style={{
                      color: '#29516b',
                      fontSize: 20,
                      fontWeight: 'bold',
                      shadowColor: '#29516b',
                      shadowOffset: {width: 30, height: 10},
                      shadowRadius: 15,
                      shadowOpacity: 0.2,
                      elevation: 5,
                      fontFamily: 'Starnberg',
                    }}>
                    Ok
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      )}

      {/**Btn BAck */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('StartScreen');
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

export default Lvls5;
