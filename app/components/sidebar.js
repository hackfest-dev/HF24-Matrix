import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerActions } from '@react-navigation/native';

const Sidebar = ({ navigation }) => {
  const handleClose = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  const handleContactUs = () => {
    // Implement your logic for handling "Contact Us" action
    alert("Contact Us");
  };

  const handleIconPress = (iconName) => {
    // Implement your logic for handling icon press
    alert(`Icon "${iconName}" pressed`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
        <Text style={styles.closeButtonText}>✕</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sidebarItem} onPress={handleContactUs}>
        <Text>Contact Us</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleIconPress("Icon 1")}>
          <Text>Icon 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleIconPress("Icon 2")}>
          <Text>Icon 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleIconPress("Icon 3")}>
          <Text>Icon 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  closeButtonText: {
    fontSize: 24,
  },
  sidebarItem: {
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconButton: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 5,
  },
});

export default Sidebar;
