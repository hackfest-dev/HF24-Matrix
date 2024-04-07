import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image,Button, Platform, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { Card } from 'react-native-paper';
import * as Location from "expo-location";
import Map from "./Map.js";
import { PROVIDER_GOOGLE } from "react-native-maps";
import axios from "axios";

export default function Home(){
  const [showSidebar, setShowSidebar] = useState(false); 
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigation = useNavigation();
  const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);

    useEffect(() => {
      (async () => {
        let { status } = Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        try {
          let location = Location.getCurrentPositionAsync({});
          setLocation(location);
        } catch (error) {
          setErrorMsg('Error fetching location data');
        }
      })();
    }, []);  

    const formattedTime = currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const formattedDate = currentTime.toLocaleDateString([], { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    
  const user = {
    name: "John Doe",
    email: "admin@example.com",
    phone: "+91 8088088891",
  };

const latitude = location ? location.coords.latitude : null;
const longitude = location ? location.coords.longitude : null;

  const handleEmergency = async () => {
    try{
      const response = await axios.post("http://192.168.57.150:3050/needHelp", {
        latitude: latitude,
        longitude: longitude
      });
    alert("Emergency button pressed!");}
    catch (error) {
      console.error("Error:", error.message);
      const errorMessage = error.response?.data?.message || "An unexpected error occurred. Please try again later.";
      Alert.alert("Message sending Failed", errorMessage);
    }
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const volunteers = [
    { name: "John", phone: "+91 9345678901" },
    { name: "Smith", phone: "+91 8765432105" },
    { name: "Jane", phone: "+91 8785212100" },
    { name: "Jack", phone: "+91 9635874122" },
    { name: "Joel", phone: "+91 6541239877" },
  ];

  return(
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Image
          source={require("../assets/logo.jpeg")}
          style={styles.logo}
        />
        <Text style={styles.appName}>SafeZone</Text>
      </View>
      <View style={styles.dateTimeContainer}>
        <Text style={styles.timeText}>{formattedTime}</Text>
        <Text style={styles.dateText}>{formattedDate}</Text>
      </View>
      {showSidebar && (
        <View style={styles.sidebar}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
          <Text style={styles.userPhone}>{user.phone}</Text>
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
      <Button title="Location" style={styles.MapButton} onPress={() => navigation.navigate("Map")}></Button>
      {volunteers.map((volunteer, index) => (
        <TouchableOpacity
          key={index}
          // onPress={() => handleCallVolunteer(volunteer.phone)}
          style={{ marginVertical: 10, padding: 10, backgroundColor: "#f0f0f0", position:"relative", paddingLeft:15 }}
        >
          <Text>{volunteer.name}</Text>
          <Text>Call: {volunteer.phone}<MaterialCommunityIcons name="phone-outline" size={26} color="black" style={{  alignItems:"center"  }} /></Text>
        </TouchableOpacity>
      ))}
     
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
  dateTimeContainer: {
    position: "absolute",
    paddingRight: 290,
    paddingTop: 15,
    top: 10,
    right: 10,
    alignItems: "flex-start",
  },
  timeText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ff0000",
  },
  dateText: {
    fontSize: 16,
    color: "#ff0000",
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
    borderRadius: 60,
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
