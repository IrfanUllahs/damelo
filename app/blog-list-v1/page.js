
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogListV1() {

	return (
		<>

			<Layout headerStyle={12} footerStyle={1} headerStyle={2} footerStyle={1}>
				<div className="flat-title">
					<div className="themesflat-container full">
						<div className="row">
							<div className="col-12">
								<div className="content">
									<h2>Blog Pages</h2>
									<ul className="breadcrumbs">
										<li><Link href="/">Home</Link></li><li>/</li><li>Property List</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="widget-tabs style-1">
					<ul className="widget-menu-tab wow fadeInUp">
						<li className="item-title">
							<span className="inner">Trends</span>
						</li>
						<li className="item-title active">
							<span className="inner">Buying</span>
						</li>
						<li className="item-title">
							<span className="inner">Selling</span>
						</li>
						<li className="item-title">
							<span className="inner">Finance</span>
						</li>
					</ul>
					<div className="widget-content-tab">
						<div className="widget-content-inner">
							{/* grid-blog */}
							<div className="themesflat-container">
								<div className="row">
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-1.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Chip and Joanna Gaines’ Latest Fixer-Upper Is Open for Visitors</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-2.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Homebuyers Will Be So Thankful To Hear These </Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-3.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">That’s Life! Frank Sinatra’s Former Los Angeles-Area </Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-4.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Affordability crisis buyers and renters turn to tiny living</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-5.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">How To Buy a Home With No Money Down (You Really Can!)</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-6.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Latest Home Sales Data Offers Hope: Is America's Housing.</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-7.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Home for the Holidays: $1M North Carolina Estate With Hallmark.</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-8.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">9 Things Real Estate Agents Wish You Knew About Selling Your Home</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-9.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Century-Old Bay Area Craftsman Designed by Bernard Maybeck</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-10.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">5 Things Your Mortgage Broker Wishes You Knew</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-11.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">$1.9M Midcentury Home With Glass-Domed Pool Dips Onto.</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-12.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Live in a Historic Victorian, Perched Above a Fro-Yo Shop in Florida</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-12">
										<ul className="wg-pagination justify-center">
											<li>
												<Link href="/#"><i className="icon-keyboard_arrow_left" /></Link>
											</li>
											<li>
												<Link href="/#">1</Link>
											</li>
											<li className="active">
												<Link href="/#">2</Link>
											</li>
											<li>
												<Link href="/#">3</Link>
											</li>
											<li>
												<Link href="/#">4</Link>
											</li>
											<li>
												<Link href="/#">...</Link>
											</li>
											<li>
												<Link href="/#">20</Link>
											</li>
											<li>
												<Link href="/#"><i className="icon-keyboard_arrow_right" /></Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							{/* /grid-blog */}
						</div>
						<div className="widget-content-inner active">
							{/* grid-blog */}
							<div className="themesflat-container">
								<div className="row">
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog wow fadeInUp">
											<div className="image">
												<img src="/images/blog/blog-grid-1.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Chip and Joanna Gaines’ Latest Fixer-Upper Is Open for Visitors</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog wow fadeInUp" data-wow-delay="0.1s">
											<div className="image">
												<img src="/images/blog/blog-grid-2.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Homebuyers Will Be So Thankful To Hear These </Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog wow fadeInUp" data-wow-delay="0.2s">
											<div className="image">
												<img src="/images/blog/blog-grid-3.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">That’s Life! Frank Sinatra’s Former Los Angeles-Area </Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog wow fadeInUp" data-wow-delay="0.3s">
											<div className="image">
												<img src="/images/blog/blog-grid-4.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Affordability crisis buyers and renters turn to tiny living</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog wow fadeInUp">
											<div className="image">
												<img src="/images/blog/blog-grid-5.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">How To Buy a Home With No Money Down (You Really Can!)</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog wow fadeInUp" data-wow-delay="0.1s">
											<div className="image">
												<img src="/images/blog/blog-grid-6.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Latest Home Sales Data Offers Hope: Is America's Housing.</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog wow fadeInUp" data-wow-delay="0.2s">
											<div className="image">
												<img src="/images/blog/blog-grid-7.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Home for the Holidays: $1M North Carolina Estate With Hallmark.</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog wow fadeInUp" data-wow-delay="0.3s">
											<div className="image">
												<img src="/images/blog/blog-grid-8.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">9 Things Real Estate Agents Wish You Knew About Selling Your Home</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog wow fadeInUp">
											<div className="image">
												<img src="/images/blog/blog-grid-9.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Century-Old Bay Area Craftsman Designed by Bernard Maybeck</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog wow fadeInUp" data-wow-delay="0.1s">
											<div className="image">
												<img src="/images/blog/blog-grid-10.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">5 Things Your Mortgage Broker Wishes You Knew</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog wow fadeInUp" data-wow-delay="0.2s">
											<div className="image">
												<img src="/images/blog/blog-grid-11.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">$1.9M Midcentury Home With Glass-Domed Pool Dips Onto.</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog wow fadeInUp" data-wow-delay="0.3s">
											<div className="image">
												<img src="/images/blog/blog-grid-12.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Live in a Historic Victorian, Perched Above a Fro-Yo Shop in Florida</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-12">
										<ul className="wg-pagination justify-center wow fadeInUp">
											<li>
												<Link href="/#"><i className="icon-keyboard_arrow_left" /></Link>
											</li>
											<li>
												<Link href="/#">1</Link>
											</li>
											<li className="active">
												<Link href="/#">2</Link>
											</li>
											<li>
												<Link href="/#">3</Link>
											</li>
											<li>
												<Link href="/#">4</Link>
											</li>
											<li>
												<Link href="/#">...</Link>
											</li>
											<li>
												<Link href="/#">20</Link>
											</li>
											<li>
												<Link href="/#"><i className="icon-keyboard_arrow_right" /></Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							{/* /grid-blog */}
						</div>
						<div className="widget-content-inner">
							{/* grid-blog */}
							<div className="themesflat-container">
								<div className="row">
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-1.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Chip and Joanna Gaines’ Latest Fixer-Upper Is Open for Visitors</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-2.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Homebuyers Will Be So Thankful To Hear These </Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-3.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">That’s Life! Frank Sinatra’s Former Los Angeles-Area </Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-4.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Affordability crisis buyers and renters turn to tiny living</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-5.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">How To Buy a Home With No Money Down (You Really Can!)</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-6.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Latest Home Sales Data Offers Hope: Is America's Housing.</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-7.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Home for the Holidays: $1M North Carolina Estate With Hallmark.</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-8.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">9 Things Real Estate Agents Wish You Knew About Selling Your Home</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-9.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Century-Old Bay Area Craftsman Designed by Bernard Maybeck</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-10.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">5 Things Your Mortgage Broker Wishes You Knew</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-11.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">$1.9M Midcentury Home With Glass-Domed Pool Dips Onto.</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-12.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Live in a Historic Victorian, Perched Above a Fro-Yo Shop in Florida</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-12">
										<ul className="wg-pagination justify-center">
											<li>
												<Link href="/#"><i className="icon-keyboard_arrow_left" /></Link>
											</li>
											<li>
												<Link href="/#">1</Link>
											</li>
											<li className="active">
												<Link href="/#">2</Link>
											</li>
											<li>
												<Link href="/#">3</Link>
											</li>
											<li>
												<Link href="/#">4</Link>
											</li>
											<li>
												<Link href="/#">...</Link>
											</li>
											<li>
												<Link href="/#">20</Link>
											</li>
											<li>
												<Link href="/#"><i className="icon-keyboard_arrow_right" /></Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							{/* /grid-blog */}
						</div>
						<div className="widget-content-inner">
							{/* grid-blog */}
							<div className="themesflat-container">
								<div className="row">
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-1.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Chip and Joanna Gaines’ Latest Fixer-Upper Is Open for Visitors</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-2.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Homebuyers Will Be So Thankful To Hear These </Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-3.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">That’s Life! Frank Sinatra’s Former Los Angeles-Area </Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-4.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Affordability crisis buyers and renters turn to tiny living</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-5.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">How To Buy a Home With No Money Down (You Really Can!)</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-6.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Latest Home Sales Data Offers Hope: Is America's Housing.</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-7.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Home for the Holidays: $1M North Carolina Estate With Hallmark.</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-8.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">9 Things Real Estate Agents Wish You Knew About Selling Your Home</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-9.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Century-Old Bay Area Craftsman Designed by Bernard Maybeck</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-10.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">5 Things Your Mortgage Broker Wishes You Knew</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-11.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">$1.9M Midcentury Home With Glass-Domed Pool Dips Onto.</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-md-6 col-12">
										<div className="wg-blog">
											<div className="image">
												<img src="/images/blog/blog-grid-12.jpg" alt="" />
											</div>
											<div className="content">
												<div className="sub-blog">
													<div>Tips &amp; Tricks</div>
													<div>April 26, 2024</div>
												</div>
												<div className="name">
													<Link href="/blog-single">Live in a Historic Victorian, Perched Above a Fro-Yo Shop in Florida</Link>
												</div>
												<Link href="/blog-single" className="tf-button-no-bg">
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</div>
									<div className="col-12">
										<ul className="wg-pagination justify-center">
											<li>
												<Link href="/#"><i className="icon-keyboard_arrow_left" /></Link>
											</li>
											<li>
												<Link href="/#">1</Link>
											</li>
											<li className="active">
												<Link href="/#">2</Link>
											</li>
											<li>
												<Link href="/#">3</Link>
											</li>
											<li>
												<Link href="/#">4</Link>
											</li>
											<li>
												<Link href="/#">...</Link>
											</li>
											<li>
												<Link href="/#">20</Link>
											</li>
											<li>
												<Link href="/#"><i className="icon-keyboard_arrow_right" /></Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							{/* /grid-blog */}
						</div>
					</div>
				</div>

			</Layout>
		</>
	)
}