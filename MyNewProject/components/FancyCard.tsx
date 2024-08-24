import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Rakhi Picks</Text>

            <View style={[styles.card, styles.cardElevate]}>
                <Image style={styles.himage} source={require('../assets/Shoes/Boot.jpg')} />
                <View style={styles.textContainer}>
                    <Text style={styles.cardTitle}>Standing Swag</Text>
                    <Text style={styles.cardDescription}>A perfect representation of confidence and style.</Text>
                    <Text style={styles.cardDate}>August 20, 2024</Text>
                </View>
            </View>

            <View style={[styles.card, styles.cardElevate]}>
                <Image style={styles.vimage} source={require('../assets/Shoes/Boot.jpg')} />
                <View style={styles.textContainer}>
                    <Text style={styles.cardTitle}>Sister's Swag</Text>
                    <Text style={styles.cardDescription}>Celebrating the bond of love with style.</Text>
                    <Text style={styles.cardDate}>August 20, 2024</Text>
                </View>
            </View>

            <View style={[styles.card, styles.cardElevate]}>
                <Image style={styles.himage} fadeDuration={2000} source={require('../assets/Shoes/Boot.jpg')} />
                <View style={styles.textContainer}>
                    <Text style={styles.cardTitle}>Gift Galore</Text>
                    <Text style={styles.cardDescription}>Special gifts to make your day unforgettable.</Text>
                    <Text style={styles.cardDate}>August 20, 2024</Text>
                </View>
            </View>

            <View style={[styles.card, styles.cardElevate]}>
                <Image style={styles.himage} source={require('../assets/Shoes/Boot.jpg')} />
                <View style={styles.textContainer}>
                    <Text style={styles.cardTitle}>Office Vibes</Text>
                    <Text style={styles.cardDescription}>Balancing work and life with flair.</Text>
                    <Text style={styles.cardDate}>August 20, 2024</Text>
                </View>
            </View>

            <View style={[styles.card, styles.cardElevate]}>
                <Image style={styles.himage} source={require('../assets/Shoes/Boot.jpg')} />
                <View style={styles.textContainer}>
                    <Text style={styles.cardTitle}>Brother's Blessing</Text>
                    <Text style={styles.cardDescription}>Cherishing the love and blessings of a brother.</Text>
                    <Text style={styles.cardDate}>August 20, 2024</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f8f9fa',
    },
    headingText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: '#333',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        marginVertical: 10,
        overflow: 'hidden',
        elevation: 5,
    },
    cardElevate: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    himage: {
        width: '100%',
        height: undefined,
        aspectRatio: 9 / 16, // Maintain a 9:16 aspect ratio for vertical images
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        resizeMode: 'cover',
        
    },
    vimage: {
        width: '100%', 
        height: undefined,
        aspectRatio: 16 / 9, // Maintain a 16:9 aspect ratio for horizontal images
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        resizeMode: 'cover',
    },
    textContainer: {
        padding: 15,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    cardDescription: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    cardDate: {
        fontSize: 14,
        color: '#999',
    },
});
