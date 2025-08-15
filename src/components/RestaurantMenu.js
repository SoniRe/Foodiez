import { useState } from "react";
import ShimmerRes from "./ShimmerRes";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [veg, setVeg] = useState(false);
  const [vegStyle, setVegStyle] = useState({
    left: "5%",
    backgroundColor: "#fff",
  });
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <ShimmerRes />;
  }

  const { name, cuisines, locality, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const categoryFiltered =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  

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

        <ul id="accordian">
          {categoryFiltered?.map((c, index) => {
            return (
              // Controlled Component
              <RestaurantCategory
                key={c?.card?.card?.title}
                vegOption={veg}
                resData={c?.card?.card}
                showItems={index === showIndex && true}
                setMyIndex={() => {
                  index === showIndex
                    ? setShowIndex(null)
                    : setShowIndex(index);
                }}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
