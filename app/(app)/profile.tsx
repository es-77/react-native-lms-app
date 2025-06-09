import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/ui/Button';
import { useAuth } from '../../utils/AuthContext';

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      Alert.alert('Error', 'Failed to logout. Please try again.');
    }
  };

  const menuItems = [
    {
      title: 'Account Settings',
      icon: 'settings-outline',
      onPress: () => Alert.alert('Coming Soon', 'This feature is under development'),
    },
    {
      title: 'Notifications',
      icon: 'notifications-outline',
      onPress: () => Alert.alert('Coming Soon', 'This feature is under development'),
    },
    {
      title: 'Privacy',
      icon: 'shield-outline',
      onPress: () => Alert.alert('Coming Soon', 'This feature is under development'),
    },
    {
      title: 'Help & Support',
      icon: 'help-circle-outline',
      onPress: () => Alert.alert('Coming Soon', 'This feature is under development'),
    },
  ];

  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-white p-6 border-b border-gray-200">
        <View className="items-center">
          <View className="w-24 h-24 bg-blue-100 rounded-full items-center justify-center mb-4">
            <Ionicons name="person" size={48} color="#2563eb" />
          </View>
          <Text className="text-2xl font-bold text-gray-900">{user?.name}</Text>
          <Text className="text-gray-600 capitalize">{user?.role}</Text>
          <Text className="text-gray-500 mt-1">{user?.email}</Text>
        </View>
      </View>

      <View className="p-4">
        <Text className="text-lg font-semibold text-gray-900 mb-4">Settings</Text>
        <View className="bg-white rounded-lg overflow-hidden">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={item.title}
              onPress={item.onPress}
              className={`flex-row items-center p-4 ${
                index !== menuItems.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <Ionicons name={item.icon as any} size={24} color="#4b5563" />
              <Text className="ml-3 text-gray-900 flex-1">{item.title}</Text>
              <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
            </TouchableOpacity>
          ))}
        </View>

        <View className="mt-8">
          <Button
            title="Sign Out"
            onPress={handleLogout}
            variant="outline"
            className="border-red-500"
          />
        </View>
      </View>
    </View>
  );
} 