export type UserRole = 'student' | 'teacher' | 'parent';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  teacherId: string;
  createdAt: string;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  courseId: string;
  studentId: string;
  status: 'pending' | 'submitted' | 'graded';
  score?: number;
}

export interface Progress {
  id: string;
  studentId: string;
  courseId: string;
  score: number;
  lastUpdated: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
} 