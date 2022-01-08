import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import colors from "../config/colors";

const AddForm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Add Form</Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

export default AddForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary,
  },
});
