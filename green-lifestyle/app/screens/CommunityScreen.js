import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import colors from "../config/colors";

const CommunityScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Community Screen</Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary,
  },
});
