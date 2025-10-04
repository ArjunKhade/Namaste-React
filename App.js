import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header-block">
      <div className="header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-nuBzsGwqhxuMohWpYeHlzozjgdgH-rquGw&s"></img>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Link</li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body></Body>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div className="body"></div>
      <div className="search"></div>
      <div className="res-container">
        <RestroCard
          resName="Meghna Foods"
          cuisine="Italian, Asia"
          rating="4.4"
          time="48 Mins"
        />
        <RestroCard
          resName="Atithi"
          cuisine="North Indian, South Indian"
          rating="4.9"
          time="20 Mins"
        />
      </div>
    </div>
  );
};

const RestroCard = (props) => {
  const { resName, cuisine, rating, time } = props;

  return (
    <div>
      <div className="res-card">
        <img src="https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ=" />
        <h2>{resName}</h2>
        <h4>{cuisine}</h4>
        <h4>Rating {rating}</h4>
        <h4>{time}</h4>
      </div>
    </div>
  );
};

const restroData = [
  {
    resName: "Meghna Foods",
    cuisine: "Italian, Asia",
    rating: "4.4",
    time: "48 Mins",
    imgUrl:
      "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ=",
  },
  {
    resName: "Atithi",
    cuisine: "North Indian, South Indian",
    rating: "4.9",
    time: "20 Mins",
    imgUrl:
      "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ=",
  },
  {
    resName: "Urban Tadka",
    cuisine: "Punjabi, Chinese",
    rating: "4.2",
    time: "35 Mins",
    imgUrl:
      "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ=",
  },
  {
    resName: "Spice Villa",
    cuisine: "Mexican, Continental",
    rating: "4.6",
    time: "30 Mins",
    imgUrl:
      "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ=",
  },
  {
    resName: "Green Leaf",
    cuisine: "Salads, Healthy",
    rating: "4.8",
    time: "25 Mins",
    imgUrl:
      "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ=",
  },
];

//root of react
const root = ReactDOM.createRoot(document.getElementById("root"));

// convert the object to the h1 tag and put in root element
root.render(<AppLayout></AppLayout>);
