
import React from "react"
import { View, Text, Button, StyleSheet } from "react-native"

const LoginView = ({ userName, toggleLoggedIn, resetState }) => (
  <View>
    <Text>You have succesfully logged in {userName}</Text>
    <Button
     onPress={() => {
      toggleLoggedIn()
      resetState()
      }}
      color="#ff8500"
      title="Logout" 
      style={styles.buttonStyle}
      />
  </View>
)

export default LoginView