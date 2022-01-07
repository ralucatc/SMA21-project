// import React from "react";
// import { View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import Tabs from "./app/navigation/tabs";
// import { StatusBar } from "expo-status-bar";

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tabs />
//     </NavigationContainer>
//   );
// };

// export default App;

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./app/screens/Login";
import Signup from "./app/screens/Signup";
import Tabs from "./app/navigation/tabs";
import colors from "./app/config/colors";

const Stack = createStackNavigator();

//hello

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{
        headerTitleAlign: "center",
        //headerShown: false,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: "Register" }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ title: "Login" }, { headerLeft: null })}
      />
      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
