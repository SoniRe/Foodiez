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

    const filterData = await json?.data?.cards?.filter((item) => {
      return item?.card?.card.id === "restaurant_grid_listing";
    });

    setListOfRestaurants(
      filterData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants;
};

export default useRestaurantBody;
