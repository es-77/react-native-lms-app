import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
}

export function Button({
  onPress,
  title,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseStyles = 'rounded-lg items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-blue-600 active:bg-blue-700',
    secondary: 'bg-gray-600 active:bg-gray-700',
    outline: 'border-2 border-blue-600 active:bg-blue-50',
  };

  const sizeStyles = {
    sm: 'px-3 py-2',
    md: 'px-4 py-3',
    lg: 'px-6 py-4',
  };

  const textColorStyles = {
    primary: 'text-white',
    secondary: 'text-white',
    outline: 'text-blue-600',
  };

  const disabledStyles = disabled ? 'opacity-50' : '';

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
    >
      {isLoading ? (
        <ActivityIndicator color={variant === 'outline' ? '#2563eb' : '#ffffff'} />
      ) : (
        <Text
          className={`font-semibold ${textColorStyles[variant]} ${size === 'sm' ? 'text-sm' : 'text-base'}`}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
} 