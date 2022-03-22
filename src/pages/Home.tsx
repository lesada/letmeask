import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import googleIcon from "../assets/images/google-icon.svg";

import { Button } from "../components/Button";

import '../styles/auth.scss';
import { useHistory } from "react-router-dom";

export function Home() {

  const history = useHistory();
  
  function navigateToNewRoom() {
    history.push("/rooms/new");
  }

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
          <button onClick={navigateToNewRoom} className="create-room">
            <img src={googleIcon} alt="Google Icon" />
            Create your room with Google
          </button>
          <div className="separator">or enter a room</div>
          <form action="">
            <input type="text" placeholder="Enter the room code" />
            <Button type="submit">Enter the room</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
