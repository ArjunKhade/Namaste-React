import { useEffect, useState } from "react";
import { restroData } from "../../data";
import { BASE_URL } from "./constant";

const useRestaurantMenu = (resId) => {
    
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    if (!resId) {
      setRestaurant(null);
      return;
    }

    let cancelled = false;
    const id = Number(resId);
    const local = restroData.find((r) => r.id === id) || null;

    const fetchRemote = async () => {
      try {
        const res = await fetch(BASE_URL + resId);
        if (!res.ok) throw new Error("Network error");
        const json = await res.json();
        // prefer parsed remote data if available, otherwise merge with local
        const remoteData = json?.data || json || {};
        // remote may have nested structure; keep remote top-level fields and fallback to local
        const merged = {
          ...(local || {}),
          ...(remoteData || {}),
        };
        if (!cancelled) setRestaurant(merged);
      } catch (err) {
        // on error fallback to local data
        if (!cancelled) setRestaurant(local);
      }
    };

    fetchRemote();

    return () => {
      cancelled = true;
    };
  }, [resId]);

  return restaurant;
};

export default useRestaurantMenu;
