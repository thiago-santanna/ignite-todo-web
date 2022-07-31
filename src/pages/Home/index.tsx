import { useState } from "react";
import { LoginOrRegister } from "../../components/LoginOrRegister";
import { Navigate } from "react-router-dom";

export function Home() {
  const [authenticated, setAuthenticated] = useState(true);
  // Aqui vai ter requisicao para testar o login
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
