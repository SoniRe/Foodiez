import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [query, setQuery] = useState("");
  const [rating, setRating] = useState(0); //Min Rating is 0
  const [delivery, setDelivery] = useState(120); // Max Delivery Time Can be 120 mins
  const [ratingFilterStyle, setRatingFilterStyle] = useState({
    color: "rgb(67, 67, 67)",
    borderColor: "rgb(206, 206, 206)",
  });
  const [deliveryFilterStyle, setDeliveryFilterStyle] = useState({
    color: "rgb(67, 67, 67)",
    borderColor: "rgb(206, 206, 206)",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5987633&lng=77.0786143&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filteredItems = listOfRestaurants.filter((res) => {
    return (
      res.info.name.toLowerCase().includes(query.toLowerCase()) &&
      res.info.avgRating >= rating &&
      res.info.sla.deliveryTime < delivery
    );
  });

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div id="body">
      <h2>Foodiez</h2>
      <h1>Discover the best food & drinks in Delhi NCR</h1>
      <div id="search">
        <i className="ri-search-line"></i>
        <input
          type="text"
          placeholder="Search for restaurants and Food"
          onChange={(event) => {
            setQuery(event.target.value.toLowerCase());
          }}
        />
      </div>

      <div id="filters">
        <button
          style={ratingFilterStyle}
          onClick={() => {
            if (rating > 0) {
              setRating(0);
              setRatingFilterStyle({
                color: "rgb(67, 67, 67)",
                borderColor: "rgb(206, 206, 206)",
              });
            } else {
              //Want minimum Rating of 4
              setRating(4);
              setRatingFilterStyle({
                borderColor: "#000",
                color: "#000",
              });
            }
          }}
        >
          Rating 4.0+
        </button>
        <button
          style={deliveryFilterStyle}
          onClick={() => {
            if (delivery < 120) {
              setDelivery(120);
              setDeliveryFilterStyle({
                color: "rgb(67, 67, 67)",
                borderColor: "rgb(206, 206, 206)",
              });
            } else {
              //Want Delivery Under 30mins
              setDelivery(30);
              setDeliveryFilterStyle({
                borderColor: "#000",
                color: "#000",
              });
            }
          }}
        >
          Fast Delivery
        </button>
      </div>

      <div id="res-container">
        {filteredItems?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
