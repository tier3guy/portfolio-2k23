import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container center">
      <h1>404</h1>
      <p>Maybe Bigfoot has broken this page. Comeback to the homepage.</p>
      <Link to="/">
        <p className="border-bottom" style={{ marginTop: 20 }}>
          Go to the Homepage
        </p>
      </Link>
      {/* <span
        style={{
          color: "var(--orange)",
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "3em",
        }}
      >
        avinash
      </span> */}
    </div>
  );
};

export default Error;
