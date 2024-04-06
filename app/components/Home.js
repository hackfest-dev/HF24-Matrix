import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image,Button, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card } from 'react-native-paper';
import * as Location from "expo-location";
import Map from "./Map.js";
import { PROVIDER_GOOGLE } from "react-native-maps";



export default function Home(){
  const [showSidebar, setShowSidebar] = useState(false); 
  const navigation = useNavigation();
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 123-456-7890",
  };
  const handleEmergency = () => {

    alert("Emergency button pressed!");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  
  return(
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Image
          source={require("../assets/icon.png")}
          style={styles.logo}
        />
        <Text style={styles.appName}>SafeZone</Text>
      </View>

      {showSidebar && (
        <View style={styles.sidebar}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
          <Text style={styles.userPhone}>{user.phone}</Text>
          {/* Contact options */}
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contact via WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contact via Email</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity style={styles.sidebarButton} onPress={toggleSidebar}>
        <Text style={styles.sidebarButtonText}>☰</Text>
      </TouchableOpacity>
      <Card>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  </Card>
        <Image
        source={require("../assets/favicon.png")}
        style={styles.disasterImage}
      />
      <Card>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  </Card>
        <Button title="Location" style={styles.MapButton} onPress={() => navigation.navigate("Map")}></Button>
     
      <TouchableOpacity style={styles.Emergencybutton} onPress={handleEmergency}>
        <Text style={styles.EmergencybuttonText}>Emergency!!!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  navBar: {
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 50,
    padding: 5,
  },
  logo: {
    width: 50,
    height: 50,
  },
  appName: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop:10,
    paddingLeft: 5,
  },
  Emergencybutton: {
    backgroundColor: "#FF6347",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
    paddingTop: 25,
    paddingBottom: 25,
  },
  EmergencybuttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  sidebar: {
    position: "right",
    width: "100%",
    height: "100%",
    top: 20,
    left: 20,
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
    zIndex: 0,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  userPhone: {
    fontSize: 14,
    color: "#555",
  },
  contactButton: {
    marginTop: 10,
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  contactButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  disasterImage: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    resizeMode: "cover",
  },
  sidebarButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 5,
  
  },
  sidebarButtonText: {
    color: "#000000",
    fontSize: 24,
  },
  mapIcon: {
    width: 50,
    height: 50,
  },
});

