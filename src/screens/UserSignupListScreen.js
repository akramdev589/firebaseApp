import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
const UserSignupListScreen = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = await firestore().collection('users').get();
        const usersList = usersCollection.docs.map(doc => doc.data());
        setUsers(usersList);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <View style={styles.text}>
            <Text>Email :</Text>
          <Text >{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24 },
  text:{color:'black',fontSize:22,textAlign:"center",margin:30,backgroundColor:'grey',borderRadius:30,padding:20}
});

export default UserSignupListScreen;
