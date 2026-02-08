import RestrorantCard from "./RestrorantCard";
import { restroData } from "../../data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestraurant, setListOfRestraurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestraurant, setFilteredRestraurant] = useState([]);

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
    setFilteredRestraurant(restroData);
  };

  if (listOfRestraurant.length === 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div>
      <div className="body"></div>
      <div className="search-filter-block">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (searchText.trim() === "") {
                  setFilteredRestraurant(listOfRestraurant);
                } else {
                  const filteredRestro = listOfRestraurant.filter((restro) =>
                    restro.resName.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setFilteredRestraurant(filteredRestro);
                }
              }
            }}
          />
          <button
            onClick={() => {
              if (searchText.trim() === "") {
                setFilteredRestraurant(listOfRestraurant);
              } else {
                const filteredRestro = listOfRestraurant.filter((restro) =>
                  restro.resName.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestraurant(filteredRestro);
              }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter btn"
          onClick={() => {
            const fldRestraurant = listOfRestraurant.filter(
              (restro) => restro.rating > 4.5
            );
            setFilteredRestraurant(fldRestraurant);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestraurant.map((restro) => (
          <Link to={"restaurant/"+ restro.id} key={restro.id}><RestrorantCard restroData={restro} /></Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
