import { View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FirebaseLogin from '../screens/FirebaseLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabNavigation from './TabNavigation';
import FirebaseSignUp from '../screens/FirebaseSignUp';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      let isLogin = await AsyncStorage.getItem('IsLogin');
      isLogin = JSON.parse(isLogin);
      setIsAuth(isLogin);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    checkLoginStatus();
  }, []);


  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuth ? 'TabNavigation' : 'FirebaseLogin'}>
        <Stack.Screen
          component={FirebaseLogin}
          name={'FirebaseLogin'}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          component={FirebaseSignUp}
          name={'FirebaseSignUp'}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={TabNavigation}
          name={'TabNavigation'}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
