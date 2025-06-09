import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

// Mock data - Replace with actual data from your backend
const mockClasses = [
  {
    id: '1',
    title: 'Mathematics 101',
    teacher: 'Dr. Smith',
    students: 24,
    schedule: 'Mon, Wed, Fri 10:00 AM',
    room: 'Room 101',
  },
  {
    id: '2',
    title: 'Physics Fundamentals',
    teacher: 'Prof. Johnson',
    students: 20,
    schedule: 'Tue, Thu 2:00 PM',
    room: 'Lab 203',
  },
  {
    id: '3',
    title: 'Computer Science',
    teacher: 'Dr. Williams',
    students: 18,
    schedule: 'Mon, Wed 1:00 PM',
    room: 'Room 305',
  },
];

export default function ClassesScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        <Text className="text-2xl font-bold text-gray-900 mb-6">My Classes</Text>

        {mockClasses.map((classItem) => (
          <TouchableOpacity
            key={classItem.id}
            className="bg-white rounded-lg p-4 mb-4 shadow-sm"
            onPress={() => {
              // Navigate to class details
              console.log('Navigate to class:', classItem.id);
            }}
          >
            <View className="flex-row justify-between items-start mb-2">
              <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-900">
                  {classItem.title}
                </Text>
                <Text className="text-gray-600">{classItem.teacher}</Text>
              </View>
              <View className="bg-blue-100 px-3 py-1 rounded-full">
                <Text className="text-blue-600 font-medium">
                  {classItem.students} students
                </Text>
              </View>
            </View>

            <View className="space-y-2 mt-3">
              <View className="flex-row items-center">
                <Ionicons name="time-outline" size={16} color="#6b7280" />
                <Text className="text-gray-600 ml-2">{classItem.schedule}</Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="location-outline" size={16} color="#6b7280" />
                <Text className="text-gray-600 ml-2">{classItem.room}</Text>
              </View>
            </View>

            <View className="flex-row justify-end mt-4 space-x-2">
              <TouchableOpacity
                className="bg-blue-50 px-3 py-1 rounded-full"
                onPress={() => {
                  // Navigate to attendance
                  console.log('View attendance for class:', classItem.id);
                }}
              >
                <Text className="text-blue-600 font-medium">Attendance</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-green-50 px-3 py-1 rounded-full"
                onPress={() => {
                  // Navigate to grades
                  console.log('View grades for class:', classItem.id);
                }}
              >
                <Text className="text-green-600 font-medium">Grades</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
} 