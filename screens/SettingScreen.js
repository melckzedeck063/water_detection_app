import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const SettingScreen = () => {
  const navigation   =  useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

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

  return (
    <View>
      <LinearGradient colors={['#3498DB', 'white']} className={`h-full`} >
         <View className={``}>
           <Text className={`font-bold text-white text-xl text-center py-6 ${Platform.select({android : 'text-lg'})}`} >Setting  Screen</Text>

         </View>

         <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <Text style={styles.button}>Open Modal</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={{alignSelf : 'center'}} className={"bg-white p-4 rounded-lg w-10/12 "}>
            <Text className={`font-medium text-center`}>This is a modal window</Text>
          </View>
        </View>
      </Modal>
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
});