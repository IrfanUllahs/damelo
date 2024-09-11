"use client";
import React from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/navigation";

export default function ProfileMenu({ anchorEl, open, onClose, status }) {
  const router = useRouter();

  const handleMenuItemClick = (arg) => {
    onClose();

    if (arg === "Profile") {
      router.push("/dashboard-my-profile");
    } else if (arg === "Logout") {
      router.push("/");
      localStorage.removeItem("fooduser");
    } else if (arg === "Dashboard") {
      router.push("/dashboard");
    } else if (arg === "Reviews") {
      router.push("/dashboard-reviews");
    } else if (arg === "Message") {
      router.push("/dashboard-message");
    } else if (arg === "Add New Properties") {
      router.push("/dashboard-add-properties");
    } else if (arg === "My Properties") {
      router.push("/dashboard-my-properties");
    } else if (arg === "My Favorites") {
      router.push("/dashboard-my-favorites");
    } else if (arg === "Saved Search") {
      router.push("/dashboard-saved-search");
    }

    console.log(arg);
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "#67C2C9", // Change to desired background color
        },
      }}
    >
      <MenuItem
        onClick={() => handleMenuItemClick("Profile")}
        sx={{ fontSize: "16px", fontWeight: "bold", color: "white" }}
      >
        <div className="flex items-center gap-3">
          <i className="flaticon-user profile-icon flex items-center" /> My
          Profile
        </div>
      </MenuItem>
      <MenuItem
        onClick={() => handleMenuItemClick("Dashboard")}
        sx={{ fontSize: "16px", fontWeight: "bold", color: "white" }}
      >
        <div className="flex items-center gap-3">
          <i className="flaticon-hotel profile-icon flex items-center" />{" "}
          Dashboard
        </div>
      </MenuItem>
      <MenuItem
        onClick={() => handleMenuItemClick("Reviews")}
        sx={{ fontSize: "16px", fontWeight: "bold", color: "white" }}
      >
        <div className="flex items-center gap-3">
          <i className="flaticon-comment profile-icon flex items-center" />{" "}
          Reviews
        </div>
      </MenuItem>
      <MenuItem
        onClick={() => handleMenuItemClick("Message")}
        sx={{ fontSize: "16px", fontWeight: "bold", color: "white" }}
      >
        <div className="flex items-center gap-3">
          <i className="flaticon-chat-bubble profile-icon flex items-center" />{" "}
          Message
        </div>
      </MenuItem>
      <MenuItem
        onClick={() => handleMenuItemClick("Add New Properties")}
        sx={{ fontSize: "16px", fontWeight: "bold", color: "white" }}
      >
        <div className="flex items-center gap-3">
          <i className="flaticon-plus profile-icon flex items-center" /> Add New
          Properties
        </div>
      </MenuItem>
      <MenuItem
        onClick={() => handleMenuItemClick("My Properties")}
        sx={{ fontSize: "16px", fontWeight: "bold", color: "white" }}
      >
        <div className="flex items-center gap-3">
          <i className="flaticon-home-2 profile-icon flex items-center" /> My
          Properties
        </div>
      </MenuItem>
      <MenuItem
        onClick={() => handleMenuItemClick("My Favorites")}
        sx={{ fontSize: "16px", fontWeight: "bold", color: "white" }}
      >
        <div className="flex items-center gap-3">
          <i className="flaticon-home-3 profile-icon flex items-center" /> My
          Favorites
        </div>
      </MenuItem>
      <MenuItem
        onClick={() => handleMenuItemClick("Saved Search")}
        sx={{ fontSize: "16px", fontWeight: "bold", color: "white" }}
      >
        <div className="flex items-center gap-3">
          <i className="flaticon-find profile-icon flex items-center" /> Saved
          Search
        </div>
      </MenuItem>
      <MenuItem
        onClick={() => handleMenuItemClick("Logout")}
        sx={{ fontSize: "16px", fontWeight: "bold", color: "white" }}
      >
        <div className="flex items-center gap-3">
          <i className="flaticon-logout profile-icon flex items-center" />{" "}
          Logout
        </div>
      </MenuItem>
    </Menu>
  );
}
