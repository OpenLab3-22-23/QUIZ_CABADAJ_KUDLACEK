import openlab from "./assets/openlab.svg";
import { useAuth } from "./auth/Auth";
import { useState, useEffect } from "react";
import Slovencina from "./Slovencina";
import LogIn from "./auth/Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Matematika from "./Matematika";
import Dejepis from "./Dejepis";
import Random from "./Random";
import Fyzika from "./Fyzika";
import Informatika from "./Informatika";

export default function LandingPage(): JSX.Element {
    const {signOut} = useAuth()
    const [loading, setLoading] = useState(false);

    function handleLogOut(): void {
      signOut();
    }
    
    const Loading = () => (
      <div className="loading">
        <div className="spinner"></div>
          <p>Načítava sa...</p>
      </div>
);


    function handleButtonClick() {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }

    useEffect(() => {
        setLoading(false);
    }, []);

    return  (
        <>
      <div className="button-container">
        <div className="button-row">
          <Link to="/slovencina">
            <button className="btn-questions" onClick={handleButtonClick}>Slovenčina</button>
          </Link>
          <Link to="/matematika">
            <button className="btn-questions" onClick={handleButtonClick}>Matematika</button>
          </Link>
          <Link to="/informatika">
            <button className="btn-questions" onClick={handleButtonClick}>Informatika</button>
          </Link>
        </div>
        <div className="button-row">
          <Link to="/dejepis">
            <button className="btn-questions" onClick={handleButtonClick}>Dejepis</button>
          </Link>
          <Link to="/fyzika">
            <button className="btn-questions" onClick={handleButtonClick}>Fyzika a Biológia</button>
          </Link>
          <Link to="/random">
            <button className="btn-questions" onClick={handleButtonClick}>Random otázky</button>
          </Link>
        </div>
      </div>
      {loading && <Loading />}
      <button onClick={handleLogOut}>Odhlásiť sa</button>
      </>
    );
};
