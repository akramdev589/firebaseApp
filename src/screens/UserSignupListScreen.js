import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserSignupListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Signup List</Text>
      {/* Replace with actual user list implementation */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24 },
});

export default UserSignupListScreen;
