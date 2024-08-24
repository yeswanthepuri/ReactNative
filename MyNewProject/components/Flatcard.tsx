import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcard() {
  return (
    <View>
      <Text style={styles.HeadingText}>Flat card</Text>
      <View style={styles.Container}>
        <View style={[styles.Card, styles.CardOne]}>
          <Text>
            Red
          </Text>
        </View>
        <View style={[styles.Card, styles.CardTwo]}>
          <Text>
            Yellow
          </Text>
        </View>
        <View style={[styles.Card, styles.CardThree]}>
          <Text>
            Green
          </Text>
        </View>
        <View style={[styles.Card, styles.CardOne]}>
          <Text>
            Red
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  HeadingText:
  {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  Container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8
  },
  Card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8
  },
  CardOne: {
    backgroundColor: '#FF0000'
  },
  CardTwo: {
    backgroundColor: '#Ffff00'
  },
  CardThree: {
    backgroundColor: '#008000'
  }
})