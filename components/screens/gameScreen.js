import React, { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';
import * as colors from './color.js';

export default function GameScreen({ name, number, onContinue, onFinish }) {
    const [userNumber, setUserNumber] = useState('');
    const [attempts, setAttempts] = useState(2);
    const [feedback, setFeedback] = useState('');

    const handleGame = () => {
        // Generate a random number between 1020 and 1029
        const numberToGuess = Math.floor(Math.random() * 10) + 1020;
        if (userNumber === numberToGuess.toString()) {
            setFeedback('Congrats! ' + {name} + 'You won!');
        } else {
            const hint = userNumber < numberToGuess ? 'Guess higher!' : 'Guess lower!';
            setFeedback('Hello' + {name} + '\nYou have chosen ' + {number} + `That's not my number! ${hint} ${attempts > 0 ? `You have ${attempts} attempts left.` : ''}`);
            setAttempts(attempts - 1);
        }
    };

    const handleContinue = () => {
        setUserNumber('');
        setFeedback('');
        setAttempts(2);
        onContinue();
    };

    const handleFinish = () => {
        setUserNumber('');
        setFeedback('');
        setAttempts(2);
        onFinish();
    }

    return (
        <Modal visible={true} >
            <View style={styles.container}>
                <Text style={styles.title}>Game Screen</Text>
                <View style={styles.card}>
                    <Text handleGame></Text>
                    <Button title="I am done" onPress={handleFinish} />
                </View>
                {attempts > 0 ? (
                    <Button title="Continue" onPress={handleContinue} />
                ) : (
                    <Button title="Finish" onPress={onFinish} />
                )}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#D3D3D3',
        borderRadius: 10,
        padding: 20,
        margin: 20,
        alignItems: 'center',
    },
    textInput: {
        height: 40,
        width: 200,
        borderColor: 'purple',
        marginBottom: 20,
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        alignSelf: 'center',
    },
});



