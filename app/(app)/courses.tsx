import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

// Mock data - Replace with actual data from your backend
const mockCourses = [
  {
    id: '1',
    title: 'Mathematics 101',
    teacher: 'Dr. Smith',
    progress: 75,
    nextClass: '2024-03-20T10:00:00',
  },
  {
    id: '2',
    title: 'Physics Fundamentals',
    teacher: 'Prof. Johnson',
    progress: 60,
    nextClass: '2024-03-21T14:00:00',
  },
  {
    id: '3',
    title: 'Computer Science',
    teacher: 'Dr. Williams',
    progress: 90,
    nextClass: '2024-03-22T09:00:00',
  },
];

export default function CoursesScreen() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        <Text className="text-2xl font-bold text-gray-900 mb-6">My Courses</Text>

        {mockCourses.map((course) => (
          <TouchableOpacity
            key={course.id}
            className="bg-white rounded-lg p-4 mb-4 shadow-sm"
            onPress={() => {
              // Navigate to course details
              console.log('Navigate to course:', course.id);
            }}
          >
            <View className="flex-row justify-between items-start mb-2">
              <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-900">
                  {course.title}
                </Text>
                <Text className="text-gray-600">{course.teacher}</Text>
              </View>
              <View className="bg-blue-100 px-3 py-1 rounded-full">
                <Text className="text-blue-600 font-medium">
                  {course.progress}%
                </Text>
              </View>
            </View>

            <View className="flex-row items-center mt-2">
              <Ionicons name="time-outline" size={16} color="#6b7280" />
              <Text className="text-gray-600 ml-1">
                Next class: {formatDate(course.nextClass)}
              </Text>
            </View>

            <View className="mt-4">
              <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <View
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
} 