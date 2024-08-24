import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ShoesCard() {
    const ShoesList = [
        {
            uid: 1,
            Type: "Boot",
            Color: "Brown",
            imageURL: require("../assets/Shoes/Boot.jpg"),
            Maker: "CAT",
            imagetype: "v"
        },
        {
            uid: 2,
            Type: "Casuals",
            Color: "Red",
            imageURL: require("../assets/Shoes/Casuals.jpg"),
            Maker: "Nike",
            imagetype: "v"
        },
        {
            uid: 3,
            Type: "Loafers",
            Color: "White",
            imageURL: require("../assets/Shoes/loafers.jpg"),
            Maker: "Gucci",
            imagetype: "h"
        },
        {
            uid: 4,
            Type: "Sneaker",
            Color: "White",
            imageURL: require("../assets/Shoes/Sneaker.jpg"),
            Maker: "Puma",
            imagetype: "h"
        },
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Best Shoes</Text>
            <ScrollView
                style={styles.ScrollContainer}
                scrollEnabled={false}
            >
                {
                    ShoesList.map(({ uid, Type, Color, imageURL, Maker, imagetype }) => (
                        <View key={uid} style={styles.userCard}>
                            <Image
                                source={imageURL}
                                // style={[imagetype == 'h' ? styles.himage : styles.vimage]}
                                style={styles.image}
                            />
                            <View >
                                <Text style={styles.makerstyle}>
                                    {Maker}
                                </Text>
                                <Text style={styles.otherstyle}>
                                    {Type}
                                </Text>
                                <Text style={styles.otherstyle}>
                                    {Color}
                                </Text>
                            </View>
                            {/* <View style={styles.rowContainer}>
                                <Text style={styles.MakerStyle}>
                                    {Maker}
                                </Text>
                                <Text style={styles.CenterStyle}>
                                    {Color}
                                </Text>
                                <Text style={styles.TypeStyle}>
                                    {Type}
                                </Text>
                            </View> */}
                            <Text>

                            </Text>
                        </View>

                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    makerstyle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    otherstyle: {
        fontSize: 12,
        color: '#FFF'
    },


    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        backgroundColor: '#75DA8B',
        borderRadius:10,
        padding:8
    },
    container: {
        padding: 10,
        backgroundColor: '#f8f9fa',

    },
    headingText: {
        fontSize: 20,
        fontWeight: "600",
        margin: 10
    },
    ScrollContainer:
    {

    },
    // rowContainer: {
    //     flexDirection: 'row',    // Align items in a row
    //     alignItems: 'center',    // Vertically align text
    //     justifyContent: 'space-between', // Distribute space evenly
    // },
    // MakerStyle: {
    //     fontSize: 20,
    //     flex: 1,                  // Take up equal space
    //     textAlign: 'left',        // Align text to the left
    // },
    // TypeStyle: {
    //     fontSize: 10,
    //     flex: 1,                  // Take up equal space
    //     textAlign: 'right',       // Align text to the right
    // },
    // CenterStyle: {
    //     fontSize: 15,
    //     flex: 1,
    //     textAlign: 'center',
    // },
    image: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14

    }
    // himage: {
    //     width: '100%',
    //     height: undefined,
    //     aspectRatio: 9 / 16, // Maintain a 9:16 aspect ratio for vertical images
    //     borderTopLeftRadius: 15,
    //     borderTopRightRadius: 15,
    //     resizeMode: 'cover',

    // },
    // vimage: {
    //     width: '100%',
    //     height: undefined,
    //     aspectRatio: 16 / 9, // Maintain a 16:9 aspect ratio for horizontal images
    //     borderTopLeftRadius: 15,
    //     borderTopRightRadius: 15,
    //     resizeMode: 'cover',
    // },
})