import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput,Button, Image } from "react-native";

export default class Login extends React.Component{

  render(){
    return(
      <View>
        <Text style={styles.titleText}>chatSimple(DEMO)</Text>
        <View style={styles["login-form"]}>
          <Text>UserName:</Text>
          <TextInput
            style={styles.inputField}
          />
          <Text>Password:</Text>
          <TextInput
            style={styles.inputField}
          />
          <Image
            source = {require('../assets/googleAuth.png')}
            style = {styles.OauthButtons}
          />
        </View>
      </View>
    )
  }
}

/**
 * STYLESHEET
 */
const styles = StyleSheet.create({
  'login-form': {
    width: 300,
    height: 200,
    backgroundColor: "#FFF",
    justifyContent: "center",
    padding: 20,
    borderRadius: 15,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF'
  },
  inputField: {
    height: 30,
    borderWidth: 1,
    borderColor: '#000',
  },
  OauthButtons: {
    alignSelf: 'center',
    resizeMode: "contain",
    width: 200,
    height : 50
  }
});
