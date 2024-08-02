import React, {useEffect, useRef, useState} from 'react';
import {Text, View, Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import HomeScreen from './screens/HomeScreen';
import StartScreen from './screens/StartScreen';
import StageF from './screens/StageF';
import ResultScreen from './screens/ResultScreen';
import Lvls1 from './screens/Lvls/Lvl1';
import StageS from './screens/StageS';
import Lvls2 from './screens/Lvls/Lvls2';
import Lvls3 from './screens/Lvls/Lvls3';
import Lvls4 from './screens/Lvls/Lvls4';
import Lvls5 from './screens/Lvls/Lvls5';
import Lvls6 from './screens/Lvls/Lvls6';
import Lvls7 from './screens/Lvls/Lvls7';
import Lvls8 from './screens/Lvls/Lvls8';
import Lvls9 from './screens/Lvls/Lvls9';
import Lvls10 from './screens/Lvls/Lvls10';
import ProfileScreen from './screens/ProfileScreen';
import AbouteScreem from './screens/AboutScreen';
import RulesScreen from './screens/RulesScreen';

const App = () => {
  //////////// LOADER
  const [louderIsEnded, setLouderIsEnded] = useState(false);

  const appearingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLouderIsEnded(true);
    }, 5000);
  }, []);
  return (
    <NavigationContainer>
      {!louderIsEnded ? (
        <View
          style={{
            flex: 1,
            backgroundColor: '#29516b',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Animated.Text
            style={{
              opacity: appearingAnim,
              color: '#ff6a02',
              fontSize: 80,
              textAlign: 'center',
              fontFamily: 'Starnberg',
            }}>
            Oostende Maritime Quiz
          </Animated.Text>
        </View>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="StartScreen"
            component={StartScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="StageF"
            component={StageF}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ResultScreen"
            component={ResultScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="StageS"
            component={StageS}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lvls1"
            component={Lvls1}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lvls2"
            component={Lvls2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lvls3"
            component={Lvls3}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lvls4"
            component={Lvls4}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lvls5"
            component={Lvls5}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lvls6"
            component={Lvls6}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lvls7"
            component={Lvls7}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lvls8"
            component={Lvls8}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lvls9"
            component={Lvls9}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lvls10"
            component={Lvls10}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AbouteScreem"
            component={AbouteScreem}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RulesScreen"
            component={RulesScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
