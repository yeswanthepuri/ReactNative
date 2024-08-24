import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image
} from "react-native";


function App() {
  return(
  <SafeAreaView>
    <View>
    <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
        />
     <Text>Hello World !</Text> 
    </View>
  </SafeAreaView>);
}
export default App;