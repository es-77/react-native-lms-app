import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { useAuth } from '../../utils/AuthContext';

export default function AppLayout() {
  const { user } = useAuth();

  const getTabConfig = () => {
    switch (user?.role) {
      case 'student':
        return [
          {
            name: 'dashboard',
            title: 'Dashboard',
            icon: 'home',
          },
          {
            name: 'courses',
            title: 'Courses',
            icon: 'book',
          },
          {
            name: 'assignments',
            title: 'Assignments',
            icon: 'document-text',
          },
          {
            name: 'profile',
            title: 'Profile',
            icon: 'person',
          },
        ];
      case 'teacher':
        return [
          {
            name: 'dashboard',
            title: 'Dashboard',
            icon: 'home',
          },
          {
            name: 'classes',
            title: 'Classes',
            icon: 'people',
          },
          {
            name: 'students',
            title: 'Students',
            icon: 'school',
          },
          {
            name: 'profile',
            title: 'Profile',
            icon: 'person',
          },
        ];
      case 'parent':
        return [
          {
            name: 'dashboard',
            title: 'Dashboard',
            icon: 'home',
          },
          {
            name: 'progress',
            title: 'Progress',
            icon: 'trending-up',
          },
          {
            name: 'messages',
            title: 'Messages',
            icon: 'chatbubbles',
          },
          {
            name: 'profile',
            title: 'Profile',
            icon: 'person',
          },
        ];
      default:
        return [];
    }
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#6b7280',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb',
        },
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTintColor: '#1f2937',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      {getTabConfig().map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.icon as any} size={size} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
} 