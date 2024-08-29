import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'


//form validation
import * as Yup from 'yup'

const PasswordSchema =  Yup.object().shape({
  passwordLength  : Yup.number()
  .min(4,"Enter value that is more then 4")
  .max(16,"Not more the 16 Characters")
  .required("This is Required")
})

export default function App() {
  const []=useState('');
  return (
    <View>
      <Text>First App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})