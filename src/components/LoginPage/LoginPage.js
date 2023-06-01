import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";
import Modal from "react-modal";
import "./LoginPage.css";

Modal.setAppElement("#root"); // needed for accessibility reasons. Lets screen readers know which part of your app should be hidden when the modal is open

function LoginPage() {
  const context = useContext(AuthContext);
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signupModalIsOpen, setSignupModalIsOpen] = useState(false);

  const login = async () => {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const user = await response.json();
    if (response.ok) {
      context.login(user);
      navigate("/");
    } else {
      alert(`Error: ${user.message}`);
    }
  };

  const openSignupModal = () => {
    setSignupModalIsOpen(true);
  };

  const closeSignupModal = () => {
    setSignupModalIsOpen(false);
  };

  const signup = async () => {
    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
    } else {
      alert(`Error: ${data.message}`);
    }
    closeSignupModal();
  };

  return (
    <div className="container">
      <input
        className="input"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button" onClick={openSignupModal}>
        Signup Here
      </button>
      <button className="button" onClick={login}>
        Login
      </button>

      <Modal
        className="modal"
        isOpen={signupModalIsOpen}
        onRequestClose={closeSignupModal}
        contentLabel="Signup Modal"
      >
        <h2>Signup</h2>
        <form onSubmit={signup}>
          <input
            className="input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="button">
            Signup
          </button>
        </form>
        <button onClick={closeSignupModal} className="button">
          Cancel
        </button>
      </Modal>
    </div>
  );
}

export default LoginPage;
