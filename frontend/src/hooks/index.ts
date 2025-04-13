import axios from "axios";
import { useEffect, useState } from "react";

export interface Rides {
  _id: string;
  user: string;
  username: string;
  vehicleName: string;
  availableSeats: number;
  travelFrom: string;
  travelTo: string;
  contactNumber: string;
  males: number;
  females: number;
  travelDate: string;
  createdAt: string;
  updatedAt: string;
}

export const useRides = () => {
  const [loading, setLoading] = useState(true);
  const [rides, setRides] = useState<Rides[]>([]);

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/post/all");
        console.log(response);
        
        setRides(response.data.posts);
      } catch (error) {
        console.error("Error fetching rides:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRides();
  }, []);

  return { loading, rides };
};
