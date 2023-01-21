import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, session } = useAuth();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { error } = await signUp(email, password);
      if (error) throw error;
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
    }
  }

  return !session ? (
    <body>
    <div className="login form">
      <form onSubmit={handleSubmit}>
        <h1>SIGN UP</h1>
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
        <div className="btn-zarovnanie">
          <button
            type="submit"
            value="Sign Up"
            className="btn"
          >Sign up</button>
        </div>
        <p className="btn-zarovnanie">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-300">
            LogIn
          </Link>
        </p>
      </form>
    </div>
    </body>
  ) : (
    <Navigate to="/" />
  );
}
