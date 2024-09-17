import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, Image } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() { 
  const colorScheme = useColorScheme();
  
  const isDarkMode = colorScheme === 'dark';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: {
          backgroundColor: isDarkMode ? '#131E22' : '#131E22',
          borderTopColor: isDarkMode ? '#ffff' : '#ffff',  
          height: 80, 
        },
        tabBarIconStyle: {
          alignItems: 'center',  
          justifyContent: 'center',
        },
        tabBarLabelStyle: {
          display: 'none',  // Hide tab labels
        },
        headerShown: useClientOnlyValue(false, true), 
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/main/cave.png')}
              style={{ width: 60, height: 60 }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="two"
        options={{
          title: '',
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/main/calender.png')}
              style={{ width: 60, height: 60 }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="three"
        options={{
          title: '',
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/main/joystick.png')}
              style={{ width: 60, height: 60 }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="four"
        options={{
          title: '',
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/main/group.png')}
              style={{ width: 60, height: 60 }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="five"
        options={{
          title: '',
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/main/profile.png')}
              style={{ width: 60, height: 60 }}
            />
          ),
        }}
      />
      
    </Tabs>
  );
}
