import React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';

const RulesScreen = ({navigation}) => {
  return (
    <View
      style={{
        position: 'relative',
        flex: 1,
        backgroundColor: '#29516b',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 50, marginHorizontal: 10}}>
          <Text
            style={{
              fontFamily: 'Starnberg',
              fontSize: 30,
              color: '#ff6a02',
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            General Rules:
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#ff6a02',
              marginBottom: 10,
              fontFamily: 'Starnberg',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 30,
              }}>
              Goal of the game:
            </Text>
            {'  '}Correctly answer questions about Oostende's maritime history,
            earning gold cups.
          </Text>

          <Text
            style={{
              fontSize: 25,
              color: '#ff6a02',
              marginBottom: 10,
              fontFamily: 'Starnberg',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 30,
              }}>
              Game stages:
            </Text>
            {'  '}The game consists of two stages: Stage 1 and Stage 2.
          </Text>

          <Text
            style={{
              fontFamily: 'Starnberg',
              fontSize: 30,
              color: '#ff6a02',
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Stage 1:
          </Text>

          <Text
            style={{
              fontSize: 25,
              color: '#ff6a02',
              marginBottom: 10,
              fontFamily: 'Starnberg',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 30,
              }}>
              Task:
            </Text>
            {'  '}Match the picture with the corresponding name from the three
            answer options.
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#ff6a02',
              marginBottom: 10,
              fontFamily: 'Starnberg',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 30,
              }}>
              Questions:
            </Text>
            {'  '}24 questions about sights related to Oostende's maritime
            history.
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#ff6a02',
              marginBottom: 10,
              fontFamily: 'Starnberg',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 30,
              }}>
              Time:
            </Text>
            {'  '}You have 2 minutes to complete the entire level.
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#ff6a02',
              marginBottom: 0,
              fontFamily: 'Starnberg',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 30,
              }}>
              Life:
            </Text>
            {'  '}The player has 3 lives. For each incorrect answer, 1 life is
            deducted, but the player can continue to answer the same question.
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#ff6a02',
              marginBottom: 10,
              fontFamily: 'Starnberg',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 30,
              }}>
              Hints:
            </Text>
            {'  '}The player has 3 hints. Each prompt eliminates one incorrect
            answer.
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#ff6a02',
              marginBottom: 10,
              fontFamily: 'Starnberg',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Rewards:
            </Text>
            {'  '}For each correct answer, the player receives 100 gold cups.
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#ff6a02',
              marginBottom: 10,
              fontFamily: 'Starnberg',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Results:
            </Text>
            {'  '}Cups are counted even if the player has used up all lives and
            hints and not completed the level. Cups are displayed in the Profile
            and Shop menus.
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#ff6a02',
              marginBottom: 10,
              fontFamily: 'Starnberg',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Purchases:
            </Text>
            {'  '}After completing a level, the player can purchase additional
            lives and hints in the Shop menu.
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#ff6a02',
              marginBottom: 10,
              fontFamily: 'Starnberg',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Complete walkthrough:
            </Text>
            {'  '}If the player answers all 24 questions correctly, the number
            of cups is doubled and an article about Oostende's maritime history
            is opened.
          </Text>

          <Text
            style={{
              fontFamily: 'Starnberg',
              fontSize: 25,
              color: '#ff6a02',
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Stage 2:
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#ff6a02',
              marginBottom: 10,
              fontFamily: 'Starnberg',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Availability:
            </Text>
            {'  '}Only available after completing Stage 1.
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#ff6a02',
              marginBottom: 10,
              fontFamily: 'Starnberg',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Topics:
            </Text>
            {'  '}10 topics of 10 questions about the maritime history of
            Oostende with three possible answers.
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#ff6a02',
              marginBottom: 10,
              fontFamily: 'Starnberg',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Progress:
            </Text>
            {'  '}Initially, only one topic is open. A new topic is opened only
            after completing an open topic.
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#ff6a02',
              marginBottom: 10,
              fontFamily: 'Starnberg',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Life:
            </Text>
            {'  '}On each topic, the player has a minimum of 3 lives.
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#ff6a02',
              marginBottom: 10,
              fontFamily: 'Starnberg',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Hints:
            </Text>
            {'  '}The player has a minimum of 3 hints for each topic, with the
            option to buy additional ones.
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#ff6a02',
              marginBottom: 10,
              fontFamily: 'Starnberg',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Purchases:
            </Text>
            {'  '}Extra lives and hints can be purchased in the Shop menu with
            cups earned in Stage 1.
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#ff6a02',
              marginBottom: 10,
              fontFamily: 'Starnberg',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Rewards:
            </Text>
            {'  '}After completing each level, the player can read an
            interesting fact or story about the level.
          </Text>

          <Text
            style={{
              fontFamily: 'Starnberg',
              fontSize: 25,
              color: '#ff6a02',
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            These rules will help you enjoy the game and reach new heights in
            learning the maritime history of Oostende!
          </Text>
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
    </View>
  );
};

export default RulesScreen;
