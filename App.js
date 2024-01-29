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
  const [attempts, setAttempts] = useState(2); // [0, 2]

  function receiveData(name, number) {
    console.log(name, number);
    setName(name);
    setNumber(number);
  }

  function generateNumberToGuess() {
    setNumberToGuess(Math.floor(Math.random() * 10) + 1020);
  }

  function startGameHandler(name, number) {
    setName(name);
    setNumber(number);
    setIsGameStarted(true);
    setNumberToGuess(Math.floor(Math.random() * 10) + 1020);
    console.log('Game started');
    console.log(name, number);
    console.log(numberToGuess);
  }

  function continueGameHandler() {
    setIsGameStarted(false);
    setIsGameOver(false);
    setNumber('');
  }

  function gameOverHandler() {
    setAttempts(2);
    setName('');
    setNumber('');
    setNumberToGuess(Math.floor(Math.random() * 10) + 1020);
    setIsWin(false);
    setIsGameOver(true);
    setIsGameStarted(false);
  }

  function restartGameHandler() {
    setIsGameStarted(false);
    setIsGameOver(false);
    setNumber('');
    setAttempts(2);
    setNumberToGuess(Math.floor(Math.random() * 10) + 1020);
  }

  if (!isGameStarted && !isGameOver) {
    return (
      <View style={styles.container}>
        <StartScreen onStartGame={startGameHandler} />
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
          receiveData={receiveData}
          onStart={startGameHandler}
          onFinish={gameOverHandler}
          onContinue={continueGameHandler}
          generateNumberToGuess={generateNumberToGuess} />
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
