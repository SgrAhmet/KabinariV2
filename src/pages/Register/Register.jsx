import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { app } from "../../firebaseConfig"; 

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();

  const user = auth.currentUser;
  console.log("user: ", user?.email);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email, password);


        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const user = userCredential.user;
                // console.log(user);
                // userCredential.user.sendEmailVerification();
                // alert("E-posta adresinize doğrulama e-postası gönderildi!");
                // console.log("user2: ", auth.currentUser?.email);

                sendEmailVerification(userCredential.user)
                .then(() => {
                  alert("E-posta adresinize doğrulama e-postası gönderildi!");
                })
                .catch((err) => {
                //   console.error("Doğrulama e-postası gönderilemedi:", err);
                  alert("Doğrulama e-postası gönderilemedi!");

                });

            })
            .catch((error) => {
                 const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);

                switch (error.code) {
                    // 👇 Kayıt sırasında en sık görülen hatalar
                    case "auth/email-already-in-use":
                      alert("⚠️ Bu e-posta adresi zaten kayıtlı!");
                      break;
              
                    case "auth/invalid-email":
                      alert("⚠️ Geçersiz e-posta adresi. Lütfen doğru bir adres girin.");
                      break;
              
                    case "auth/weak-password":
                      alert("⚠️ Şifre çok zayıf. En az 6 karakter olmalı.");
                      break;
              
                    case "auth/missing-email":
                      alert("⚠️ Lütfen e-posta adresinizi girin.");
                      break;
              
                    case "auth/internal-error":
                      alert("⚠️ Sunucu hatası oluştu. Lütfen tekrar deneyin.");
                      break;
              
                    case "auth/network-request-failed":
                      alert("⚠️ Ağ hatası. Lütfen internet bağlantınızı kontrol edin.");
                      break;
              
                    case "auth/too-many-requests":
                      alert("⚠️ Çok fazla deneme yaptınız. Lütfen birkaç dakika bekleyin.");
                      break;
              
                    case "auth/operation-not-allowed":
                      alert("⚠️ E-posta/şifre ile kayıt Firebase üzerinde etkin değil.");
                      break;
              
                    case "auth/invalid-password":
                      alert("⚠️ Geçersiz şifre. Lütfen kontrol edin.");
                      break;
              
                    case "auth/missing-password":
                      alert("⚠️ Lütfen bir şifre girin.");
                      break;
              
                    // 👇 Giriş işlemi sırasında görülebilecek hatalar
                    case "auth/user-not-found":
                      alert("⚠️ Bu e-posta adresine ait bir kullanıcı bulunamadı.");
                      break;
              
                    case "auth/wrong-password":
                      alert("⚠️ Şifre yanlış. Lütfen tekrar deneyin.");
                      break;
              
                    case "auth/user-disabled":
                      alert("⚠️ Bu kullanıcı hesabı devre dışı bırakılmış.");
                      break;
              
                    case "auth/invalid-credential":
                      alert("⚠️ E-posta veya şifre geçersiz.");
                      break;
              
                    case "auth/invalid-verification-code":
                      alert("⚠️ Doğrulama kodu geçersiz veya süresi dolmuş.");
                      break;
              
                    case "auth/invalid-verification-id":
                      alert("⚠️ Doğrulama ID’si geçersiz.");
                      break;
                }
            });
    }










  return (
    <div>


        <h1 className="text-3xl font-bold text-blue-500 underline">Register</h1>

        <form onSubmit={handleSubmit} autoComplete="off">
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} autoComplete="off" />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Register