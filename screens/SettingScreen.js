import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import *   as SecureStore from 'expo-secure-store';
import {AntDesign } from '@expo/vector-icons'

const SettingScreen = () => {
  const navigation   =  useNavigation();
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
  
  useLayoutEffect(() =>  {
    navigation.setOptions({ 
      headerShown :  true,
      headerStyle: {
        backgroundColor: '#3498DB',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  })

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

  return (
    <View>
      <LinearGradient colors={['#fff', 'white']} className={`h-full`} >
         <View className={``}>
           <Text className={`font-bold text-sky-600 text-xl text-center py-6 ${Platform.select({android : 'text-lg'})}`} >Setting  Screen</Text>

         </View>

         <View style={styles.container}>
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

      <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.button}>Logout</Text>
      </TouchableOpacity>
    </View>
    </View>
      </LinearGradient>
    </View>
  )
}

export default SettingScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
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
});