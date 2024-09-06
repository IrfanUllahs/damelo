'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
	const pathname = usePathname()
	const [currentMenuItem, setCurrentMenuItem] = useState("")

	useEffect(() => {
		setCurrentMenuItem(pathname)
	}, [pathname])

	const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current" : ""
	const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current" : ""

	const [isAccordion, setIsAccordion] = useState(null)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	return (
		<>
			<div className="mobile-menu">
				<div className="menu-backdrop" onClick={handleMobileMenu} />
				<nav className="menu-box">
					<div className="nav-logo"><Link href="/"><img src="/images/logo/logo.svg" alt="nav-logo" width={174} height={44} /></Link></div>
					<div className="bottom-canvas">
						<div className="menu-outer">
							<div className="navbar-collapse collapse show clearfix" id="navbarSupportedContent">
								<ul className="navigation clearfix">
									<li className={`dropdown2 ${isAccordion === 1 ? "open" : ""} ${checkParentActive([
										"/home-02",
										"/home-03",
										"/home-04",
										"/home-05",
										"/home-06",
										"/home-07",
										"/home-08",
										"/home-09",
										"/home-10",
									])}`}>
										<Link href="#">Home</Link>
										<ul style={{ display: `${isAccordion === 1 ? "block" : "none"}` }}>
											<li className={`${checkCurrentMenuItem("/")}`}>
												<Link href="/">Homepage 01</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/home-02")}`}>
												<Link href="/home-02">Homepage 02</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/home-03")}`}>
												<Link href="/home-03">Homepage 03</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/home-04")}`}>
												<Link href="/home-04">Homepage 04</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/home-05")}`}>
												<Link href="/home-05">Homepage 05</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/home-06")}`}>
												<Link href="/home-06">Homepage 06</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/home-07")}`}>
												<Link href="/home-07">Homepage 07</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/home-08")}`}>
												<Link href="/home-08">Homepage 08</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/home-09")}`}>
												<Link href="/home-09">Homepage 09</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/home-10")}`}>
												<Link href="/home-10">Homepage 10</Link>
											</li>
										</ul>
										<div className="dropdown2-btn" onClick={() => handleAccordion(1)} />
									</li>
									<li className={`dropdown2 ${isAccordion === 2 ? "open" : ""} ${checkParentActive([
										"/property-list-v1",
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
										"/property-map-v1",
										"/property-map-v2",
										"/property-map-v3",
										"/property-map-v4",
									])}`}>
										<Link href="#">Property</Link>
										<ul style={{ display: `${isAccordion === 2 ? "block" : "none"}` }}>
											<li className={`${checkCurrentMenuItem("/property-list-v1")}`}>
												<Link href="/property-list-v1">Property List 01</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/property-list-v2")}`}>
												<Link href="/property-list-v2">Property List 02</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/property-list-v3")}`}>
												<Link href="/property-list-v3">Property List 03</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/property-grid-v1")}`}>
												<Link href="/property-grid-v1">Property Grid 01</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/property-grid-v2")}`}>
												<Link href="/property-grid-v2">Property Grid 02</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/property-grid-v3")}`}>
												<Link href="/property-grid-v3">Property Grid 03</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/property-grid-v4")}`}>
												<Link href="/property-grid-v4">Property Grid 04</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/property-single-v1")}`}>
												<Link href="/property-single-v1">Property Single 01</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/property-single-v2")}`}>
												<Link href="/property-single-v2">Property Single 02</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/property-single-v3")}`}>
												<Link href="/property-single-v3">Property Single 03</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/property-single-v4")}`}>
												<Link href="/property-single-v4">Property Single 04</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/property-single-v5")}`}>
												<Link href="/property-single-v5">Property Single 05</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/property-single-v6")}`}>
												<Link href="/property-single-v6">Property Single 06</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/property-single-v7")}`}>
												<Link href="/property-single-v7">Property Single 07</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/property-map-v1")}`}>
												<Link href="/property-map-v1">Property Map 01</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/property-map-v2")}`}>
												<Link href="/property-map-v2">Property Map 02</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/property-map-v3")}`}>
												<Link href="/property-map-v3">Property Map 03</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/property-map-v4")}`}>
												<Link href="/property-map-v4">Property Map 04</Link>
											</li>
										</ul>
										<div className="dropdown2-btn" onClick={() => handleAccordion(2)} />
									</li>
									<li className={`dropdown2 ${isAccordion === 3 ? "open" : ""} ${checkParentActive([
										"/agent-list",
										"/agent-single",
										"/agency-list",
										"/agency-single",
									])}`}>
										<Link href="#">Realtor</Link>
										<ul style={{ display: `${isAccordion === 3 ? "block" : "none"}` }}>
											<li className={`${checkCurrentMenuItem("/agent-list",)}`}>
												<Link href="/agent-list">Agent List</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/agent-single",)}`}>
												<Link href="/agent-single">Agent Single</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/agency-list",)}`}>
												<Link href="/agency-list">Agency List</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/agency-single",)}`}>
												<Link href="/agency-single">Agency Single</Link>
											</li>
										</ul>
										<div className="dropdown2-btn" onClick={() => handleAccordion(3)} />
									</li>
									<li className={`dropdown2 ${isAccordion === 4 ? "open" : ""} ${checkParentActive([
										"/about",
										"/compare",
										"/pricing",
										"/faq",
										"/404",
										"/ui-elements",
										"/dashboard",
									])}`}>
										<Link href="#">Pages</Link>
										<ul style={{ display: `${isAccordion === 4 ? "block" : "none"}` }}>
											<li className={`${checkCurrentMenuItem("/about")}`}>
												<Link href="/about">About Us</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/compare")}`}>
												<Link href="/compare">Compare</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/pricing")}`}>
												<Link href="/pricing">Pricing Packages</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/faq")}`}>
												<Link href="/faq">FAQ Page</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/404")}`}>
												<Link href="/404">404 Page</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/ui-elements")}`}>
												<Link href="/ui-elements">UI Elements</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/dashboard")}`}>
												<Link href="/dashboard">Dashboard</Link>
											</li>
										</ul>
										<div className="dropdown2-btn" onClick={() => handleAccordion(4)} />
									</li>
									<li className={`dropdown2 ${isAccordion === 5 ? "open" : ""} ${checkParentActive([
										"/blog-list-v1",
										"/blog-list-v2",
										"/blog-list-v3",
										"/blog-single",
									])}`}>
										<Link href="#">Blog</Link>
										<ul style={{ display: `${isAccordion === 5 ? "block" : "none"}` }}>
											<li className={`${checkCurrentMenuItem("/blog-list-v1")}`}>
												<Link href="/blog-list-v1">Blog List 01</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/blog-list-v2")}`}>
												<Link href="/blog-list-v2">Blog List 02</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/blog-list-v3")}`}>
												<Link href="/blog-list-v3">Blog List 03</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/blog-single")}`}>
												<Link href="/blog-single">Blog Single</Link>
											</li>
										</ul>
										<div className="dropdown2-btn" onClick={() => handleAccordion(5)} />
									</li>
									<li className={`dropdown2 ${isAccordion === 6 ? "open" : ""} ${checkParentActive([
										"/shop-list",
										"/shop-single",
										"/shop-cart",
										"/shop-checkout",
										"/shop-order",
									])}`}>
										<Link href="#">Shop</Link>
										<ul style={{ display: `${isAccordion === 6 ? "block" : "none"}` }}>
											<li className={`${checkCurrentMenuItem("/shop-list")}`}>
												<Link href="/shop-list">Shop List</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/shop-single")}`}>
												<Link href="/shop-single">Shop Single</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/shop-cart")}`}>
												<Link href="/shop-cart">Shop Cart</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/shop-checkout")}`}>
												<Link href="/shop-checkout">Shop Checkout</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/shop-order")}`}>
												<Link href="/shop-order">Shop Order</Link>
											</li>
										</ul>
										<div className="dropdown2-btn" onClick={() => handleAccordion(6)} />
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</>
	)
}
