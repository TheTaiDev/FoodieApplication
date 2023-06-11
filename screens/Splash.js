import React, { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import SplashScreen from "react-native-splash-screen";
export default function Splash({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (SplashScreen != null) {
        SplashScreen.hide();
      }
      navigation.replace("OnboardingScreen1");
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFEEDA",
      }}
    >
      <Image
        style={{
          width: 160,
          height: 160,
        }}
        source={require("../assets/images/logo.png")}
      />
    </View>
  );
}
