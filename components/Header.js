import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as colors from './color.js';

export default function Header({ gameStarted }) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{gameStarted ? 'Guess My Number' : 'Game is Over'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        color: colors.primary,
        padding: 10,
        width: '100%',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 28,
        color: colors.titleColor,
        marginBottom: 20,
    },
});