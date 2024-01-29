import React, { useState, useEffect} from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';
import * as colors from '../components/color.js';

export default function GameScreen({ name, number, numberToGuess, onContinue, onFinish}) {
    const [attempts, setAttempts] = useState(2);
    const [feedback, setFeedback] = useState('');
    
    useEffect(() => {
        if (numberToGuess !== undefined) {
            guessHandler();
        }
    }, [numberToGuess]);

    function guessHandler() {
        if (number === numberToGuess.toString()) {
            setFeedback(`Congrats! ${name} You won!\n`);
        } else {
            console.log("correct number:" + numberToGuess);
            const hint = number < numberToGuess ? 'Guess higher!' : 'Guess lower!';
            setFeedback(`Hello ${name}\nYou have chosen ${number} That's not my number! ${hint} ${attempts > 0 ? `You have ${attempts} attempts left.` : ''}`);
            setAttempts(attempts - 1);
        }
    };

    function continueGameHandler(name, number, numberToGuess) {
        onContinue(name, number, numberToGuess);
    }


    return (
        <Modal visible={true}>
            <View style={styles.container}>
                <View style={styles.card} >
                    <Text>{feedback}</Text>
                    <Button title="I am done" onPress={onFinish} />
                    {attempts > 0 && <Button title="Let me guess again" onPress={continueGameHandler} />}
                    {!attempts && <Button title="Thank you!" onPress={onFinish} />}
                </View>
            </View>
        </Modal>
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
        fontSize: 24,
        marginBottom: 20,
        color: colors.titleColor,
    },
    card: {
        backgroundColor: colors.cardBackground,
        borderRadius: 10,
        padding: 20,
        margin: 20,
    },
});



