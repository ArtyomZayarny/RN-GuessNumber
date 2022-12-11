import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import React, { useState } from 'react';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { Colors } from '../constants/colors';
import { Title } from '../components/ui/Title';
import { Card } from '../components/ui/Card';
import { InstructText } from '../components/ui/InstructText';

export const StartGame = ({ onConfirmNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const { width, height } = useWindowDimensions();

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      // show alert
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }

    onConfirmNumber(choosenNumber);
  };

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
      <Title>Guess my number</Title>
      <Card>
        <InstructText>Enter a number</InstructText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '50%',
  },
  rootContainer: {
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
  },
});
