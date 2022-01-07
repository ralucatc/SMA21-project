import { StatusBar } from "expo-status-bar";
import React from "react";
import Login from "../screens/Login";
import Signup from "../screens/Regiser";
import Dashboard from "../screens/dashboard";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import AddingPet from "../screens/AddingPet";
import Adoption from "../screens/Adoption";
import LostFound from "../screens/LostFound";
import Shelter from "../screens/Shelter";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons } from "@expo/vector-icons";
import iconSet from "@expo/vector-icons/build/Fontisto";
import Icon from "react-native-vector-icons/Ionicons";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { DrawerActions } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const HomeStack = createStackNavigator();

function HomeScreenStack({ navigation }) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#57419d",
          height: 90,
        },

        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <HomeStack.Screen
        name="Home Page"
        component={HomeScreen}
        options={{
          // title:'About',
          headerRight: () => (
            <Icon.Button
              name="md-menu"
              size={30}
              backgroundColor="#57419d"
              // height={40}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

const FeedStack = createStackNavigator();

function FeedScreenStack({ navigation }) {
  return (
    <FeedStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#57419d",
          height: 90,
        },

        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <FeedStack.Screen
        name="Adoption"
        component={Adoption}
        options={{
          title: "Adoption",
          headerRight: () => (
            <Icon.Button
              name="md-menu"
              size={30}
              backgroundColor="#57419d"
              // height={40}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </FeedStack.Navigator>
  );
}

const LFStack = createStackNavigator();

function LFScreenStack({ navigation }) {
  return (
    <LFStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#57419d",
          height: 90,
        },

        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <LFStack.Screen
        name="Lost and Found"
        component={LostFound}
        options={{
          title: "Lost Pet",
          headerRight: () => (
            <Icon.Button
              name="md-menu"
              size={30}
              backgroundColor="#57419d"
              // height={40}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </LFStack.Navigator>
  );
}

const ShelterStack = createStackNavigator();

function ShelterScreenStack({ navigation }) {
  return (
    <ShelterStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#57419d",
          height: 90,
        },

        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <ShelterStack.Screen
        name="Shelter"
        component={Shelter}
        options={{
          title: "Find Shelter",
          headerRight: () => (
            <Icon.Button
              name="md-menu"
              size={30}
              backgroundColor="#57419d"
              // height={40}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </ShelterStack.Navigator>
  );
}

const AddingPetStack = createStackNavigator();

function AddingPetScreenStack({ navigation }) {
  return (
    <AddingPetStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#57419d",
          height: 90,
        },

        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <AddingPetStack.Screen
        name="AddingPage"
        component={AddingPet}
        options={{
          title: "Add a pet",
          headerRight: () => (
            <Icon.Button
              name="md-menu"
              size={30}
              backgroundColor="#57419d"
              // height={40}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </AddingPetStack.Navigator>
  );
}

const Stack = createStackNavigator();

function MyStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="City Pets"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#57419d",
          height: 90,
        },

        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Welcome Page" component={WelcomeScreen} />
      <Stack.Screen
        name="Regiser"
        component={Signup}
        options={{ title: "Register" }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerRight: () => (
            <Icon.Button
              name="md-menu"
              size={30}
              backgroundColor="#57419d"
              // height={40}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigatorComp() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="City Pets">
        <Drawer.Screen name="City Pets" component={MyStack} />

        <Drawer.Screen
          name="About"
          component={HomeScreenStack}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-home"
                size={size}
                color={focused ? "#6600cc" : "#ccc"}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Add a pet"
          component={AddingPetScreenStack}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-heart"
                size={size}
                color={focused ? "#6600cc" : "#ccc"}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Adoption"
          component={FeedScreenStack}
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons
                name="pets"
                size={size}
                color={focused ? "#6600cc" : "#ccc"}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Lost Pet"
          component={LFScreenStack}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-search"
                size={size}
                color={focused ? "#6600cc" : "#ccc"}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Find Shelter"
          component={ShelterScreenStack}
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialCommunityIcons
                name="home-heart"
                size={size}
                color={focused ? "#6600cc" : "#ccc"}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
