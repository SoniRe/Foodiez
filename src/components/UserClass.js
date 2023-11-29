import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name, "Child constructor");
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "dummy location",
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.name, "Child Component Did Mount");
    //API Call

    const url = `  https://api.github.com/users/akshaymarch7`;
    const data = await fetch(url);
    const finalData = await data.json();

    console.log(finalData);
    this.setState({
      name: finalData.name,
      location: finalData.location,
    });
  }

  componentDidUpdate() {
    console.log("Component Update");
  }

  componentWillUnmount(prevProps, prevState) {
    console.log("Unmount Happened");
  }

  render() {
    const { name, location } = this.state;

    console.log(this.props.name, "Child render");

    return (
      <div id="user-card">
        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
    );
  }
}

export default UserClass;
