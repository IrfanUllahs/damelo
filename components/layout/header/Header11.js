"use client";
import Link from "next/link";
import Menu from "../Menu";
import ProfileMenu from "@/components/profileMenu/profileMenu";
import { useState } from "react";
export default function Header11({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isLogin,
  handleLogin,
  isRegister,
  handleRegister,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <header
        id="header_main"
        className={`header style-fixed ${scroll ? "is-fixed is-small" : ""}`}
      >
        <div className="header-inner background-white">
          <div className="header-inner-wrap">
            <div id="site-logo">
              <Link href="/" rel="home">
                <img
                  className="d-block nav-bar-logo "
                  id="logo-header"
                  src="/images/logo/logo.png"
                  alt=""
                />
              </Link>
            </div>
            <nav className="main-menu">
              <Menu />
            </nav>
            <div className="header-right gap30">
              <div className="header-btn">
                <Link
                  href="/dashboard-add-properties"
                  className="tf-button-default"
                >
                  Add Listing
                </Link>
              </div>
              <div
                onClick={handleClick}
                className="header-user-login cursor-pointer"
              >
                <div className="image">
                  <img src="/images/author/author-6.png" alt="" />
                </div>
                <div className="name">Ali Tufan</div>
              </div>
            </div>
            <a
              className="mobile-nav-toggler mobile-button"
              onClick={handleMobileMenu}
            />
          </div>
          <ProfileMenu anchorEl={anchorEl} open={open} onClose={handleClose} />
        </div>
      </header>
    </>
  );
}
