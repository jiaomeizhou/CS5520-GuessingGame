import React, { useState, useEffect } from 'react';
import { View, Text, Modal, Button, StyleSheet, Image } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import * as colors from '../components/color.js';
import { LinearGradient } from 'expo-linear-gradient';

export default function FinalScreen({ number, numberToGuess, onRestart }) {
    const [isWin, setIsWin] = useState(false);

    useEffect(() => {
        setGameWin();
    }, []);

    function setGameWin() {
        if (number === numberToGuess.toString()) {
            setIsWin(true);
        }
    }

    console.log(number, numberToGuess, isWin);
    const handleRestart = () => {
        onRestart();
    };

    const correctNumber = parseInt(numberToGuess);

    const getImageUrl = () => {

        if (isWin) {
            // Construct URL based on the chosen number
            return `https://picsum.photos/id/${correctNumber}/100/100`;
        } else {
            return require('../assets/sad.jpeg');
        }
    };


    return (
        <LinearGradient
            colors={[colors.backgroundGradientStart, colors.backgroundGradientEnd]}
            style={styles.background}>
            <View style={styles.container}>
                <Header gameStarted={false} />
                {/* <Text style={styles.title}>Guess My Number</Text> */}
                <Card>
                    <Text style={styles.title}>Here's your picture</Text>
                    {isWin ? (
                        <Image style={styles.image} source={{ uri: getImageUrl() }} />
                    ) : (
                        <Image style={styles.sadFace} source={getImageUrl()} />
                    )}
                    {/* <Text style={styles.title}>{isWin ? 'You won!' : 'You lost!'}</Text> */}
                    <Button title="Start Again" onPress={handleRestart} />
                </Card>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
    },
    background: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        color: colors.primaryPurple,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'purple',
        marginBottom: 20,
        alignSelf: 'center',
    },
    sadFace: {
        width: 100,
        height: 100,
        marginBottom: 20,
        alignSelf: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
        alignSelf: 'center',
    },
    title: {
        fontSize: 28,
        color: colors.titleColor,
        marginBottom: 20,
        alignSelf: 'center',
    },
});