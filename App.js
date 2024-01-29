import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './components/screens/startScreen';
import GameScreen from './components/screens/gameScreen';
import FinalScreen from './components/screens/finalScreen';
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

  function updateNumberToGuessHandler() {
    if (attempts === 0 || isGameOver) {
      setNumberToGuess(Math.floor(Math.random() * 10) + 1020);
    }
  }

  function startGameHandler(name, number) {
    setName(name);
    setNumber(number);
    setIsGameStarted(true);
    console.log('Game started');
  }

  function continueGameHandler() {
    setIsGameStarted(false);
    setIsGameOver(false);
    setNumber('');
    setAttempts(2);
  }

  function gameOverHandler() {
    setIsGameOver(true);
    setIsGameStarted(false);
  }

  function restartGameHandler() {
    setIsGameStarted(false);
    setIsGameOver(false);
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
        <GameScreen receiveData={receiveData} onStartGame={startGameHandler} onFinish={gameOverHandler} onContinue={continueGameHandler} />
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
