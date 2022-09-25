import { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NumberContainer } from '../components/game/NumberContainer';
import { Card } from '../components/ui/Card';
import { InstructText } from '../components/ui/InstructText';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { Title } from '../components/ui/Title';
import { generateRandomBetween } from '../components/utils';
import { Ionicons } from '@expo/vector-icons';
import { GuessLogItem } from '../components/game/GuessLogItem';

let minBoundary = 1;
let maxBoundary = 100;

export const Game = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuesHandler = (direction) => {
    // direction => 'lower' | 'greater'
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  };
  const guessRoundsListLength = guessRounds.length;
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructText style={styles.instructText}>
          Higher or lower ?
        </InstructText>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuesHandler.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuesHandler.bind(this, 'greater')}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          keyExtractor={(item) => item}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  instructText: {
    marginBottom: 12,
  },
  screen: {
    padding: 30,
    height: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    width: '50%',
    paddingHorizontal: 10,
  },
  listContainer: {
    padding: 16,
    flex: 1,
  },
});
