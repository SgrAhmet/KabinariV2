import React from 'react'
import { getAuth } from "firebase/auth";
import DynamicForm from "../../components/DynamicForm";

const AllProjects = () => {
  const auth = getAuth(); // auth instance oluştur

  const user = auth.currentUser;
  console.log("user: ", user);
  return (
    <div className="bg-primary h-screen">
    
    <h1 className="text-3xl font-bold text-red-500 hover:text-blue-500 cursor-pointer transition-all duration-300">AllProjects</h1>
    <DynamicForm />
    
    <button onClick={() => auth.signOut()} className="bg-blue-500 border border-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 cursor-pointer">Çıkış Yap</button>
    
    </div>
  )
}

export default AllProjects