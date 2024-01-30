import React from 'react';
import { View, StyleSheet, Platform} from 'react-native';
import * as colors from './color.js';

export default function Card({ children }) {
    const cardStyles = Platform.OS === "ios" ? styles.cardIOS : styles.cardAndroid;
    return (
        <View style={cardStyles}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    cardIOS: {
        backgroundColor: colors.cardBackground,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 20,
        margin: 20,
        width: '70%',
        shadowColor: colors.shadowColor,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardAndroid: {
        backgroundColor: colors.cardBackground,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 20,
        margin: 20,
        width: '70%',
        height: '50%',
        elevation: 5,
    },
});
