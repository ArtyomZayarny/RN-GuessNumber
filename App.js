import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { StartGame } from './screens/StartGame';
import { useState } from 'react';
import { Game } from './screens/Game';
import { Colors } from './constants/colors';
import { GameOver } from './screens/GameOver';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'comic-regular': require('./assets/fonts/ComicNeue-Regular.ttf'),
    'comic-bold': require('./assets/fonts/ComicNeue-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };
  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  const startNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  let screen = <StartGame onConfirmNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <Game userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOver
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        resizeMode="cover"
        source={require('./assets/backGround.jpg')}
      >
        <SafeAreaView>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
