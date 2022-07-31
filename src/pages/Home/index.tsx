import { useState } from "react";
import { LoginOrRegister } from "../../components/LoginOrRegister";
import { Navigate } from "react-router-dom";

export function Home() {
  const [authenticated, setAuthenticated] = useState(false);

  sessionStorage.getItem("sessionUser") &&
    sessionStorage.removeItem("sessionUser");

  return (
    <>
      {authenticated ? (
        <Navigate to="/dashboard" replace={true} />
      ) : (
        <LoginOrRegister />
      )}
    </>
  );
}
