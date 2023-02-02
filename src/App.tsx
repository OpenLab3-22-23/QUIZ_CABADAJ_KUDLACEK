import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./App.css";
import { useAuth } from "./auth/Auth";
import LandingPage from "./LandingPage";
import Slovencina from "./Slovencina";
import { supabase } from "./supabase/supabaseClient";

function App() {
  const { session } = useAuth();
  useEffect(()=>{
    async function fetchData() {
      const { data, error } = await supabase
    .from('slovencina')
    .select()

    if (error)
      console.log(error);
    console.log(data)
    }
    
    fetchData();
  
  },[])

  return (
    <div className="w-screen h-screen ">
      {session ? (
        <LandingPage />
      ) : <Navigate to="/signup" />}
    </div>
  );
}


export default App;
