import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Title } from '../components/ui/Title';
import { Colors } from '../constants/colors';
import { PrimaryButton } from '../components/ui/PrimaryButton';

export const GameOver = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/mountain.jpg')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone need <Text style={styles.hightlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.hightlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  rootContainer: {
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryText: {
    fontFamily: 'comic-regular',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  hightlight: {
    color: Colors.primary500,
    fontFamily: 'comic-bold',
  },
});
