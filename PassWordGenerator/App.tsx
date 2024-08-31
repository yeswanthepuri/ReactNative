import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";

//form validation
import * as Yup from 'yup'
import { Formik } from 'formik'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, "Enter value that is more then 4")
    .max(16, "Not more the 16 Characters")
    .required("This is Required")
})

export default function App() {
  //This is predefined password or x is Variable
  //This is predefined setPassword or y is Function to update the value
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setisPasswordGenerated] = useState(false);
  useState(false);
  const [lowercase, setlowercase] = useState(true);
  const [uppercase, setuppercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbols, setsymbols] = useState(false);

  const generatePassowrdString = (passwordLength: number) => {
    let charList = '';
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbersstring = "0123456789";
    const symbolsstring = "!@#$%^&*()";
    if (lowercase) {
      charList += lowerCaseLetters;
    }
    if (uppercase) {
      charList += upperCaseLetters;
    }
    if (number) {
      charList += numbersstring;
    }
    if (symbols) {
      charList += symbolsstring;
    }

    const created_password = createPassword(charList, passwordLength);
    setPassword(created_password);
    setisPasswordGenerated(true);
  };
  const resetPassword = () => {
    setPassword('');
    setisPasswordGenerated(false);
    setlowercase(true);
    setNumber(false);
    setuppercase(false);
    setsymbols(false)
  }
  const createPassword = (charcter: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * charcter.length);
      result += charcter.charAt(characterIndex);
    }
    return result;
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              console.log(values);
              generatePassowrdString(Number(values.passwordLength))
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}

                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder='ex: 8'
                    keyboardType="numeric" />
                </View>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Include LowerCase</Text>

                  </View>
                  <BouncyCheckbox    
                  disableBuiltInState={false} 
                  style={styles.inputcheckbox}
                    isChecked={lowercase}
                    onPress={() => { setlowercase(!lowercase) }}
                  ></BouncyCheckbox>
                </View>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Include UpperCase</Text>

                  </View>
                  <BouncyCheckbox 
                     disableBuiltInState={false}
                  style={styles.inputcheckbox}
                    isChecked={uppercase}
                    onPress={() => { setuppercase(!uppercase) }}
                  ></BouncyCheckbox>
                </View>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Include Number</Text>

                  </View>
                  <BouncyCheckbox 
                     disableBuiltInState={false}
                  style={styles.inputcheckbox}
                    isChecked={number}
                    onPress={() => { setNumber(!number) }}
                  ></BouncyCheckbox>
                </View>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Include Symbols</Text>

                  </View>
                  <BouncyCheckbox 
                     disableBuiltInState={false}
                  style={styles.inputcheckbox}
                    isChecked={symbols}
                    onPress={() => { setsymbols(!symbols) }}
                  ></BouncyCheckbox>
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={handleSubmit}>
                    <Text style={styles.primaryBtnTxt}>
                      Generate Password
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryBtn}>
                    <Text
                      style={styles.secondaryBtnTxt}
                      onPress={() => {
                        handleReset();
                        resetPassword();
                      }}>
                      Reset
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>


        {isPasswordGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press to copy</Text>
            <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  inputcheckbox: {
    padding: 8,
    width: '30%',

    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000'
  },
})