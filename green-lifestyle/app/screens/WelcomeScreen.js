import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
//import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/splash.jpg")}
    >
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          onPress={() => props.navigation.navigate("Login")}
        />
        <AppButton
          title="Register"
          onPress={() => props.navigation.navigate("Register")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    height: 720,
  },

  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
});
export default WelcomeScreen;
