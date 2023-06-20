import { View, Text, useWindowDimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React, { useEffect, useLayoutEffect , useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useForm, FormProvider, SubmitHandler, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import {LinearGradient} from 'expo-linear-gradient';
import {useDispatch, useSelector} from 'react-redux'
import { signInUser, signUpUser } from '../store/actions/user_actions';
import { responsiveHeight } from 'react-native-responsive-dimensions';



const ProfileScreen = () => {

    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();
    const dispatch =    useDispatch();
    const { params : {current_user}  }  =  useRoute()
    const [reload, setReload] =  useState(0);
    
    // console.log(current_user)


    const { register, reset, control, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
        defaultValues :  {
          user_role : current_user.role,
          username : current_user.email,
          firstName : current_user.firstName,
          lastName : current_user.lastName,
          telephone : current_user.telephone
        },
          mode: 'all',
      })
      
      const onSubmit = data => {
        //   console.log(data);
        //   dispatch( signUpUser(data) )
          dispatch( signUpUser(data))
      }



  return (
        <LinearGradient style={{height :  responsiveHeight(100)}} colors={['transparent', '#3498DB']} className="h-full" >
    <View className="bg-slatee-900">
      <KeyboardAwareScrollView >
    {/* <View > */}
        <View className={`w-full h-full bg-slatee-900 -mtt-10 ${Platform.select({ios : 'py-32 -mt-4', android : 'py-4'})}`}>
      <View style={{alignSelf : 'center'}} className="bg-slate-200  shadow-md rounded-lg px-4 py-5 w-10/12 my-3">
           <Text className={`text-2xl font-medium text-sky-600  text-center ${Platform.select({android : 'text-xl'})}`} >Edit Profile</Text>
      <View className="my-2">
       <Text className={`text-lg text-sky-600 ${Platform.select({android : 'text-sm'})}`} >FirstName</Text>
        <Controller
        control={control}
        rules={{
         required: {value : true, message : "Firstname is required"},
        //  minLength : {value : 3,  message : "Requires atleast three characters"}
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md bg-slate-100 text-sky-600 px-4 py-2.5 ${Platform.select({android : 'py-1.5'})} ${errors.firstName? 'border-2 border-red-400' : 'border-2 border-sky-600'}`}
          placeholder="Enter firstName"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {  errors.firstName && <Text className="text-red-400" > {errors.firstName.message} </Text>}
      </View>
      <View className="my-2">
      <Text className={`text-lg text-sky-600 ${Platform.select({android : 'text-sm'})}`} >LastName</Text>
    <Controller
        control={control}
        rules={{
          required: {value : true, message : "Lastname is required"},
          minLength : {value : 3,  message : "Requires atleast three characters"}
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md bg-slate-100 text-sky-600 px-4 py-2.5 ${Platform.select({android : 'py-1.5'})} ${errors.lastName? 'border-2 border-red-400' : 'border-2 border-sky-600'}`}
          placeholder="Enter lastName"
            onBlur={onBlur} 
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />
      {  errors.lastName && <Text className="text-red-400" > {errors.lastName.message} </Text>}
      </View>
      <View className="my-2">
      <Text className={`text-lg text-sky-600 ${Platform.select({android : 'text-sm'})}`} >Username</Text>
     <Controller
        control={control}
        rules={{
          required: "Username is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md bg-slate-100 text-sky-600 px-4 py-2.5 ${Platform.select({android : 'py-1.5'})} ${errors.username? 'border-2 border-red-400' : 'border-2 border-sky-600'}`}
          placeholder="Enter username or email"
            onBlur={onBlur}
            autoCapitalize = {false}
            onChangeText={onChange}
            value={value}border-2 border-sky-600
          />
        )}
        name="username"
      />
      {  errors.username && <Text className="text-red-400" > {errors.username.message} </Text>}
      </View>
                  <View className="my-2">
                  <Text className={`text-lg text-sky-600 ${Platform.select({android : 'text-sm'})}`} >Telephone  (255) </Text>
                  <Controller
        control={control}
        rules={{
         required: "Telephone is  required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md bg-slate-100 text-sky-600 px-4 py-2.5 ${Platform.select({android : 'py-1.5'})} ${errors.telephone? 'border-2 border-red-400' : 'border-2 border-sky-600'}`}
          placeholder="Enter telephone"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}border-2 border-sky-600
          />
        )}
        name="telephone"
      />
      {  errors.telephone && <Text className="text-red-400" > {errors.telephone.message} </Text>}
            </View>
      {/* <View className="my-2">
       <Text className={`text-lg text-sky-600 ${Platform.select({android : 'text-sm'})}`} >Password</Text>
       <Controller
        control={control}
        rules={{
          required: {value : true, message :  "Password is required"},
          pattern: {
            value: /^([a-zA-Z0-9]{8,16})$/,
            message: 'Must contain atleast 8 characters'
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md bg-slate-100 text-sky-600 px-4 py-2.5 ${Platform.select({android : 'py-1.5'})} ${errors.password? 'border-2 border-red-400' : 'border-2 border-sky-600'}`}
          placeholder="Enter password"
            onBlur={onBlur}
            autoCapitalize={false}
            secureTextEntry= {true}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && <Text className="text-red-400"> {errors.password.message} </Text>}
                  </View>
                  <View className="my-2">
                  <Text className={`text-lg text-sky-600 ${Platform.select({android : 'text-sm'})}`} >Confirm Password</Text>
                  <Controller
        control={control}
        rules={{
          required: {value : true, message :  "Password is required"},
          pattern: {
            value: /^([a-zA-Z0-9]{8,16})$/,
            message: 'Must contain atleast 8 characters'
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md bg-slate-100 text-sky-600 px-4 py-2.5 ${Platform.select({android : 'py-1.5'})} ${errors.confirmPassword? 'border-2 border-red-400' : 'border-2 border-sky-600'}`}
          placeholder="Confirm Password"
            onBlur={onBlur}
            autoCapitalize={false}
            secureTextEntry= {true}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="confirmPassword"
      />
      {errors.confirmPassword && <Text className="text-red-400"> {errors.confirmPassword.message} </Text>}
                  </View> */}
                  <View className="my-6"></View>
                  {/* <View>
             <TouchableOpacity className="bg-sky-600 rounded-md px-2 py-1 my-3"
               onPress={handleSubmit(onSubmit)}
             >
                <Text className={`text-2xl font-medium text-white text-center ${Platform.select({android : 'text-lg'})}`}>Submit</Text>
             </TouchableOpacity>
        </View> */}
            {/* <View className="mt-1" >
            
             <TouchableOpacity className="rounded-md px-2 py-1 hover:text-sky-300"
             onPress={() => navigation.navigate('Login') }
             >
                <Text className="text-xl font-medium text-sky-600 text-center" >Sign In</Text>
             </TouchableOpacity>
            </View> */}
         </View> 
        </View>
        
    {/* </View> */}
        </KeyboardAwareScrollView>
    </View>
          </LinearGradient>
  )
}

export default ProfileScreen