import { CDN_URL } from "../utils/constants";
import defaultImage from "../../assets/default-image.png";

const MenuCard = (props) => {
  const { dishData } = props;
  const { name, price, description, imageId, defaultPrice } =
    dishData?.card?.info;

  const imageSource = imageId === undefined ? defaultImage : CDN_URL + imageId;

  return (
    <div id="menu-card">
      <div id="menu-card-left">
        <h3>{name}</h3>
        <h4>₹{price / 100 || defaultPrice / 100}</h4>
        <p>{description}</p>
      </div>

      <div id="menu-card-right">
        <img src={imageSource} alt="" />
      </div>
    </div>
  );
};

export default MenuCard;
