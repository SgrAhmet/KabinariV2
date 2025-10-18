import React from "react";
import DynamicForm from "../../components/DynamicForm";
import SideBar from "../../components/SideBar";
import MySideBar from "../../components/mySideBar/MySideBar";

const AllProjects = () => {

  // const user = auth.currentUser;
  // console.log("user: ", user);

  //  SideBar===============================
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  //  SideBar===============================
  return (
    <div className="bg-primary h-screen">
      <button
        onClick={toggleDrawer(true)}
        className="bg-blue-500 border border-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 cursor-pointer"
      >
        Open Drawer
      </button>

      {/* <SideBar open={open} toggleDrawer={toggleDrawer} /> */}
      <MySideBar open={open} toggleDrawer={toggleDrawer} />

      <h1 className="text-3xl font-bold text-red-500 hover:text-blue-500 cursor-pointer transition-all duration-300">
        AllProjects
      </h1>
      <DynamicForm />

    
    </div>
  );
};

export default AllProjects;
