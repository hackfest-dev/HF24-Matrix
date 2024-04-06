import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";

const Login = ({ navigation }) => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://192.168.137.155:3050/login", {
        email,
        password,
        role,
      });
      Alert.alert("Login Successful", response.data);
    } catch (error) {
      console.error("Error:", error.message);
      Alert.alert("Login Failed", "An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LinearGradient
        colors={["#D3D3D3", "#A9A9A9"]} 
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
          width: "100%"
        }}
      />
      <Text style={{ color: "#fff", textAlign: "center", marginTop: 50, fontSize: 32 }}>Login</Text>
      <View style={{ marginTop: 50 }}>
        <View>
          <Text style={{ color: "#000000" }}>EMAIL:</Text>
          <TextInput
            placeholder="Enter Email..."
            style={{ borderColor: "#FF6347", borderWidth: 1, padding: 10, borderRadius: 5, marginTop: 5, color: "#fff", width: 300 }}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "#000000" }}>PASSWORD:</Text>
          <TextInput
            secureTextEntry
            placeholder="Enter Password..."
            style={{ borderColor: "#FF6347", borderWidth: 1, padding: 10, borderRadius: 5, color: "#fff" }}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "#000000" }}>ROLE:</Text>
          <TouchableOpacity
            onPress={() => setRole("user")}
            style={{
              backgroundColor: role === "user" ? "#00ff00" : "#ddd",
              padding: 15,
              marginTop: 10,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Text style={{ color: role === "user" ? "#fff" : "#000" }}>User</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setRole("volunteer")}
            style={{
              backgroundColor: role === "volunteer" ? "#00ff00" : "#ddd",
              padding: 15,
              marginTop: 10,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Text style={{ color: role === "volunteer" ? "#fff" : "#000" }}>Volunteer</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handleLogin}
          style={{
            backgroundColor: "#FF6347",
            padding: 15,
            marginTop: 30,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <Text style={{ color: "#000000", textAlign: "center", fontSize: 16 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;
