import React, { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';

export default function FinalScreen({ isWin, onRestart }) {

    const handleRestart = () => {
        onRestart();
    };

    return (
        <Modal visible={true} >
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text >Here's your picture </Text>
                    <Text style={styles.title}>{isWin ? 'You won!' : 'You lost!'}</Text>
                    <Button title="Start Again" onPress={handleRestart} />
                </View>
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
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'purple',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#a6a6a6',
        padding: 20,
        borderRadius: 10,
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});