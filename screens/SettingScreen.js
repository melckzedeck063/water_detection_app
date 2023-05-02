import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Switch, Platform, Modal } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect, useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import *   as SecureStore from 'expo-secure-store';

const SettingsScreen = () => {

  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
  const [locationEnabled, setLocationEnabled] = React.useState(false);
  const [autoCompleteEnabled, setAutoCompleteEnabled] = React.useState(false);

//   const handleNotificationsToggle = () => setNotificationsEnabled(!notificationsEnabled);
  const handleLocationToggle = () => setLocationEnabled(!locationEnabled);
  const handleAutoCompleteToggle = () => setAutoCompleteEnabled(!autoCompleteEnabled);

  const navigation =  useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleLogout = async () => {
    // Clear the secure store items
    await SecureStore.deleteItemAsync('token');
    // await SecureStore.deleteItemAsync('refreshToken');
    
    // Navigate to the login screen
    // This assumes you are using React Navigation

    setTimeout(() => {
      setModalVisible(true)
    }, 1000);

    setTimeout(() => { 
      navigation.navigate('Login');
    }, 3000);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    if (isModalVisible) {
      // Automatically close modal after 2 seconds
      setTimeout(() => {
        toggleModal();
      }, 2000);
    }
  }, [isModalVisible]);

  checkIfTokenExists =  async ()  =>  {
    const  authToken =  await SecureStore.getItemAsync('token');
    if(authToken !== "" || authToken !==  undefined || authToken !== null){
      // console.log(authToken)
    }
    else {
      console.log("nothing to connsole")
    }
  }

  checkIfTokenExists();
  


  const handleToggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown : true
    })
  })

  return (
    <ScrollView style={styles.container}>

    <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
        <View style={{alignSelf : 'center'}} className={"bg-white p-2 rounded-lg w-10/12 "}>
            <Text className={`text-center my-1`}>
               <AntDesign name="checkcircleo" size={64} color="red" /> 
            </Text>
            <Text className={`font-medium text-center text-red-400 text-lg ${Platform.select({android  : 'text-sm'})}`}>Successfully Loged Out</Text>
          </View>
        </View>
      </Modal>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <TouchableOpacity style={styles.item}
            onPress={() => navigation.navigate('Profile') }
          >
            <Text style={styles.itemText}>Edit Profile</Text>
            <Ionicons name="arrow-forward" size={20} color="#ccc" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>Change Password</Text>
            <Ionicons name="arrow-forward" size={20} color="#ccc" />
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          <View style={styles.item}>
            <Text style={styles.itemText}>Enable Notifications</Text>
            <Switch value={notificationsEnabled} onValueChange={handleToggleNotifications} />
          </View>
        <View style={styles.section} className="flex flex-row mt-3 justify-between border-b  border-slate-200">
          <Text style={styles.itemText} className="flex flex-row justify-between border-b  border-slate-200">Location</Text>
          <Switch value={locationEnabled} onValueChange={handleLocationToggle} />
        </View>
        {/* <View style={styles.section} className="flex flex-row justify-between border-b  border-slate-200">
          <Text style={styles.itemText} className={`font-light `}>Open Water Valve</Text>
          <Switch value={autoCompleteEnabled} onValueChange={handleAutoCompleteToggle} />
        </View> */}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>Terms & Conditions</Text>
            <Ionicons name="arrow-forward" size={20} color="#ccc" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>Privacy Policy</Text>
            <Ionicons name="arrow-forward" size={20} color="#ccc" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>App Version</Text>
            <Text style={styles.itemText}>1.0.0</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity  className="bg-sky-600 rounded-lg py-2 "
            onPress={handleLogout}
        >
          <Text style={styles.buttonText} className={`text-white text-center font-bold text-xl ${Platform.select({android : 'text-lg'})}`}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  content: {
    paddingHorizontal: 16,
    marginTop: 32,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#c62828',
    borderRadius: 4,
    paddingVertical: 16,
    marginTop: 32,
    alignItems: 'center',
  },
  modal_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  modal_button: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    padding: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalButton: {
    fontSize: 18,
    color: '#007AFF',
    padding: 16,
  },
  button: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    padding: 16,
  },
})

export default SettingsScreen;