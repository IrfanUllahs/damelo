"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
  const pathname = usePathname();
  const [currentMenuItem, setCurrentMenuItem] = useState("");

  useEffect(() => {
    setCurrentMenuItem(pathname);
  }, [pathname]);

  const checkCurrentMenuItem = (path) =>
    currentMenuItem === path ? "current" : "";
  const checkParentActive = (paths) =>
    paths.some((path) => currentMenuItem.startsWith(path)) ? "current" : "";

  const [isAccordion, setIsAccordion] = useState(null);

  const handleAccordion = (key) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img
                src="/images/logo/logo.png"
                alt="nav-logo"
                width={174}
                height={44}
              />
            </Link>
          </div>
          <div className="bottom-canvas">
            <div className="menu-outer">
              <div
                className="navbar-collapse collapse show clearfix"
                id="navbarSupportedContent"
              >
                <ul className="navigation clearfix">
                  <li>
                    <Link
                      href="/"
                      className={`dropdown2  `}
                      onClick={handleMobileMenu}
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    className={`dropdown2 ${
                      isAccordion === 2 ? "open" : ""
                    } ${checkParentActive([
                      "/property-list-v1",

                      "/property-grid-v3",

                      "/property-single-v1",

                      "/property-map-v1",
                    ])}`}
                  >
                    <Link href="#" onClick={handleMobileMenu}>
                      Property
                    </Link>
                    <ul
                      style={{
                        display: `${isAccordion === 2 ? "block" : "none"}`,
                      }}
                    >
                      <li
                        className={`${checkCurrentMenuItem(
                          "/property-list-v1"
                        )}`}
                      >
                        <Link
                          href="/property-list-v1"
                          onClick={handleMobileMenu}
                        >
                          Property List 01
                        </Link>
                      </li>

                      <li
                        className={`${checkCurrentMenuItem(
                          "/property-grid-v3"
                        )}`}
                      >
                        <Link
                          href="/property-grid-v3"
                          onClick={handleMobileMenu}
                        >
                          Property Grid 03
                        </Link>
                      </li>

                      <li
                        className={`${checkCurrentMenuItem(
                          "/property-single-v1"
                        )}`}
                      >
                        <Link
                          href="/property-single-v1"
                          onClick={handleMobileMenu}
                        >
                          Property Single 01
                        </Link>
                      </li>

                      <li
                        className={`${checkCurrentMenuItem(
                          "/property-map-v1"
                        )}`}
                      >
                        <Link
                          href="/property-map-v1"
                          onClick={handleMobileMenu}
                        >
                          Property Map 01
                        </Link>
                      </li>
                    </ul>
                    <div
                      className="dropdown2-btn"
                      onClick={() => handleAccordion(2)}
                    />
                  </li>
                  <li>
                    <Link href="/agent-list" onClick={handleMobileMenu}>
                      Realtor
                    </Link>
                  </li>
                  <li
                    className={`dropdown2 ${
                      isAccordion === 4 ? "open" : ""
                    } ${checkParentActive([
                      "/about",

                      "/pricing",
                      "/faq",

                      "/dashboard",
                    ])}`}
                  >
                    <Link href="#">Pages</Link>
                    <ul
                      style={{
                        display: `${isAccordion === 4 ? "block" : "none"}`,
                      }}
                    >
                      <li className={`${checkCurrentMenuItem("/about")}`}>
                        <Link href="/about" onClick={handleMobileMenu}>
                          About Us
                        </Link>
                      </li>

                      <li className={`${checkCurrentMenuItem("/faq")}`}>
                        <Link href="/faq" onClick={handleMobileMenu}>
                          FAQ Page
                        </Link>
                      </li>

                      <li className={`${checkCurrentMenuItem("/dashboard")}`}>
                        <Link href="/dashboard" onClick={handleMobileMenu}>
                          Dashboard
                        </Link>
                      </li>
                    </ul>
                    <div
                      className="dropdown2-btn"
                      onClick={() => handleAccordion(4)}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
