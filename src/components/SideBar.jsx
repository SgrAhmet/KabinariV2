import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  Drawer,
} from "@mui/material";
import {
  CreateNewFolder,
  AutoAwesomeMotion,
  People,
  Logout,
  Add,
} from "@mui/icons-material";

import { getAuth } from "firebase/auth";

const SideBar = ({ open, toggleDrawer }) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const handleNavigation = (route) => {
    navigate(route);
  };

  const sideBarItems = [
    { text: "Yeni Proje", icon: <CreateNewFolder /> , route: "/Yeni-Proje"},
    { text: "Tüm Projeler", icon: <AutoAwesomeMotion /> , route: "/Tüm-Projeler"},
    { text: "Müşteriler", icon: <People /> , route: "/Müşteriler"},
    { text: "Kullanıcı Ekle", icon: <Add /> , route: "/Kayit"},  
  ];

  const sideBarButtons = [
    { text: "Çıkış Yap", icon: <Logout /> , onClick: () => auth.signOut()},  
  ];
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      {/* <img style={{width:"80%",margin:"10px"}} src={logo} alt="Kabinari" srcset="" /> */}
      <Divider sx={{ borderBottomWidth: 3, backgroundColor: "#DEDDDB" }} />
      <List>
        {sideBarItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => handleNavigation(item.route)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {sideBarButtons.map((item) => (
          <ListItem key={item.text} disablePadding className="">
            <ListItemButton onClick={item.onClick} >
              <ListItemIcon sx={{color:"red"}}>{item.icon}</ListItemIcon>
              <ListItemText sx={{color:"red"}} primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default SideBar;
