import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, SetIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      SetIsOnline(true);
    });

    window.addEventListener("offline", () => {
      SetIsOnline(false);
    });
  }, []);

  return isOnline;
};

export default useOnlineStatus;
