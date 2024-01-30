import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './screens/startScreen';
import GameScreen from './screens/gameScreen';
import FinalScreen from './screens/finalScreen';
import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [numberToGuess, setNumberToGuess] = useState(Math.floor(Math.random() * 10) + 1020); // [1020, 1029]
  const [isWin, setIsWin] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState(2);


  console.log('initial attempts:' + attemptsLeft)

  function startGameHandler(name, number, attempts) {
    setName(name);
    setNumber(number);
    setIsGameStarted(true);
    setNumberToGuess(Math.floor(Math.random() * 10) + 1020);
    setAttemptsLeft(attemptsLeft);
    console.log('Game started');
    console.log('name+number:' + name, number);
    console.log('attemptsLeft:' + attemptsLeft);
  }

  function continueGameHandler(name, number, numberToGuess, attemptsLeft) {
    setName(name);
    setNumber(number);
    setNumberToGuess(numberToGuess);
    setIsGameStarted(false);
    setIsGameOver(false);
    setAttemptsLeft(attemptsLeft - 1);
    console.log('Game continued');
  }

  function gameOverHandler() {
    setAttemptsLeft(2);
    setName('');
    setNumber('');
    setNumberToGuess(Math.floor(Math.random() * 10) + 1020);
    setIsWin(false);
    setIsGameOver(true);
    setIsGameStarted(false);
    console.log('Game over');
  }

  function restartGameHandler() {
    setIsGameStarted(false);
    setIsGameOver(false);
    setNumber('');
    setAttemptsLeft(3);
    setNumberToGuess(Math.floor(Math.random() * 10) + 1020);
    console.log('Game restarted');
  }


  if (!isGameStarted && !isGameOver) {
    return (
      <View style={styles.container}>
        <StartScreen onStart={startGameHandler} />
        <StatusBar style="auto" />
      </View>
    );
  }

  if (isGameStarted && !isGameOver) {
    return (
      <View style={styles.container}>
        <GameScreen
          name={name}
          number={number}
          numberToGuess={numberToGuess}
          attemptsLeft={attemptsLeft}
          onContinue={continueGameHandler}
          onFinish={gameOverHandler} />
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FinalScreen onRestart={restartGameHandler} />
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
