import React, { useState, useEffect} from 'react';
import { View, Text, Modal, Button, StyleSheet, Image} from 'react-native';

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
        <Modal visible={true}>
            <View style={styles.container}>
                <Text style={styles.title}>Game is over</Text>
                <View style={styles.card}>
                    <Text>Here's your picture</Text>
                    {isWin ? (
                        <Image style={styles.image} source={{ uri: getImageUrl() }} />
                    ) : (
                        <Image style={styles.sadFace} source={getImageUrl()} />
                    )}
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
    sadFace: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
});