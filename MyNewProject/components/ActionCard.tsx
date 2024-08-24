import { Image, Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function OpenWebsite(websiteUrl: string) {
        Linking.openURL(websiteUrl);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.HeadingText}>Marthand</Text>
            <View
                style={[styles.card, styles.cardElevate]}
            >

                <Image style={styles.vimage} source={require("../assets/Shoes/Boot.jpg")} />
                <View style={styles.BodyContain}>
                    <Text style={styles.textcontent} numberOfLines={3}>
                        The image that i love the most
                        i can't tell you the reason behind the beauty
                        if you want to see more please let me know
                        so i can get more content like this for youhappy for you but you can't do this
                        i love what i do
                    </Text>

                </View>
                <View style={styles.centerContent}>
                    <TouchableOpacity  onPress={() => { OpenWebsite("https://taxonline.gtus.com/") }}>
                        <Text style={styles.buttonStyle}>
                            Read More
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => { OpenWebsite("https://taxonline.gtus.com/") }}>
                        <Text style={styles.buttonStyle}>
                            Follow me
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    centerContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        padding:4

    },
    container: {
        padding: 10,
        backgroundColor: '#f8f9fa',
    },
    textcontent: {
        padding: 15,
    },
    HeadingText:
    {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    buttonStyle:{
        padding:8,
        fontSize:16,
        backgroundColor:'#F4C430',
        color:'#000000',
        borderRadius:10

    },
    vimage: {
        width: '100%',
        height: undefined,
        aspectRatio: 16 / 9, // Maintain a 16:9 aspect ratio for horizontal images
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        resizeMode: 'cover',
    },
    HeadingContainer: {

    },
    BodyContain:
    {

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
})