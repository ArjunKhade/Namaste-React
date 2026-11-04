import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./RestaurantMenu.css";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaCategory from "./RestaCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(-1);

  const [menuSections, setMenuSections] = useState([]);
  const [meta, setMeta] = useState({
    name: "Restaurant Name",
    description: "A short pleasant description about the restaurant.",
    rating: "4.5",
    time: "30 Mins",
    costForTwo: "₹400",
    imgUrl:
      "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ=",
  });

  useEffect(() => {
    if (!restaurant) {
      setMenuSections([]);
      return;
    }

    setMeta({
      name: restaurant.resName || "Restaurant Name",
      description: restaurant.description || "A short pleasant description about the restaurant.",
      rating: restaurant.rating ?? "4.5",
      time: restaurant.time || "30 Mins",
      costForTwo: restaurant.costForTwo || "₹400",
      imgUrl: restaurant.imgUrl || "",
    });

    setMenuSections(restaurant.menuSections || []);
  }, [restaurant]);

  return (
    <div className="menu-page">
      <header className="menu-header">
        <img className="menu-img" src={meta.imgUrl} alt={meta.name} />
        <div className="menu-meta">
          <h1 className="menu-title">{meta.name}</h1>
          <p className="menu-desc">{meta.description}</p>
          <div className="menu-stats">
            <span className="badge">⭐ {meta.rating}</span>
            <span className="badge">{meta.time}</span>
            <span className="badge">Cost for two: {meta.costForTwo}</span>
          </div>
          <div className="menu-actions">
            <button className="btn primary">Order Online</button>
            <button className="btn ghost">Share</button>
          </div>
        </div>
      </header>

      <main className="menu-body">
        {menuSections.length === 0 ? (
          <p style={{ padding: 20 }}>No menu available.</p>
        ) : (
          menuSections.map((section, index) => (
            <RestaCategory
              section={section}
              key={section.id}
              showItems={index === showIndex}
              setShowItems={() =>
                setShowIndex((currentIndex) =>
                  currentIndex === index ? -1 : index
                )
              }
            />
          ))
        )}
      </main>
    </div>
  );
};

export default RestaurantMenu;
