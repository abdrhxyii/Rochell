import { Tabs } from 'expo-router';
import { Home, Search, Heart, ShoppingBag, UserCircle } from 'lucide-react-native';
import React from 'react';

export default function TabLayout() {

  return (
    <Tabs 
      screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'white',
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Home color={color} size={focused ? 26 : 24} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <Search color={color} size={focused ? 26 : 24} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          tabBarIcon: ({ color, focused }) => (
            <Heart color={color} size={focused ? 26 : 24} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, focused }) => (
            <ShoppingBag color={color} size={focused ? 26 : 24} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color, focused }) => (
            <UserCircle color={color} size={focused ? 26 : 24} />
          ),
        }}
      />
    </Tabs>
  );
}
