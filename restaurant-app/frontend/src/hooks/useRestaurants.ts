import { Restaurant } from '@/types/restaurants';
import { useState, useEffect } from 'react';


// Custom hook to fetch and provide restaurants data
export function useRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/restaurants');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRestaurants(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch restaurants');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Add error and loading states to hook return
return { restaurants, isLoading, error };
}