import React, { useState, useEffect, useRef } from 'react';
import { NativeModules, View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import BLEManager from 'react-native-ble-manager';

const { SMSMeshModule } = NativeModules;

const SMSMeshComponent = () => {
  const [message, setMessage] = useState('');
  const [contacts, setContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [deviceId, setDeviceId] = useState('');
  const [peerDevices, setPeerDevices] = useState([]);
  const [messageQueue, setMessageQueue] = useState([]);
  const [isBackgroundServiceRunning, setIsBackgroundServiceRunning] = useState(false);

  const backgroundServiceRef = useRef(null);

  useEffect(() => {
    // Register the device with the SMS mesh network
    registerDevice();

    // Load contacts from a file or your device's address book
    loadContacts();

    // Start the peer discovery and mesh network formation process
    startPeerDiscovery();

    // Start the background service to manage the SMS mesh network
    startBackgroundService();

    return () => {
      // Stop the background service when the component is unmounted
      stopBackgroundService();
    };
  }, []);

  const registerDevice = async () => {
    try {
      // Register the device with the SMS mesh network
      const id = await SMSMeshModule.registerDevice();
      setDeviceId(id);
    } catch (error) {
      console.error('Error registering device:', error);
    }
  };

  const loadContacts = async () => {
    try {
      // Load contacts from a file (e.g., a JSON file)
      const contactsData = await RNFS.readFile('contacts.json', 'utf8');
      const contactsList = JSON.parse(contactsData);
      setContacts(contactsList);
    } catch (error) {
      console.error('Error loading contacts:', error);
    }
  };

  const startPeerDiscovery = async () => {
    try {
      // Start the peer discovery and mesh network formation process
      await BLEManager.startDiscovery();
      BLEManager.onDeviceFound((device) => {
        // Add the discovered peer device to the list of peer devices
        setPeerDevices((prevDevices) => [...prevDevices, device]);
      });
    } catch (error) {
      console.error('Error starting peer discovery:', error);
    }
  };

  const stopPeerDiscovery = async () => {
    try {
      // Stop the peer discovery process
      await BLEManager.stopDiscovery();
    } catch (error) {
      console.error('Error stopping peer discovery:', error);
    }
  };

  const startBackgroundService = () => {
    try {
      // Start the background service to manage the SMS mesh network
      backgroundServiceRef.current = await SMSMeshModule.startBackgroundService();
      setIsBackgroundServiceRunning(true);
    } catch (error) {
      console.error('Error starting background service:', error);
    }
  };

  const stopBackgroundService = () => {
    try {
      // Stop the background service
      await SMSMeshModule.stopBackgroundService(backgroundServiceRef.current);
      setIsBackgroundServiceRunning(false);
    } catch (error) {
      console.error('Error stopping background service:', error);
    }
  };

  const toggleContactSelection = (contact) => {
    if (selectedContacts.includes(contact)) {
      setSelectedContacts(selectedContacts.filter((c) => c !== contact));
    } else {
      setSelectedContacts([...selectedContacts, contact]);
    }
  };

  const sendMeshMessage = () => {
    // Add the message to the message queue
    setMessageQueue([...messageQueue, { message, recipients: selectedContacts.map((c) => c.phone) }]);

    // Broadcast the message to nearby peer devices
    SMSMeshModule.broadcastMessage(message, selectedContacts.map((c) => c.phone));
  };

  const renderPeerDevices = ({ item }) => (
    <View style={styles.peerDeviceItem}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Device ID: {deviceId}</Text>
      <TextInput
        style={styles.messageInput}
        placeholder="Enter your message"
        value={message}
        onChangeText={setMessage}
      />
      <View style={styles.contactsContainer}>
        {contacts.map((contact, index) => (
          <View key={index} style={styles.contactItem}>
            <Text>{contact.name}</Text>
            <Button
              title={selectedContacts.includes(contact) ? 'Deselect' : 'Select'}
              onPress={() => toggleContactSelection(contact)}
            />
          </View>
        ))}
      </View>
      <Button title="Send Mesh Message" onPress={sendMeshMessage} />
      <View style={styles.peerDevicesContainer}>
        <Text>Nearby Peer Devices:</Text>
        <FlatList
          data={peerDevices}
          keyExtractor={(item) => item.id}
          renderItem={renderPeerDevices}
        />
      </View>
      {isBackgroundServiceRunning && (
        <Text style={styles.backgroundServiceStatus}>Background service is running</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // Same as before, plus:
  peerDevicesContainer: {
    marginTop: 16,
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  peerDeviceItem: {
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 4,
    marginBottom: 8,
  },
  backgroundServiceStatus: {
    marginTop: 16,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default SMSMeshComponent;