import React, { useState } from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
    useColorScheme,
    StyleSheet,
    Button,
    ScrollView
} from "react-native";
import Flatcard from "./components/Flatcard";
import Elevatedcard from "./components/Elevatedcard";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";
import ShoesCard from "./components/ShoesCard";

function AppPro(): JSX.Element {
    const systemTheme = useColorScheme(); // Gets the system's color scheme
    const [theme, setTheme] = useState(systemTheme);

    const lightStyles = {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff',
        },
        text: {
            color: '#000000',
        },
    };

    const darkStyles = {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000000',
        },
        text: {
            color: '#ffffff',
        },
    };
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const styles = theme === 'dark' ? darkStyles : lightStyles;
    const isDarkColorMode = useColorScheme();
    const styletoapply = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            display: "flex",
            flex: 1,
            //    backgroundColor: isDarkColorMode ? '#000000' : '#FFFFFF',
        },
        whiteText: {
            color: '#000000'
        },
        blackText: {
            color: '#FFFFFF'
        }
    })

    return (
        <SafeAreaView 
        // style = {styles.container}
        >
            <ScrollView>
            <View>
                <Flatcard />
                <Elevatedcard/>
                <FancyCard/>
                <ActionCard/>
                <ShoesCard/>
                {/* <Image
                    source={require('./assets/Rakhi.jpeg')}
                    style={{ width: 400, height: 200 }}
                /> */}
                {/* <Text style={styles.text}>Please Make this world ready</Text>

                <Text style={styles.text}>Current Theme: {theme}</Text>
                <Button title="Toggle Theme" onPress={toggleTheme} /> */}
            </View>
            </ScrollView>
        </SafeAreaView>

    );
}
export default AppPro;