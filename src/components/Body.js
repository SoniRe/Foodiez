import RestaurantCard from "./RestaurantCard";
import resList from "./../utils/mockData";

const Body = () => {
  return (
    <div id="body">
      <h2>Foodiez</h2>
      <h1>Discover the best food & drinks in Delhi NCR</h1>
      <div id="search">
        <i className="ri-search-line"></i>
        <input type="text" placeholder="Search for restaurants and Food" />
      </div>
      <div id="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
