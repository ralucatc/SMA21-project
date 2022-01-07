// import React from "react";
// import { View, Text, Button, StyleSheet } from "react-native";
// import colors from "../config/colors";
// import { NavigationContainer } from "@react-navigation/native";
// import Tabs from "../navigation/tabs";

// const Dashboard = () => {
//   return (
//     <NavigationContainer>
//       <Tabs />
//     </NavigationContainer>
//   );
// };

//export default Dashboard;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: colors.primary,
//   },
// });

import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { firebase } from "../databse/firebase";
require("firebase/auth");
import "firebase/compat/auth";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      uid: "",
    };
  }

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate("Login");
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  render() {
    this.state = {
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,
    };
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Hello, {this.state.displayName}</Text>

        <Button color="#3740FE" title="Logout" onPress={() => this.signOut()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 35,
    backgroundColor: "#fff",
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20,
  },
});
