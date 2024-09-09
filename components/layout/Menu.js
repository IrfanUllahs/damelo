"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Menu() {
  const pathname = usePathname();
  const [currentMenuItem, setCurrentMenuItem] = useState("");

  useEffect(() => {
    setCurrentMenuItem(pathname);
  }, [pathname]);

  const checkCurrentMenuItem = (path) =>
    currentMenuItem === path ? "current" : "";
  const checkParentActive = (paths) =>
    paths.some((path) => currentMenuItem.startsWith(path)) ? "current" : "";

  return (
    <>
      <ul className="navigation ">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li
          className={`has-children ${checkParentActive([
            "/property-list-v1",

            "/property-map-v4",
            "/property-list-v2",
            "/property-list-v3",
            "/property-grid-v3",
            "/property-single-v1",
          ])}`}
        >
          <a>Property</a>
          <ul className="mega-menu">
            <li>
              <ul>
                <li className="title">Map Style</li>
                <li>
                  <Link
                    href="/property-map-v4"
                    className={`${checkCurrentMenuItem("/property-map-v1")}`}
                  >
                    Property Map 01
                  </Link>
                </li>
                <li>
                  <Link
                    href="/property-single-v1"
                    className={`${checkCurrentMenuItem("/property-single-v1")}`}
                  >
                    Property Single 01
                  </Link>
                </li>
                <li>
                  <Link
                    href="/property-grid-v3"
                    className={`${checkCurrentMenuItem("/property-grid-v3")}`}
                  >
                    Property Grid 03
                  </Link>
                </li>
                <li>
                  <Link
                    href="/property-list-v1"
                    className={`${checkCurrentMenuItem("/property-list-v1")}`}
                  >
                    Property List 01
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
