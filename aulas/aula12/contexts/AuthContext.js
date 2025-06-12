import { createContext, useState } from "react";
import * as AuthService from "../services/AuthService";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({ login: null, logado: false });
  const [erro, setErro] = useState("");

  const login = async ({ email, senha }) => {
    try {
      await AuthService.signIn({ email, password: senha });
      setUsuario({ login: email, logado: true });
      setErro("");
    } catch (error) {
      setErro(`Deu ruim: ${error.message}`);
    }
  };

  const logout = () => {
    setUsuario({ login: null, logado: false });
  };

  const registrar = async ({ email, senha }) => {
    try {
      await AuthService.signUp({ email, password: senha });
      setUsuario({ login: email, logado: true });
      setErro("");
    } catch (error) {
      setErro(`Deu ruim: ${error.message}`);
    }
  };

  return (
    <AuthContext.Provider value={{ usuario, erro, login, logout, registrar }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
