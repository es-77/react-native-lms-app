import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useAuth } from '../../utils/AuthContext';

export default function DashboardScreen() {
  const { user } = useAuth();

  const renderStudentDashboard = () => (
    <View className="space-y-6">
      <View className="bg-white rounded-lg p-4 shadow-sm">
        <Text className="text-lg font-semibold text-gray-900 mb-2">
          Upcoming Assignments
        </Text>
        <View className="space-y-3">
          <View className="border-l-4 border-blue-500 pl-3">
            <Text className="font-medium text-gray-900">Math Assignment</Text>
            <Text className="text-sm text-gray-600">Due in 2 days</Text>
          </View>
          <View className="border-l-4 border-yellow-500 pl-3">
            <Text className="font-medium text-gray-900">Science Project</Text>
            <Text className="text-sm text-gray-600">Due in 5 days</Text>
          </View>
        </View>
      </View>

      <View className="bg-white rounded-lg p-4 shadow-sm">
        <Text className="text-lg font-semibold text-gray-900 mb-2">
          Recent Grades
        </Text>
        <View className="space-y-3">
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-900">Mathematics</Text>
            <Text className="font-semibold text-green-600">A</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-900">Science</Text>
            <Text className="font-semibold text-blue-600">B+</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderTeacherDashboard = () => (
    <View className="space-y-6">
      <View className="bg-white rounded-lg p-4 shadow-sm">
        <Text className="text-lg font-semibold text-gray-900 mb-2">
          Class Overview
        </Text>
        <View className="space-y-3">
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-900">Total Students</Text>
            <Text className="font-semibold text-blue-600">24</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-900">Active Courses</Text>
            <Text className="font-semibold text-blue-600">4</Text>
          </View>
        </View>
      </View>

      <View className="bg-white rounded-lg p-4 shadow-sm">
        <Text className="text-lg font-semibold text-gray-900 mb-2">
          Pending Tasks
        </Text>
        <View className="space-y-3">
          <View className="border-l-4 border-red-500 pl-3">
            <Text className="font-medium text-gray-900">Grade Math Assignments</Text>
            <Text className="text-sm text-gray-600">Due today</Text>
          </View>
          <View className="border-l-4 border-yellow-500 pl-3">
            <Text className="font-medium text-gray-900">Prepare Science Lesson</Text>
            <Text className="text-sm text-gray-600">Due tomorrow</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderParentDashboard = () => (
    <View className="space-y-6">
      <View className="bg-white rounded-lg p-4 shadow-sm">
        <Text className="text-lg font-semibold text-gray-900 mb-2">
          Child's Progress
        </Text>
        <View className="space-y-3">
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-900">Overall Grade</Text>
            <Text className="font-semibold text-green-600">A-</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-900">Attendance Rate</Text>
            <Text className="font-semibold text-blue-600">95%</Text>
          </View>
        </View>
      </View>

      <View className="bg-white rounded-lg p-4 shadow-sm">
        <Text className="text-lg font-semibold text-gray-900 mb-2">
          Recent Updates
        </Text>
        <View className="space-y-3">
          <View className="border-l-4 border-green-500 pl-3">
            <Text className="font-medium text-gray-900">Math Test Results</Text>
            <Text className="text-sm text-gray-600">Scored 92%</Text>
          </View>
          <View className="border-l-4 border-blue-500 pl-3">
            <Text className="font-medium text-gray-900">Science Project Due</Text>
            <Text className="text-sm text-gray-600">In 3 days</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderDashboard = () => {
    switch (user?.role) {
      case 'student':
        return renderStudentDashboard();
      case 'teacher':
        return renderTeacherDashboard();
      case 'parent':
        return renderParentDashboard();
      default:
        return null;
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        <Text className="text-2xl font-bold text-gray-900 mb-6">
          Welcome, {user?.name}
        </Text>
        {renderDashboard()}
      </View>
    </ScrollView>
  );
} 