import React, { createContext, useContext, useState } from 'react';
import { AuthState, User } from './types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, role: User['role']) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
    error: null,
  });

  // Mock login function - Replace with actual Firebase implementation
  const login = async (email: string, password: string) => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      // TODO: Implement Firebase authentication
      // For now, using mock data
      const mockUser: User = {
        id: '1',
        name: 'Test User',
        email,
        role: 'student',
        createdAt: new Date().toISOString(),
      };
      setState({ user: mockUser, isLoading: false, error: null });
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      }));
    }
  };

  // Mock register function - Replace with actual Firebase implementation
  const register = async (email: string, password: string, name: string, role: User['role']) => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      // TODO: Implement Firebase registration
      // For now, using mock data
      const mockUser: User = {
        id: '1',
        name,
        email,
        role,
        createdAt: new Date().toISOString(),
      };
      setState({ user: mockUser, isLoading: false, error: null });
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      }));
    }
  };

  const logout = async () => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      // TODO: Implement Firebase logout
      setState({ user: null, isLoading: false, error: null });
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      }));
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 