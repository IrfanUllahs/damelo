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
      <ul className="navigation">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li
          className={`has-children ${checkParentActive([
            "/property-list-v1",
            "/property-map-v1",
            "/property-map-v2",
            "/property-map-v3",
            "/property-map-v4",
            "/property-list-v2",
            "/property-list-v3",
            "/property-grid-v1",
            "/property-grid-v2",
            "/property-grid-v3",
            "/property-grid-v4",
            "/property-single-v1",
            "/property-single-v2",
            "/property-single-v3",
            "/property-single-v4",
            "/property-single-v5",
            "/property-single-v6",
            "/property-single-v7",
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

        {/* <li
          className={`has-children ${checkParentActive([
            "/agent-list",
            "/agent-single",
            "/agency-list",
            "/agency-single",
          ])}`}
        >
          <a>Realtor</a>
          <ul>
            <li>
              <Link
                href="/agent-list"
                className={`${checkCurrentMenuItem("/agent-list")}`}
              >
                Agent List
              </Link>
            </li>
            <li>
              <Link
                href="/agent-single"
                className={`${checkCurrentMenuItem("/agent-single")}`}
              >
                Agent Single
              </Link>
            </li>
            <li>
              <Link
                href="/agency-list"
                className={`${checkCurrentMenuItem("/agency-list")}`}
              >
                Agency List
              </Link>
            </li>
            <li>
              <Link
                href="/agency-single"
                className={`${checkCurrentMenuItem("/agency-single")}`}
              >
                Agency Single
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`has-children ${checkParentActive([
            "/about",
            "/compare",
            "/pricing",
            "/faq",
            "/404",
            "/ui-elements",
            "/dashboard",
          ])}`}
        >
          <a>Pages</a>
          <ul>
            <li>
              <Link
                href="/about"
                className={`${checkCurrentMenuItem("/about")}`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/compare"
                className={`${checkCurrentMenuItem("/compare")}`}
              >
                Compare
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className={`${checkCurrentMenuItem("/pricing")}`}
              >
                Pricing Packages
              </Link>
            </li>
            <li>
              <Link href="/faq" className={`${checkCurrentMenuItem("/faq")}`}>
                FAQ Page
              </Link>
            </li>
            <li>
              <Link href="/404" className={`${checkCurrentMenuItem("/404")}`}>
                404 Page
              </Link>
            </li>
            <li>
              <Link
                href="/ui-elements"
                className={`${checkCurrentMenuItem("/ui-elements")}`}
              >
                UI Elements
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className={`${checkCurrentMenuItem("/dashboard")}`}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`has-children ${checkParentActive([
            "/shop-list",
            "/shop-single",
            "/shop-cart",
            "/shop-checkout",
            "/shop-order",
          ])}`}
        >
          <a>Shop</a>
          <ul>
            <li>
              <Link
                href="/shop-list"
                className={`${checkCurrentMenuItem("/shop-list")}`}
              >
                Shop List
              </Link>
            </li>
            <li>
              <Link
                href="/shop-single"
                className={`${checkCurrentMenuItem("/shop-single")}`}
              >
                Shop Single
              </Link>
            </li>
            <li>
              <Link
                href="/shop-cart"
                className={`${checkCurrentMenuItem("/shop-cart")}`}
              >
                Shop Cart
              </Link>
            </li>
            <li>
              <Link
                href="/shop-checkout"
                className={`${checkCurrentMenuItem("/shop-checkout")}`}
              >
                Shop Checkout
              </Link>
            </li>
            <li>
              <Link
                href="/shop-order"
                className={`${checkCurrentMenuItem("/shop-order")}`}
              >
                Shop Order
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`has-children ${checkParentActive([
            "/blog-list-v1",
            "/blog-list-v2",
            "/blog-list-v3",
            "/blog-single",
          ])}`}
        >
          <a>Blog</a>
          <ul>
            <li>
              <Link
                href="/blog-list-v1"
                className={`${checkCurrentMenuItem("/blog-list-v1")}`}
              >
                Blog List 01
              </Link>
            </li>
            <li>
              <Link
                href="/blog-list-v2"
                className={`${checkCurrentMenuItem("/blog-list-v2")}`}
              >
                Blog List 02
              </Link>
            </li>
            <li>
              <Link
                href="/blog-list-v3"
                className={`${checkCurrentMenuItem("/blog-list-v3")}`}
              >
                Blog List 03
              </Link>
            </li>
            <li>
              <Link
                href="/blog-single"
                className={`${checkCurrentMenuItem("/blog-single")}`}
              >
                Blog Single
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href="/contact"
            className={`item ${pathname === "/contact" ? "current" : ""}`}
          >
            Contact
          </Link>
        </li> */}
      </ul>
    </>
  );
}
