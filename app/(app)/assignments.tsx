import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

// Mock data - Replace with actual data from your backend
const mockAssignments = [
  {
    id: '1',
    title: 'Algebra Problem Set',
    course: 'Mathematics 101',
    dueDate: '2024-03-25T23:59:59',
    status: 'pending',
    type: 'homework',
  },
  {
    id: '2',
    title: 'Physics Lab Report',
    course: 'Physics Fundamentals',
    dueDate: '2024-03-28T23:59:59',
    status: 'submitted',
    type: 'lab',
  },
  {
    id: '3',
    title: 'Programming Project',
    course: 'Computer Science',
    dueDate: '2024-04-01T23:59:59',
    status: 'graded',
    type: 'project',
  },
];

type AssignmentStatus = 'all' | 'pending' | 'submitted' | 'graded';

export default function AssignmentsScreen() {
  const [filter, setFilter] = useState<AssignmentStatus>('all');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'submitted':
        return 'bg-blue-100 text-blue-800';
      case 'graded':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'homework':
        return 'book-outline';
      case 'lab':
        return 'flask-outline';
      case 'project':
        return 'code-outline';
      default:
        return 'document-outline';
    }
  };

  const filteredAssignments = mockAssignments.filter((assignment) => {
    if (filter === 'all') return true;
    return assignment.status === filter;
  });

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        <Text className="text-2xl font-bold text-gray-900 mb-6">Assignments</Text>

        <View className="flex-row space-x-2 mb-6">
          {(['all', 'pending', 'submitted', 'graded'] as const).map((status) => (
            <TouchableOpacity
              key={status}
              className={`px-4 py-2 rounded-full ${
                filter === status
                  ? 'bg-blue-600'
                  : 'bg-white border border-gray-200'
              }`}
              onPress={() => setFilter(status)}
            >
              <Text
                className={`capitalize ${
                  filter === status ? 'text-white' : 'text-gray-600'
                }`}
              >
                {status}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {filteredAssignments.map((assignment) => (
          <TouchableOpacity
            key={assignment.id}
            className="bg-white rounded-lg p-4 mb-4 shadow-sm"
            onPress={() => {
              // Navigate to assignment details
              console.log('Navigate to assignment:', assignment.id);
            }}
          >
            <View className="flex-row justify-between items-start mb-2">
              <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-900">
                  {assignment.title}
                </Text>
                <Text className="text-gray-600">{assignment.course}</Text>
              </View>
              <View
                className={`px-3 py-1 rounded-full ${getStatusColor(
                  assignment.status
                )}`}
              >
                <Text className="capitalize font-medium">
                  {assignment.status}
                </Text>
              </View>
            </View>

            <View className="flex-row items-center mt-2">
              <Ionicons
                name={getTypeIcon(assignment.type)}
                size={16}
                color="#6b7280"
              />
              <Text className="text-gray-600 ml-1">
                Due: {formatDate(assignment.dueDate)}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
} 