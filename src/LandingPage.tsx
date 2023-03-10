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

    function handleLogOut(): void {
      signOut();
    }
    
    return  (
        <>            
      <div className="button-container">
        <div className="button-row">
          <Link to="/slovencina">
            <button className="btn-questions">Slovenčina</button>
          </Link>
          <Link to="/matematika">
            <button className="btn-questions">Matematika</button>
          </Link>
          <Link to="/informatika">
            <button className="btn-questions">Informatika</button>
          </Link>
        </div>
        <div className="button-row">
          <Link to="/dejepis">
            <button className="btn-questions">Dejepis</button>
          </Link>
          <Link to="/fyzika">
            <button className="btn-questions">Fyzika a Biológia</button>
          </Link>
          <Link to="/random">
            <button className="btn-questions">Random otázky</button>
          </Link>
        </div>
      </div>
      <button onClick={handleLogOut}>Odhlásiť sa</button>
      </>
    );
};
