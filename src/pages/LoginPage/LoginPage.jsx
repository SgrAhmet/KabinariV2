import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (auth.currentUser.emailVerified) {
        alert("Giriş başarılı!");
        navigate("/allprojects");
      } else {
        alert("Lütfen e-postanızı doğrulayın!");
      }
    } catch (error) {
      alert("Giriş başarısız: " + error.message);
    }

  };
  return (
    <>
      <form onSubmit={handleLogin} autoComplete="off">
        <input
          type="email"
          placeholder="E-posta"
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Şifre"
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
        <button type="submit">Giriş Yap</button>
      </form>
      <h1>Login</h1>

      <button onClick={() => navigate("/")}>Home</button>
    </>
  );
};

export default LoginPage;
