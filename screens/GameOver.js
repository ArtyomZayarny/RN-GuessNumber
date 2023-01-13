import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import { Title } from '../components/ui/Title';
import { Colors } from '../constants/colors';
import { PrimaryButton } from '../components/ui/PrimaryButton';

export const GameOver = ({ roundsNumber, userNumber, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 480) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Title>GAME OVER</Title>
        <View style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
  );
};
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  imageContainer: {
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
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
    marginTop: 20,
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
