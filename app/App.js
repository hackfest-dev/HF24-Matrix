import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Login from "./components/Login";
import Home from "./components/Home";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <LinearGradient
        colors={["#FFA07A", "#FF6347"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />
      {/* <Login/> */}
      <Home/>
    </View>
  );
}
