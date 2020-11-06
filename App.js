import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import Login from "./components/Login"

export default function App() {
  console.log("App executed!");
  console.log(Login)
  return (
    <SafeAreaView style={styles.container}>
      <Login />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

/**
 * STYLESHEET
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#85C1E9",
    alignItems: "center",
    justifyContent: "center",
  },
});
