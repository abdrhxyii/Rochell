import { Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Home, Search, Heart, ShoppingBag, UserCircle, ArrowLeft, Bell } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

export default function TabLayout() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync('#ffffff');
  }, []);

  return (
    <Tabs 
      screenOptions={{
        headerShown: true, 
        headerStyle: {
          backgroundColor: "#fff",
          elevation: 0, 
          shadowOpacity: 0, 
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          color: '#000',
          fontWeight: '700',
          fontSize: 25,
          shadowColor: 'none'
        },
        headerTintColor: 'black',
        headerTitleAlign: 'center',
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'white',
          height: 60,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          paddingBottom: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitleAlign: 'left',
          headerTitle: 'Discover',
          tabBarIcon: ({ color, focused }) => (
            <Home color={color} size={24} style={{ marginTop: 7 }}/>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Bell color={'black'} size={24} style={{ marginRight: 20 }} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <Search color={color} size={24} style={{ marginTop: 7 }}/>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          tabBarIcon: ({ color }) => (
            <Heart color={color} size={24}  style={{ marginTop: 7 }}/>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Bell color={'black'} size={25} style={{ marginRight: 20 }} />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity 
              style={{
                borderRadius: 50, 
                padding: 8, 
                marginHorizontal: 5, 
              }}
              >
              <ArrowLeft color="black" size={25} />
            </TouchableOpacity>
          )
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => (
            <ShoppingBag color={color} size={24} style={{ marginTop: 7 }}/>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Bell color={'black'} size={25} style={{ marginRight: 20 }} />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity 
              style={{
                borderRadius: 50, 
                padding: 8, 
                marginHorizontal: 5, 
              }}
              >
              <ArrowLeft color="black" size={25} />
            </TouchableOpacity>
          )
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => (
            <UserCircle color={color} size={24} style={{ marginTop: 7 }}/>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Bell color={'black'} size={25} style={{ marginRight: 20 }} />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity 
              style={{
                borderRadius: 50, 
                padding: 8, 
                marginHorizontal: 5, 
              }}
              >
              <ArrowLeft color="black" size={25} />
            </TouchableOpacity>
          )
        }}
      />
    </Tabs>
  );
}
