import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div id="error">
      <h1>Oops!!!</h1>
      <h2>
        {err.status}: {err.statusText}
      </h2>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Error;
