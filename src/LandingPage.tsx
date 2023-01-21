import openlab from "./assets/openlab.svg";
import { useAuth } from "./auth/Auth";

export default function LandingPage(): JSX.Element {

    const {signOut} = useAuth()

    function handleLogOut(): void {
        signOut();
    }

    return  (
        <>
        <div className="button-container">
            <div className="button-row">
                <button className="btn-questions">Slovenčina</button>
                <button className="btn-questions">Matematika</button>
                <button className="btn-questions">Informatika</button>
            </div>
            <div className="button-row">
                <button className="btn-questions">Dejepis</button>
                < button className="btn-questions">Fyzika a Biológia</button>
                <button className="btn-questions">Random otázky</button>
            </div>
      </div>
      <button onClick={handleLogOut}>Odhlásiť sa</button>
      </>
      
        
    )
}