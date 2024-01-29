import { Text, TextInput, View, Button, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';

export default function StartScreen(props) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [isChecked, setChecked] = useState(false);

    function resetGame() {
        props.setName('');
        props.setNumber('');
        setChecked(false);
    }

    function startGame() {
        if (isChecked) {
            props.setIsStarted(true);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Guess My Number</Text>
            <Text style={styles.name}>Name</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={name => props.setName(name)}
                value={props.name}
            />
            <Text style={styles.name}>Enter a Number</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={number => props.setNumber(number)}
                value={props.number}
            />
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#4630EB' : undefined}
            />
            <Text style={styles.label}>I am not a robot</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        title="Reset"
                        onPress={resetGame}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Confirm"
                        onPress={startGame}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 100,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    name: {
        fontSize: 20,
        marginBottom: 10,
    },
    textInput: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
    },
    button: {
        width: 100,
    },
});