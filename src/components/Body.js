import RestaurantCard from "./RestaurantCard";
import resList from "./../utils/mockData";
import { useState } from "react";

const Body = () => {
  //State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);

  return (
    <div id="body">
      <h2>Foodiez</h2>
      <h1>Discover the best food & drinks in Delhi NCR</h1>
      <div id="search">
        <i className="ri-search-line"></i>
        <input type="text" placeholder="Search for restaurants and Food" />
      </div>

      <div id="filters">
        <button
          onClick={() => {
            //Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Rating 4.0+
        </button>
        <button
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.sla.deliveryTime < 30
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Fast Delivery
        </button>
      </div>

      <div id="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
