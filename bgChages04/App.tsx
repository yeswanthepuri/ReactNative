/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';



function App(): JSX.Element {
  const [randomBackgroundcolor, setBackgroundColor] = useState('#ffffff');

  const generatecolor = () => {
    const hexranger = "0123456789ABCDE";
    let color = "#"
    for (let index = 0; index < 6; index++) {
      color += hexranger[Math.floor(Math.random() * 16)]
    }
    setBackgroundColor(color);
  };
  return (
    <>
      <StatusBar backgroundColor={randomBackgroundcolor} />

      <View style={[styles.container, { backgroundColor: randomBackgroundcolor }]}>
        <TouchableOpacity onPress={generatecolor}>
          <View style={styles.actionbutton}>
            <Text style={styles.actionbuttonText}>
              Press Me
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionbutton: {
    borderRadius: 12,
    backgroundColor: '#6A1BAD',
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionbuttonText: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase'
  }
});

export default App;
