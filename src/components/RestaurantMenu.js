import MenuCard from "./MenuCard";
import { useEffect, useState } from "react";
import ShimmerRes from "./ShimmerRes";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [veg, setVeg] = useState(false);
  const [vegStyle, setVegStyle] = useState({
    left: "5%",
    backgroundColor: "#fff",
  });
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5987633&lng=77.0786143&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <ShimmerRes />;
  }

  const { name, cuisines, locality, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const filteredVegItems = itemCards?.filter((dish) => {
    if (veg == true) {
      return dish?.card?.info?.itemAttribute.vegClassifier === "VEG";
    } else {
      return dish;
    }
  });

  return (
    <div id="menu">
      <div id="menu-top">
        <img src={CDN_URL + cloudinaryImageId} alt="" />
        <h1>{name}</h1>
        <h3>{cuisines?.join(", ")}</h3>
        <h3>{locality}</h3>
      </div>

      <div id="menu-bottom">
        <div id="veg-only-button">
          <div id="slider">
            <div
              onClick={() => {
                if (veg == false) {
                  setVeg(true);
                  setVegStyle({
                    right: "5%",
                    backgroundColor: "green",
                  });
                } else {
                  setVeg(false);
                  setVegStyle({
                    left: "5%",
                    backgroundColor: "#fff",
                  });
                }
              }}
              id="circle"
              style={vegStyle}
            ></div>
          </div>
          <h3>Veg Only</h3>
        </div>
        {filteredVegItems?.map((dish) => {
          return <MenuCard key={dish?.card?.info?.id} dishData={dish} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
