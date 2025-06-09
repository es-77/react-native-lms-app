import React from 'react';
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps, Text, View } from 'react-native';

interface TextInputProps extends RNTextInputProps {
  label?: string;
  error?: string;
  containerClassName?: string;
}

export function TextInput({
  label,
  error,
  containerClassName = '',
  className = '',
  ...props
}: TextInputProps) {
  return (
    <View className={`mb-4 ${containerClassName}`}>
      {label && (
        <Text className="text-sm font-medium text-gray-700 mb-1">
          {label}
        </Text>
      )}
      <RNTextInput
        className={`px-4 py-3 rounded-lg border ${
          error ? 'border-red-500' : 'border-gray-300'
        } bg-white ${className}`}
        placeholderTextColor="#9CA3AF"
        {...props}
      />
      {error && (
        <Text className="text-sm text-red-500 mt-1">
          {error}
        </Text>
      )}
    </View>
  );
} 