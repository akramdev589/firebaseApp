import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  const [UserDetails, setUserDetails] = useState({})
    const navigation = useNavigation()

    useEffect(() => {
      getUserDetails()
    }, [])

    const hanndleLogout = async () => {
        AsyncStorage.setItem('IsLogin', JSON.stringify(false))
        navigation.reset({
            index: 0,
            routes: [{ name: 'FirebaseLogin' }],
        });
    }

    const getUserDetails = async () => {
      let userData = await AsyncStorage.getItem('userData')
      userData = await JSON.parse(userData)
      setUserDetails(userData)
  }
  
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Text>Email: {UserDetails?.email}</Text>
            <TextInput style={styles.input} placeholder="Edit your name" placeholderTextColor="#000"/>
            <TextInput style={styles.input} placeholder="Edit your email" placeholderTextColor="#000"/>
            
            <View style={styles.space} />

            <TouchableOpacity
        style={styles.addBtn}
        onPress={() => { }}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.addBtn,{backgroundColor:'blue'}]}
        onPress={() => { hanndleLogout()}}>
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, marginBottom: 20 },
    input: {
      width: '80%',
      height: 50,
      borderRadius: 10,
      borderWidth: 0.3,
      alignSelf: 'center',
      paddingLeft: 20,
      marginTop: 40,
    },
    space: { marginVertical: 10 },
    addBtn: {
      backgroundColor: 'purple',
      width: '80%',
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      alignSelf: 'center',
    },
    btnText: {
      color: '#fff',
      fontSize: 18,
    },
});

export default ProfileScreen;
