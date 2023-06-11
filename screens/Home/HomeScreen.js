import { Text, View, SafeAreaView } from "react-native";
import React, { Component } from "react";
import Header from "../../components/Header";
export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,

        backgroundColor: "#FFFF",
      }}
    >
      <Header />
    </SafeAreaView>
  );
}
