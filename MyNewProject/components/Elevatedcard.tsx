import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Elevatedcard() {
  return (
    <View >
      <Text style={styles.HeadingText}>Elevated card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
      </ScrollView>
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
  card:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    borderRadius:10,
    margin:10
  },
  cardElevated:{
    backgroundColor:'#f4b6a9',
    elevation:0,
    shadowOffset:
    {
        height:1,
        width:1
    },
    shadowColor:'#3e903e',
    shadowOpacity:1,
    shadowRadius:10
  },
  container:{
    padding:8,

  }
})