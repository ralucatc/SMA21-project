import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import colors from "../config/colors";

const NewsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>News Screen</Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
});
