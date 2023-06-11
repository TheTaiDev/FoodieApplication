import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Splash from "./screens/Splash";
import OnboardingScreen1 from "./screens/Onboarding/OnboardingScreen1";
import OnboardingScreen2 from "./screens/Onboarding/OnboardingScreen2";
import HomeScreen from "./screens/Home/HomeScreen";
import AccountScreen from "./screens/Home/AccountScreen";
import CartScreen from "./screens/Home/CartScreen";
import MessageScreen from "./screens/Home/MessageScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function OnboardingNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnboardingScreen1" component={OnboardingScreen1} />
      <Stack.Screen name="OnboardingScreen2" component={OnboardingScreen2} />
    </Stack.Navigator>
  );
}

function HomeNavigator() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#5f07f7",
        tabBarStyle: {
          backgroundColor: "#EC2578",
          height: 50, // Chiều cao 40px
        },
        tabBarActiveBackgroundColor: "#ff056c", // Màu nền khi tab được chọn
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? "#FFFFFF" : "#FFFF"}
              size={30}
            />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="account"
              color={focused ? "#FFFFFF" : "#FFFF"}
              size={30}
            />
          ),
        }}
        name="AccountScreen"
        component={AccountScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="cart"
              color={focused ? "#FFFFFF" : "#FFFF"}
              size={30}
            />
          ),
        }}
        name="CartScreen"
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="chat"
              color={focused ? "#FFFFFF" : "#FFFF"}
              size={30}
            />
          ),
        }}
        name="MessageScreen"
        component={MessageScreen}
      />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
        <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <RootNavigator />;
}
