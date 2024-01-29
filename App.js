import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './components/screens/startScreen';
import GameScreen from './components/screens/gameScreen';
import FinalScreen from './components/screens/finalScreen';
import React, { useState } from 'react';

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  if (!isGameStarted && !isGameOver) {
    return (
      <View style={styles.container}>
        <StartScreen />
        <StatusBar style="auto" />
      </View>
    ); 
  }

  if (isGameStarted && !isGameOver) {
    return (
      <View style={styles.container}>
        <GameScreen />
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FinalScreen />
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
