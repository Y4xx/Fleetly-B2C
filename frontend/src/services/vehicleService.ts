import api from './api';

export interface VehicleImage {
  id: string;
  url: string;
  path: string;
  original_name?: string;
  size?: number;
  mime_type?: string;
  created_at?: string;
}

export interface VehicleAgency {
  id: string;
  name: string;
  label: string;
  city: string;
}

export interface VehicleCategory {
  id: string;
  name: string;
  label: string;
}

export interface VehicleFuel {
  id: string;
  name: string;
  label: string;
}

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  registration_number: string;
  chassis_number: string;
  rental_price: string;
  dealer: string;
  fiscal_power: string;
  doors_number: number;
  last_mileage: number;
  purchase_value: string;
  circulation_start_date: string;
  in_service: boolean;
  is_rented: boolean;
  image_path: string | null;
  description: string;
  insurance_last_renewed_at: string | null;
  vignette_last_renewed_at: string | null;
  ct_last_renewed_at: string | null;
  category_id: string;
  fuel_id: string;
  agency_id: string;
  agency: VehicleAgency;
  category: VehicleCategory;
  fuel: VehicleFuel;
  options: unknown[];
  options_list: unknown[];
  images: VehicleImage[];
  primary_image: {
    id: string;
    url: string;
    path: string;
  } | null;
  images_count: number;
  created_at: string;
  updated_at: string;
  created_at_formatted: string;
  updated_at_formatted: string;
  circulation_start_date_formatted: string;
}

export interface VehicleResponse {
  status: number;
  message: string;
  data: {
    data: Vehicle[];
    meta: unknown[];
    links: unknown[];
  };
}

export const vehicleService = {
  getAvailableVehicles: async (city?: string): Promise<Vehicle[]> => {
    const params = city ? { city } : {};
    const response = await api.get<VehicleResponse>('/available-vehicles', { params });
    return response.data.data.data;
  },
};
