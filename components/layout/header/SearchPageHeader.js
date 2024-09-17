import Link from "next/link";
import "../../layout/style.css";
import { MdAccountCircle } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import ProfileMenu from "@/components/profileMenu/profileMenu";
import { useState } from "react";
import Breadcrumbs from "@/components/CommonBreadcrumbs/CommonBreadcrumbs";
export default function Header5() {
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
      <nav id="navBar">
        {/* logo section  */}

        <div className="logo">
          <Link href="/">
            <img src="/images/logo/logo.png" alt="logo image" />
          </Link>
        </div>
        {/* links sections */}

        {/* profile sections */}
        <div className="nav-right">
          <ul>
            <li>
              <Link href="/dashboard-add-properties">
                <p>Your ads</p>
                <div></div>
              </Link>
            </li>
            <li>
              <Link href="dashboard-my-favorites">
                <p>Your favorites</p>
                <div></div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard-my-favorites">
                <p>Your searches</p>
                <div></div>
              </Link>
            </li>
            <li
              className="account"
              onClick={!anchorEl ? handleClick : handleClose}
              onMouseOver={handleClick}
            >
              <MdAccountCircle style={{ fontSize: "24px" }} />{" "}
              <p>Irfan Ullah</p>
              <IoMdArrowDropdown style={{ fontSize: "24px" }} />
              <div></div>
            </li>
          </ul>
          <ProfileMenu anchorEl={anchorEl} open={open} onClose={handleClose} />
        </div>
      </nav>
    </>
  );
}
