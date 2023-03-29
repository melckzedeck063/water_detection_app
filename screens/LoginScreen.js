import { View, Text, Form, TextInput, useWindowDimensions, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native'
import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller, useController, useWatch } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
import  { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
// import * as Yup from 'yup';
import {LinearGradient} from 'expo-linear-gradient'
import {useDispatch} from 'react-redux'
import { signInUser } from '../store/actions/user_actions';
import  *  as SecureStore from 'expo-secure-store';



const LoginScreen = () => {
    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();
    const dispatch =  useDispatch();


    const {  handleSubmit,setValue, control, reset, formState: { errors, isValid, isDirty } } = useForm({
        defaultValues  : {
          username : "",
          password :  ""
        },
        mode : 'all',
        reValidateMode : "onChange"
      })

      checkIfTokenExists =  async ()  =>  {
        const  authToken =  await SecureStore.getItemAsync('token');
        if(authToken !== "" || authToken !==  undefined || authToken !== null){
          // console.log(authToken)
          setTimeout(() => {
            navigation.navigate('HomeTab')
          }, 2000);
        }
        else {
          console.log("nothing to connsole")
        }
      }

      checkIfTokenExists();

      const onSubmit = data => {
        console.log(data)
        // dispatch(  signInUser(data) );
        navigation.navigate('HomeTab')
      }

    //   useLayoutEffect(() => 
    // {
    //     navigation.setOptions({
    //         headerShown : true,
    //         headerStyle : {
    //             backgroundColor : "#161E35"
    //         },
    //         headerTintColor : "white"
    //     })
    // })

  return (
    <View>
      <KeyboardAwareScrollView>

     <LinearGradient colors={['transparent', '#3498DB']} >
           <View className={`bg-slatee-900 w-full h-full ${height < 300 ? 'py-2' : 'py-6'} ${Platform.select({ios : 'pb-96', android : "pb-56"})}`}>
          {/* <Text className={`text-sky-600 text-center font-medium text-3xl ${height < 400 ? 'mt-1' : 'mt-24'} `}>Login Screen</Text> */}
        <View className={`mx-auto shadow-md bg-slate-200 rounded-lg ${height < 400 ? 'mt-32 py-1' : 'py-6 mt-52'} ${width < 400 ? 'w-10/12' : 'w-9/12'} px-6`}  style={{alignSelf : 'center'}} >
      <Text className="text-2xl font-medium text-sky-700 text-center" >Sign In</Text>
          <View className="my-2">
           <Text className={`text-sky-600 text-xl ${Platform.select({android : 'text-lg'})}`} > Username</Text>
      <Controller
        control={control}
        defaultValue =  ""
        rules={{
          required: "Username is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md text-sky-700 bg-gray-100 text-lgg px-4 py-2.5 ${Platform.select({android : 'py-1.5'})} ${errors.username? 'border-2 border-red-500' : 'border-2 border-sky-700'}`}
          placeholder="Enter username"
            onBlur={onBlur}
            onChangeText={onChange}
            autoCapitalize ={false}
            // autoComplete='email'
            value={value}
            // errors = {errors.name}
            // errorText = {errors?.name?.message}
          />
        )}
        name="username"
      />
      { errors.username && <Text className="text-red-400" > {errors.username.message} </Text>}
          </View>
       <View className="my-2">
         <Text className={`text-sky-600 text-xl ${Platform.select({android : 'text-lg'})}`} > Password</Text>
         <Controller
        control={control}
        rules={{
          required:  "Password is required",
          pattern: {
            value: /^([a-zA-Z0-9]{8,16})$/,
            message: 'Must contain atleast 8 characters'
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md text-sky-700 bg-gray-100 px-4 py-2.5 ${Platform.select({android : 'py-1.5'})} ${errors.password? 'border-2 border-red-400' : 'border-2 border-sky-600'}`}
          placeholder="Enter password"
            onBlur={onBlur}
            autoCapitalize = {false}
            secureTextEntry={true}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && <Text className="text-red-400"> {errors.password.message} </Text>}
       </View>
        <View>
             <TouchableOpacity className="bg-sky-600 rounded-md px-2 py-1 my-3"
               onPress={handleSubmit(onSubmit)}
             >
                <Text className={`text-2xl font-medium text-white text-center ${Platform.select({android : 'text-xl'})}`} >Sign In</Text>
             </TouchableOpacity>
        </View>
        <View>
            <View className="-mt-2" >
            <Text className="font-medium text-slate-700 text-center" >Don't have an account ? </Text>
             <TouchableOpacity className="rounded-md px-2 py-1 hover:text-sky-300"
             onPress={() => navigation.navigate('SignUp') }
             >
                <Text className="text-xl font-medium text-sky-600 text-center" >Sign Up</Text>
             </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
        </LinearGradient>
          </KeyboardAwareScrollView>
    </View>
  )
}

export default LoginScreen