import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, session } = useAuth();

  async function handleLogIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { error } = await signIn(email, password);
      if (error) throw error;
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
    }
  }

  return !session ? (      
    <body>
    <div className="login form">
      <form onSubmit={handleLogIn}>
        <h1>LOGIN FORM</h1>
        <p>User Name</p>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Password</p>
        <input
          id="password"
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
  
        <div>
          <div className="btn-zarovnanie">
        <button
          type="submit"
          value="LOG IN"
          className="btn"
          >LOG IN</button>
          </div>
        <p className="btn-zarovnanie">
          Don't have an account?{" "}
          <Link to="/signup" className="text-emerald-300">
            Sign Up
          </Link>
        </p>
        </div>
      </form>
    </div>
    </body>
  ) : (
    <Navigate to="/" />
  );
}
