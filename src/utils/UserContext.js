import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Login",
});

export default UserContext;
