import { Link } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";


import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";

import { Button } from "../components/Button";

import "../styles/auth.scss";

export function NewRoom() {
  const {user} = useAuth();
  console.log(user)
  
  return (
    <div id="page-auth">
      <aside>
        <img src={illustration} alt="Ilustration of Questions and Answers" />
        <strong>Create Q&amp;A live</strong>
        <p>Answer to questions in real time </p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="Let me ask" />
          <h2>Create a new room</h2>
          <form action="">
            <input type="text" placeholder="Room name" />
            <Button type="submit">Create room</Button>
          </form>
          <p>
            Do you want to enter a existing room? <Link to="/">Click here</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
