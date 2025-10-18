import React from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
// import auth from '@react-native-firebase/auth';
import firebase from "firebase/app";
import { getAuth } from "firebase/auth";

const Home = () => {
  const navigate = useNavigate();

  const newData = {
    name: "Ahmet",
    age: 22,
    city: "Ankara",
  };
  const addDocument = async (newData) => {
    try {
      const ordersCollectionRef = collection(db, "Password");
      await addDoc(ordersCollectionRef, newData);
    } catch (error) {
      console.error("Error adding new order: ", error);
    }
  };

  const getDocument = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Password"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  getDocument();

  const auth = getAuth(); // auth instance oluştur

  const user = auth.currentUser;
  console.log("user: ", user);

  return (
    <>

    <div className="flex items-center justify-center p-4">
    <h1 className="text-3xl font-bold text-red-500 hover:text-blue-500 cursor-pointer transition-all duration-300">
        Home
      </h1>
    </div>
     
      <button
        className="bg-blue-500 border border-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 cursor-pointer"
        disabled={true}
        onClick={() => addDocument(newData)}
      >
        Add New Data
      </button>

      <button onClick={() => navigate("/Giris")} className="bg-blue-500 border border-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 cursor-pointer">Login</button>
      <h1 className="text-3xl font-bold text-blue-500 underline">
        Tailwind Çalışıyor!
      </h1>
    </>
  );
};

export default Home;
