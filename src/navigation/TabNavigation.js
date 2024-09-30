// App.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ContactFormScreen from '../screens/ContactFormScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UserSignupListScreen from '../screens/UserSignupListScreen';
import AppNavigator from './AppNavigator';
import { Image } from 'react-native';
import { ImagePath } from '../images';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
      <Tab.Navigator   screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
                case 'Home':
                    iconName =ImagePath.home;
                    break;
                case 'Dashboard':
                    iconName = ImagePath.dashbord;
                    break;
                case 'Contact Form':
                    iconName = ImagePath.contactForm;
                    break;
                case 'Profile':
                    iconName = ImagePath.profile;
                    break;
                case 'User Signup List':
                    iconName = ImagePath.signUpList;
                    break;
                default:
                    iconName = 'help-circle-outline';
            }
            return <Image source={iconName} style={{ width: 28, height: 28 }} />;
        },
    })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Dashboard" component={AppNavigator} />
        <Tab.Screen name="Contact Form" component={ContactFormScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="User Signup List" component={UserSignupListScreen} />
      </Tab.Navigator>
  );
};
export default TabNavigation