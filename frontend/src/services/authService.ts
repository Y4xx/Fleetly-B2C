import api from './api';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  full_name: string;
  email: string;
  phone: string;
  city: string;
  password: string;
  password_confirmation: string;
}

export interface User {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  city: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export const authService = {
  login: async (payload: LoginPayload): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/login', payload);
    return response.data;
  },

  register: async (payload: RegisterPayload): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/register', payload);
    return response.data;
  },

  logout: async (): Promise<void> => {
    await api.post('/logout');
  },

  getUser: async (): Promise<User> => {
    const response = await api.get<User>('/user');
    return response.data;
  },
};
