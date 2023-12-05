import MenuCard from "./MenuCard";

const RestaurantCategory = (props) => {
  const { vegOption, resData } = props;
  const { title, itemCards } = resData;

  const filteredVegItems = itemCards?.filter((dish) => {
    if (vegOption == true) {
      return dish?.card?.info?.itemAttribute.vegClassifier === "VEG";
    } else {
      return dish;
    }
  });

  if (filteredVegItems.length === 0) {
    return;
  }

  return (
    <li>
      <label htmlFor={title}>
        {title}
        <span>
          <i class="ri-arrow-down-s-line"></i>
        </span>
      </label>
      <input type="radio" name="accordian" id={title} />
      <div className="content">
        {filteredVegItems?.map((dish) => {
          return <MenuCard key={dish?.card?.info?.id} dishData={dish} />;
        })}
      </div>
    </li>
  );
};

export default RestaurantCategory;
