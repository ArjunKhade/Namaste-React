import { SWIGGY_API_URL } from "./constant";
import { restroData } from "../../data";
import { useEffect, useState } from "react";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestraurant, setFilteredRestraurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const controller = new AbortController();

    const fetchRestaurantList = async () => {
      // try {
        // const response = await fetch(SWIGGY_API_URL, {
        //   signal: controller.signal,
        // });
        // if (!response.ok) {
        //   throw new Error(`Restaurant request failed (${response.status}).`);
        // }

        // await response.json();
        
      // } catch (requestError) {
      //   if (!controller.signal.aborted) {
      //     setError(
      //       requestError instanceof Error
      //         ? requestError.message
      //         : "Unable to load restaurants."
      //     );
      //   }
      // } finally {
      //   if (!controller.signal.aborted) {
      //     setLoading(false);
      //   }
      // }
      setRestaurantList(restroData);
      setFilteredRestraurant(restroData);
    };

    fetchRestaurantList();
    // return () => controller.abort();
  }, []);

  return {
    restaurantList,
    filteredRestraurant,
    setFilteredRestraurant,
    loading,
    error,
  };
};

export default useRestaurantList;