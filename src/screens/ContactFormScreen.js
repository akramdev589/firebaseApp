import React,{useState} from 'react';
import { View, Text,TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';

const ContactFormScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Form</Text>
    
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        placeholderTextColor="#000"
        onChangeText={txt => setName(txt)}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#000"
        value={email}
        onChangeText={txt => setEmail(txt)}
        style={[styles.input, {marginTop: 20}]}
      />
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => { }}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
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
  input: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.3,
    alignSelf: 'center',
    paddingLeft: 20,
    marginTop: 100,
  },
});

export default ContactFormScreen;
