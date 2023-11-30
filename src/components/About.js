import aboutImage from "./../../assets/ice-cream-image.avif";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About2 extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent render");

    return (
      <div id="about">
        <div id="about-page1">
          <div id="about-left">
            <img src={aboutImage} alt="" />
          </div>

          <div id="about-right">
            <h1>About Foodiez</h1>
            <p>
              Welcome to Foodiez – where delicious moments are just a click
              away! We're not just a food delivery app; we're your passport to
              culinary delights. With a curated selection of top-notch local
              eateries, we bring quality and convenience to your table. Explore
              diverse cuisines, enjoy easy ordering, and savor swift deliveries.
              Your culinary journey begins here – welcome to Foodiez, where
              every meal is a celebration!
            </p>
            <button>
              Discover More <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
        <div id="about-page2">
          <UserClass name="First" location="Dehradun" />
        </div>
      </div>
    );
  }
}

const About = () => {
  const fnc = async function abcd() {};
  console.log(fnc);

  return (
    <div id="about">
      <div id="about-page1">
        <div id="about-left">
          <img src={aboutImage} alt="" />
        </div>

        <div id="about-right">
          <h1>About Foodiez</h1>
          <p>
            Welcome to Foodiez – where delicious moments are just a click away!
            We're not just a food delivery app; we're your passport to culinary
            delights. With a curated selection of top-notch local eateries, we
            bring quality and convenience to your table. Explore diverse
            cuisines, enjoy easy ordering, and savor swift deliveries. Your
            culinary journey begins here – welcome to Foodiez, where every meal
            is a celebration!
          </p>
          <button>
            Discover More <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
