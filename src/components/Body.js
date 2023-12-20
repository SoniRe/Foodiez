import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantBody from "../utils/useRestaurantBody";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //State Variable - Super powerful variable
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

  const listOfRestaurants = useRestaurantBody();

  // const RestaurantDiscountedCard = withDiscountLabel(RestaurantCard);

  const filteredItems = listOfRestaurants?.filter((res) => {
    return (
      res.info.name.toLowerCase().includes(query.toLowerCase()) &&
      res.info.avgRating >= rating &&
      res.info.sla.deliveryTime < delivery
    );
  });

  const offlineStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    width: "100%",
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1 style={offlineStyle}>
        Looks Like You are offline. Please Check Your Internet Connection
      </h1>
    );
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div id="body">
      <h2>Foodiez</h2>
      <h1>Discover the best food & drinks in Delhi NCR</h1>
      <div id="search">
        <i className="ri-search-line"></i>
        <input
          type="text"
          data-testid="searchInput"
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
