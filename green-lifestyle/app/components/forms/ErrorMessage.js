import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "../AppText";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: { color: "red", marginLeft: 10 },
});

export default ErrorMessage;
