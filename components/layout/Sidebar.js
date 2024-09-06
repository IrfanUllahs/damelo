'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
	const pathname = usePathname()
	return (
		<>
			<div className="section-menu-left">
				<div className="menu-content">
					<ul>
						<li className={`${pathname === "/dashboard" ? "active" : ""}`}>
							<Link href="/dashboard"><i className="flaticon-hotel" />Dashboard</Link>
						</li>
						<li className={`${pathname === "/dashboard-my-profile" ? "active" : ""}`}>
							<Link href="/dashboard-my-profile"><i className="flaticon-user" />My Profile</Link>
						</li>
						<li className={`${pathname === "/dashboard-reviews" ? "active" : ""}`}>
							<Link href="/dashboard-reviews"><i className="flaticon-comment" />Reviews</Link>
						</li>
						<li className={`${pathname === "/dashboard-message" ? "active" : ""}`}>
							<Link href="/dashboard-message"><i className="flaticon-chat-bubble" />Message</Link>
						</li>
						<li className={`${pathname === "/dashboard-add-properties" ? "active" : ""}`}>
							<Link href="/dashboard-add-properties"><i className="flaticon-plus" />Add New Properties</Link>
						</li>
						<li className={`${pathname === "/dashboard-my-properties" ? "active" : ""}`}>
							<Link href="/dashboard-my-properties"><i className="flaticon-home-2" />My Properties</Link>
						</li>
						<li className={`${pathname === "/dashboard-my-favorites" ? "active" : ""}`}>
							<Link href="/dashboard-my-favorites"><i className="flaticon-home-3" />My Favorites</Link>
						</li>
						<li className={`${pathname === "/dashboard-saved-search" ? "active" : ""}`}>
							<Link href="/dashboard-saved-search"><i className="flaticon-find" />Saved Search</Link>
						</li>
						<li className={`${pathname === "/dashboard-my-package" ? "active" : ""}`}>
							<Link href="/dashboard-my-package"><i className="flaticon-layers-1" />My Package</Link>
						</li>
						<li className={`${pathname === "/" ? "active" : ""}`}>
							<Link href="/"><i className="flaticon-logout" />Logout</Link>
						</li>
					</ul>
				</div>
			</div>

		</>
	)
}
