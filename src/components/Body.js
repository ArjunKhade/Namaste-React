import RestrorantCard from "./RestrorantCard";
import { restroData } from "../../data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API_URL } from "../utils/constant";

const Body = () => {
  const [listOfRestraurant, setListOfRestraurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestraurant, setFilteredRestraurant] = useState([]);

  useEffect(() => {
    fetchData();
    setListOfRestraurant(restroData);
    setFilteredRestraurant(restroData);
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();

    console.log(json);
    setListOfRestraurant(restroData);
    setFilteredRestraurant(restroData);
  };

  if (listOfRestraurant.length === 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">A good meal is just around the corner</p>
          <h1>Find your next <span>favorite bite.</span></h1>
          <p>
            Explore local restaurants, discover something delicious, and make
            mealtime the best part of your day.
          </p>
          <a className="primary-link" href="#restaurants">Explore restaurants <span aria-hidden="true">→</span></a>
          <div className="hero-note">
            <span className="hero-note-icon" aria-hidden="true">✦</span>
            <span>Good food, good mood. Made simple.</span>
          </div>
        </div>
        <div className="home-hero-art" aria-label="A delicious meal">
          <div className="hero-food-circle">
            <span aria-hidden="true">🍲</span>
          </div>
          <div className="hero-floating-card">
            <span aria-hidden="true">⭐</span>
            <span><strong>Local favorites</strong><small>Picked for your cravings</small></span>
          </div>
          <span className="hero-spark hero-spark-one" aria-hidden="true">✦</span>
          <span className="hero-spark hero-spark-two" aria-hidden="true">✧</span>
        </div>
      </section>

      <section className="home-categories" aria-label="Popular food categories">
        <a href="#restaurants"><span aria-hidden="true">🍛</span> Indian</a>
        <a href="#restaurants"><span aria-hidden="true">🍕</span> Pizza</a>
        <a href="#restaurants"><span aria-hidden="true">🍜</span> Asian</a>
        <a href="#restaurants"><span aria-hidden="true">🥗</span> Healthy</a>
        <a href="#restaurants"><span aria-hidden="true">🍰</span> Desserts</a>
      </section>

      <div className="search-filter-block">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            aria-label="Search restaurants"
            placeholder="Search restaurants..."
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
      <section className="restaurants-section" id="restaurants">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Made for your appetite</p>
            <h2>Restaurants near you</h2>
          </div>
          <p>{filteredRestraurant.length} places to explore</p>
        </div>
        <div className="res-container">
          {filteredRestraurant.map((restro) => (
            <Link to={"restaurant/" + restro.id} key={restro.id}>
              <RestrorantCard restroData={restro} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Body;
