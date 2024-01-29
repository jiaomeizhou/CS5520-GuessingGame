import { Text, TextInput, View, Button, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import * as colors from './color.js';

export default function StartScreen(props) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [isChecked, setChecked] = useState(false);
    const [nameError, setNameError] = useState('');
    const [numberError, setNumberError] = useState(false);

    function setNameHandler(name) {
        if (!/^[a-zA-Z]+$/.test(name) || name.length <= 0) {
            setNameError('Please enter a valid name');
        } else {
            setNameError('');
        }
        setName(name);
    }

    function setNumberHandler(number) {
        const parsedNumber = parseInt(number);
        if (isNaN(number) || number.length <= 0 || parsedNumber < 1020 || parsedNumber > 1029) {
            setNumberError('Please enter a valid number');
        } else {
            setNumberError('');
        }
        setNumber(number);
    }

    function resetGame() {
        setName('');
        setNumber('');
        setChecked(false);
        setNameError('');
        setNumberError('');
    }

    function startGame() {
        if (isChecked && nameError === '' && numberError === '') {
            setIsStarted(true);
        }
    }

    return (
        <LinearGradient
            colors={[colors.backgroundGradientStart, colors.backgroundGradientEnd]}
            style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Guess My Number</Text>
                <View style={styles.card}>
                    <Text style={styles.text}>Name</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={setNameHandler}
                        value={props.name}
                    />
                    {nameError !== '' && <Text style={styles.errorText}>{nameError}</Text>}
                    <Text style={styles.text}>Enter a Number</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={setNumberHandler}
                        value={props.number}
                    />
                    {numberError !== '' && <Text style={styles.errorText}>{numberError}</Text>}
                    <View style={styles.checkboxContainer}>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? colors.checkboxColor : undefined}
                        />
                        <Text style={styles.label}>I am not a robot</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button color={colors.buttonResetColor}
                                title="Reset"
                                onPress={resetGame}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button color={colors.buttonConfirmColor}
                                title="Confirm"
                                onPress={startGame}
                            />
                        </View>
                    </View>
                </View>
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
    card: {
        backgroundColor: colors.cardBackground,
        borderRadius: 10,
        padding: 20,
        margin: 20,
    },
    title: {
        fontSize: 28,
        color: colors.titleColor,
        marginBottom: 20,
        alignSelf: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
        color: colors.labelColor,
    },
    errorText: {
        fontSize: 16,
        color: 'black',
        marginBottom: 10,
    },
    textInput: {
        height: 40,
        width: 200,
        color: colors.primaryPurple,
        fontWeight: 'bold',
        fontSize: 20,
        borderColor: colors.textInputBorderColor,
        marginBottom: 20,
        borderBottomWidth: 1,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
    },
    button: {
        width: 100,
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        marginEnd: 10,
    },
});