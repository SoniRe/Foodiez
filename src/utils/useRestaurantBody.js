import { useState, useEffect } from "react";
import { HOME_PAGE_URL } from "./constants";

const useRestaurantBody = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(HOME_PAGE_URL);
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(json);
  };

  return listOfRestaurants;
};

export default useRestaurantBody;
