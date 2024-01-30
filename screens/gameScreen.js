import React, { useState, useEffect } from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';
import * as colors from '../components/color.js';
import Card from '../components/Card';

export default function GameScreen({ name, number, numberToGuess, attemptsLeft, modalVisible, onContinue, onFinish, }) {
    const [feedback, setFeedback] = useState('');
    const [isWin, setIsWin] = useState(false);

    useEffect(() => {
        if (numberToGuess !== undefined) {
            guessHandler(attemptsLeft - 1);
        }
    }, [numberToGuess]);

    function isGameWin() {
        if (number === numberToGuess.toString()) {
            setIsWin(true);
        }
    }

    console.log("attempt left111:" + attemptsLeft);

    function guessHandler(attemptsLeft) {
        if (number === numberToGuess.toString()) {
            setIsWin(true);
            setFeedback(`Congrats! ${name}! You won!\n`);
        } else {
            console.log("correct number:" + numberToGuess);
            const hint = number < numberToGuess ? 'Guess higher!' : 'Guess lower!';
            setFeedback(`Hello ${name}\n You have chosen ${number}\n That's not my number!\n ${hint}\n ${attemptsLeft > 0 ? `You have ${attemptsLeft} attempts left!` : `You have no attempts left!`}`);
        }
    };

    console.log("new attempts:" + attemptsLeft + name + number + numberToGuess);

    function continueGameHandler() {
        onContinue(name, number, numberToGuess, attemptsLeft);
    }

    function onFinishCallback(isWin) {
        onFinish(isWin); // Pass the result to App.js
    }

    return (
        <Modal visible={modalVisible}>
            <View style={styles.container}>
                <Card>
                    <View >
                        <Text style={styles.text}>{feedback}</Text>
                        {isWin ? (
                            <Button title="Thank you!" onPress={onFinish} />
                        ) : (
                            <>
                                <Button title="I am done" onPress={onFinish} />
                                <Button title="Let me guess again" onPress={continueGameHandler} disabled={attemptsLeft <= 1} />
                            </>
                        )}
                    </View>
                </Card>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C5B4E3',
        alignItems: 'center',
        justifyContent: 'center',
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
    text: {
        fontSize: 20,
        marginBottom: 10,
        color: colors.labelColor,
        alignSelf: 'center',
        textAlign: 'center',
    },
    card: {
        backgroundColor: colors.cardBackground,
        borderRadius: 10,
        padding: 20,
        margin: 20,
    },
});



