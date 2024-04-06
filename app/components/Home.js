import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { DrawerActions } from '@react-navigation/native';
import Sidebar from "./sidebar.js";

const Home = ({ navigation }) => {
  const handleOngoingUpdates = () => {
    // Implement your logic for handling "Ongoing Updates" action
    alert("Ongoing Updates");
  };
  const openSidebar = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  
  const handleEmergencyHelp = () => {
    // Implement your logic for handling "Emergency Help" action
    alert("Emergency Help");
  };

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <LinearGradient
        colors={["#FFA07A", "#FF6347"]}
        style={styles.gradient}
      />
      <TouchableOpacity style={styles.sidebarButton} onPress={openSidebar}>
        <Text style={styles.sidebarButtonText}>☰</Text>
      </TouchableOpacity>
    </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleEmergencyHelp}>
          <Text style={styles.buttonText}>Emergency Help!!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleOngoingUpdates}>
          <Text style={styles.buttonText}>Ongoing Updates</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  sidebarButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  sidebarButtonText: {
    color: "#fff",
    fontSize: 24,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#7FFF00",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  container: {
    flex: 1,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  sidebarButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  sidebarButtonText: {
    color: "#fff",
    fontSize: 24,
  },
});
export default Home;
