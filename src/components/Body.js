import RestrorantCard from "./RestrorantCard";
import restroData from "../../data";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestraurant, setListOfRestraurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4640087729816&lng=77.02618695368315&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    setListOfRestraurant(restroData);
  };

  if (listOfRestraurant.length === 0) {
    return <h2>Loading.....</h2>;
  }

  return (
    <div>
      <div className="body"></div>
      <div className="search"></div>
      <button
        className="filter btn"
        onClick={() => {
          const filteredRestraurant = listOfRestraurant.filter(
            (restro) => restro.rating > 4.5
          );
          setListOfRestraurant(filteredRestraurant);
        }}
      >
        Top Rated Restrorent
      </button>
      <div className="res-container">
        {listOfRestraurant.map((restro) => (
          <RestrorantCard key={restro.id} restroData={restro} />
        ))}
      </div>
    </div>
  );
};

export default Body;
