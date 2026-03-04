import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

interface LocationState {
  city: string | null;
  isLoading: boolean;
  error: string | null;
  requestLocation: () => Promise<void>;
}

export const useLocation = (): LocationState => {
  const [city, setCity] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requestLocation = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Location permission denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const [geocode] = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (geocode?.city) {
        setCity(geocode.city);
      } else if (geocode?.region) {
        setCity(geocode.region);
      }
    } catch {
      setError('Failed to get location');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestLocation();
  }, []);

  return { city, isLoading, error, requestLocation };
};
