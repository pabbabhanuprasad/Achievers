import React, { useState, useEffect } from "react";

const Home = () => {
  const [step, setStep] = useState("signup");
  const [user, setUser] = useState(null);
  const [credentials, setCredentials] = useState({ name: "", password: "" });
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log("User1", user);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(user.name, JSON.stringify(user));
    alert("User registered successfully!");
    setStep("login");
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem(credentials.name));
    if (storedUser && storedUser.password === credentials.password) {
      setUser(storedUser);
      setStep("dashboard");
    } else {
      setError("Invalid Credentials");
    }
  };

  useEffect(() => {
    if (step === "dashboard") {
      fetch("https://hoblist.com/api/movieList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: "movies",
          language: "kannada",
          genre: "all",
          sort: "voting",
        }),
      })
        .then((response) => response.json())
        .then((data) => setMovies(data.result))
        .catch((error) => console.error("Error:", error));
    }
  }, [step]);

  return (
    <div className="container mt-5">
      {step === "signup" && (
        <div className="form-container" style={{ "margin-top": "0px" }}>
          <h2>Signup</h2>
          <form onSubmit={handleSignupSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={user?.name || ""}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={user?.password || ""}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={user?.email || ""}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={user?.phone || ""}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Profession</label>
              <select
                className="form-control"
                name="profession"
                value={user?.profession || "Student"}
                onChange={handleSignupChange}
              >
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Engineer">Engineer</option>
                <option value="Doctor">Doctor</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
          </form>
          <div>
            <p>Already I've an Aaccount</p>
            <button
              className="btn btn-primary mt-2"
              onClick={() => setStep("login")}
            >
              Login
            </button>
          </div>
        </div>
      )}

      {step === "login" && (
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={credentials.name}
                onChange={handleLoginChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={credentials.password}
                onChange={handleLoginChange}
                required
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <div>
            <p>I want to create an account</p>
            <button
              className="btn btn-primary mt-2"
              onClick={() => setStep("signup")}
            >
              SignUp
            </button>
          </div>
          </form>
        </div>
      )}

      {step === "dashboard" && (
        <div className="row">
          {movies.map((movie) => (
            <div key={movie._id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={movie.poster}
                  className="card-img-top"
                  alt={movie.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">
                    <strong>Votes:</strong> {movie.voting}
                  </p>
                  <p className="card-text">
                    <strong>Total Votes:</strong> {movie.totalVoted}
                  </p>
                  <p className="card-text">
                    <strong>Starring:</strong> {movie.stars.join(", ")}
                  </p>
                  <p className="card-text">
                    <strong>Genre:</strong> {movie.genre}
                  </p>
                  <p className="card-text">
                    <strong>Director:</strong> {movie.director.join(", ")}
                  </p>
                  <button className="btn btn-primary">Watch Trailer</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
