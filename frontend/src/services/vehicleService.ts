import api from './api';

export interface Vehicle {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  price_per_day: string;
  city: string;
  image_url: string | null;
  is_available: boolean;
  seats: number;
  transmission: string;
  fuel_type: string;
  rating: string;
  created_at: string;
  updated_at: string;
}

export interface VehicleResponse {
  data: Vehicle[];
}

export const vehicleService = {
  getAvailableVehicles: async (city?: string): Promise<Vehicle[]> => {
    const params = city ? { city } : {};
    const response = await api.get<VehicleResponse>('/available-vehicles', { params });
    return response.data.data;
  },
};
