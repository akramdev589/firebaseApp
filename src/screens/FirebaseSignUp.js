import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import auth from '@react-native-firebase/auth';
  import { useNavigation } from '@react-navigation/native';
  import firestore from '@react-native-firebase/firestore';
  const FirebaseSignUp = () => {
      const navigation = useNavigation()
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [emailerror, setemailerror] = useState('');
    const [passerror, setpasserror] = useState('');
    const createUser = async () => {
      if (email && password) {
        setemailerror('');
        setpasserror('');
        try {
          const res = await auth().createUserWithEmailAndPassword(
            email,
            password,
          );
          const user = res.user;
          // Store user information in Firestore
          try{
            await firestore().collection('users').doc(user.uid).set({
                uid: user.uid,
                email: user.email,
                createdAt: firestore.FieldValue.serverTimestamp(),
              });
          } catch (error) {
              Alert.alert(error);
            
          }
          console.log('User signed up and added to Firestore!');
          Alert.alert('User account created & please login' + JSON.stringify(res));
          navigation.goBack();
          console.log('User account created & signed in!');
        } catch (error) {
          // Handle specific error codes
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          } else if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          } else {
            // Handle generic errors
            Alert.alert(error.message);
          }
        }
      } else {
        setemailerror('Please Enter Email');
        setpasserror('Please Enter Password');
      }
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter User Email"
          value={email}
          onChangeText={txt => setemail(txt)}
          style={[styles.input, {marginTop: 20}]}
          placeholderTextColor="#000"
        />
        <Text style={styles.error}>{emailerror}</Text>
        <TextInput
          placeholder="Enter The Password"
          value={password}
          onChangeText={txt => setpassword(txt)}
          style={[styles.input, {marginTop: 20}]}
          placeholderTextColor="#000"
        />
        <Text style={styles.error}>{passerror}</Text>
  
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => {
            createUser();
          }}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.createUser}
          onPress={() => {
            navigation.navigate('FirebaseLogin')
          }}>
          <Text style={styles.signUpText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default FirebaseSignUp;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    error: {
      color: 'red',
      fontSize: 13,
      marginHorizontal: 40,
      // marginVertical:10
    },
    input: {
      width: '80%',
      height: 50,
      borderRadius: 10,
      borderWidth: 0.3,
      alignSelf: 'center',
      paddingLeft: 20,
      marginTop: 100,
    },
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
    createUser: {
      padding: 20,
    },
    btnText: {
      color: '#fff',
      fontSize: 18,
    },
    signUpText: {
      marginHorizontal: 20,
      color: 'blue',
      fontSize: 16,
    },
  });
  