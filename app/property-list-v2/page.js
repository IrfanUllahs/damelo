'use client'
import Layout from "@/components/layout/Layout"
import SliderBoxDream from "@/components/slider/SliderBoxDream"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const sliderExclusive = {
	modules: [Navigation, Pagination, Autoplay],
	spaceBetween: 0,
	slidesPerView: 1,
	observer: true,
	observeParents: true,
	navigation: {
		nextEl: ".exclusive-next",
		prevEl: ".exclusive-prev",
		clickable: true,
	},
}
export default function PropertyListV2() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} mainContentCls="px-20">
			<div className="space-20" />
				<div className="flat-title page-property-list-2">
					<div className="themesflat-container">
						<div className="row">
							<div className="col-12">
								<div className="content">
									<h2 className="wow fadeInUp">Real Estate &amp; Homes For Sale</h2>
									<ul className="breadcrumbs wow fadeInUp">
										<li><Link href="/">Home</Link></li><li>/</li><li>Property List</li>
									</ul>
									<div className="form-filter wow fadeInUp">
										<form className="form-search-home5">
											<div className="list">
												<div className="group-form form-search-content">
													<div className="form-style-has-title">
														<div className="title">Keyword</div>
														<div className="relative">
															<fieldset className="name">
																<input type="text" placeholder="Enter Keyyword" className="show-search style-default" name="name" tabIndex={2} aria-required="true" required />
															</fieldset>
															<div className="style-absolute-right">
																<div className="style-icon-default"><i className="flaticon-magnifiying-glass" /></div>
															</div>
															<div className="box-content-search style-1">
																<ul>
																	<li>
																		<div className="item1">
																			<div>
																				<div className="image">
																					<img src="images/author/avatar-8.png" alt />
																				</div>
																				<p>Archer House</p>
																			</div>
																			<div className="text">For Sale</div>
																		</div>
																	</li>
																	<li>
																		<div className="item1">
																			<div>
																				<div className="image">
																					<img src="images/author/avatar-7.png" alt />
																				</div>
																				<p>Home Pitt Street</p>
																			</div>
																			<div className="text">For Rent</div>
																		</div>
																	</li>
																	<li>
																		<div className="item1">
																			<div>
																				<div className="image">
																					<img src="images/author/avatar-9.png" alt />
																				</div>
																				<p>Villa One Hyde Park</p>
																			</div>
																			<div className="text">For Rent</div>
																		</div>
																	</li>
																	<li>
																		<div className="item1">
																			<div>
																				<div className="image">
																					<img src="images/author/avatar-10.png" alt />
																				</div>
																				<p>House on the beverly hills</p>
																			</div>
																			<div className="text">For Sale</div>
																		</div>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
												<div className="divider-1" />
												<div className="group-form">
													<div className="form-style-has-title">
														<div className="title">Status</div>
														<select className="nice-select" tabIndex={0}>
															<option data-value="For Sale" className="option selected">For Sale</option>
															<option data-value="For Ren" className="option">For Ren</option>
															<option data-value="Sold" className="option">Sold</option>
														</select>
													</div>
												</div>
												<div className="divider-1" />
												<div className="group-form">
													<div className="form-style-has-title">
														<div className="title">Type</div>
														<select className="nice-select" tabIndex={0}>
																<option data-value className="option selected">All Type</option>
																<option data-value="Office" className="option">Office</option>
																<option data-value="Villa" className="option">Villa</option>
																<option data-value="Shop" className="option">Shop</option>
																<option data-value="Single Family" className="option">Single Family</option>
														</select>
													</div>
												</div>
											</div>
											<div className="flex gap10">
												<div className="group-form">
													<div className="wg-filter">
														<div className="tf-button-filter btn-filter"><i className="flaticon-filter" />Filter</div>
														<div className="open-filter filter-no-content" id="a1">
															<div>
																<div className="grid-3-cols mb-20">
																	<div className="nice-select" tabIndex={0}>
																		<span className="current">City</span>
																		<ul className="list">
																			<li data-value className="option selected">City</li>
																			<li data-value="New York" className="option">New York</li>
																			<li data-value="Paris" className="option">Paris</li>
																			<li data-value="Ha Noi" className="option">Ha Noi</li>
																		</ul>
																	</div>
																	<div className="nice-select" tabIndex={0}>
																		<span className="current">Bedrooms</span>
																		<ul className="list">
																			<li data-value className="option selected">Bedrooms</li>
																			<li data-value="1 Bed" className="option">1 Bed</li>
																			<li data-value="2 Bed" className="option">2 Bed</li>
																		</ul>
																	</div>
																	<div className="nice-select" tabIndex={0}>
																		<span className="current">Bathrooms</span>
																		<ul className="list">
																			<li data-value className="option selected">Bathrooms</li>
																			<li data-value="1 Bath" className="option">1 Bath</li>
																			<li data-value="2 Bath" className="option">2 Bath</li>
																		</ul>
																	</div>
																</div>
																<div className="grid-4-cols">
																	<fieldset className="name">
																		<input type="text" placeholder="Min. Area" className name="name" tabIndex={2} defaultValue aria-required="true" required />
																	</fieldset>
																	<fieldset className="name">
																		<input type="text" placeholder="Max. Area" className name="name" tabIndex={2} defaultValue aria-required="true" required />
																	</fieldset>
																	<div className="nice-select" tabIndex={0}>
																		<span className="current">Min. Price</span>
																		<ul className="list">
																			<li data-value className="option selected">Min. Price</li>
																			<li data-value="100 $" className="option">100 $</li>
																			<li data-value="150 $" className="option">150 $</li>
																		</ul>
																	</div>
																	<div className="nice-select" tabIndex={0}>
																		<span className="current">Max. Price</span>
																		<ul className="list">
																			<li data-value className="option selected">Max. Price</li>
																			<li data-value="1000 $" className="option">1000 $</li>
																			<li data-value="1500 $" className="option">1500 $</li>
																		</ul>
																	</div>
																</div>
															</div>
															<div>
																<div className="title">Amenities</div>
																<ul className="grid-checkbox">
																	<li className="checkbox-item">
																		<label>
																			<p>Air Conditioning</p>
																			<input type="checkbox" />
																			<span className="btn-checkbox" />
																		</label>
																	</li>
																	<li className="checkbox-item">
																		<label>
																			<p>Barbeque</p>
																			<input type="checkbox" defaultChecked />
																			<span className="btn-checkbox" />
																		</label>
																	</li>
																	<li className="checkbox-item">
																		<label>
																			<p>Dryer</p>
																			<input type="checkbox" />
																			<span className="btn-checkbox" />
																		</label>
																	</li>
																	<li className="checkbox-item">
																		<label>
																			<p>Gym</p>
																			<input type="checkbox" />
																			<span className="btn-checkbox" />
																		</label>
																	</li>
																	<li className="checkbox-item">
																		<label>
																			<p>Lawn</p>
																			<input type="checkbox" />
																			<span className="btn-checkbox" />
																		</label>
																	</li>
																	<li className="checkbox-item">
																		<label>
																			<p>Microwave</p>
																			<input type="checkbox" />
																			<span className="btn-checkbox" />
																		</label>
																	</li>
																	<li className="checkbox-item">
																		<label>
																			<p>Refrigerator</p>
																			<input type="checkbox" />
																			<span className="btn-checkbox" />
																		</label>
																	</li>
																	<li className="checkbox-item">
																		<label>
																			<p>Sauna</p>
																			<input type="checkbox" />
																			<span className="btn-checkbox" />
																		</label>
																	</li>
																	<li className="checkbox-item">
																		<label>
																			<p>Swimming Pool</p>
																			<input type="checkbox" />
																			<span className="btn-checkbox" />
																		</label>
																	</li>
																	<li className="checkbox-item">
																		<label>
																			<p>TV Cable</p>
																			<input type="checkbox" />
																			<span className="btn-checkbox" />
																		</label>
																	</li>
																	<li className="checkbox-item">
																		<label>
																			<p>Washer</p>
																			<input type="checkbox" />
																			<span className="btn-checkbox" />
																		</label>
																	</li>
																	<li className="checkbox-item">
																		<label>
																			<p>WiFi</p>
																			<input type="checkbox" />
																			<span className="btn-checkbox" />
																		</label>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
												<div className="group-form">
													<div className="button-submit">
														<button className type="submit">Search</button>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="property-list-wrap-v2">
					<div className="themesflat-container">
						<div className="row">
							<div className="col-lg-8">
								<div className="top">
									<div className="sub">
										<p className="wow fadeInUp">9,998 results</p>
										<div className="sort-wrap wow fadeInUp" data-wow-delay="0.1s">
											<p>Sort by</p>
											<select className="nice-select default" tabIndex={0}>
												<option data-value className="option selected">Newest</option>
												<option data-value="For Ren" className="option">Oldest</option>
												<option data-value="Sold" className="option">3 days</option>
											</select>
										</div>
									</div>
								</div>
								<div className="list">
									<div className="box-dream style-row wow fadeInUp">
										<div className="image">
											<div className="list-tags">
												<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
												<Link href="/#" className="tags-item featured">FEATURED</Link>
											</div>
											<div className="button-heart"><i className="flaticon-heart-1" /></div>
											<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
												<SliderBoxDream path="house/property-listing" start={1} end={4} />
											</div>
										</div>
										<div className="content">
											<div className="head">
												<div className="price">$815,000</div>
												<div className="title">
													<Link href="/property-single-v1">Archer House</Link>
												</div>
											</div>
											<div className="location">
												<div className="icon">
													<i className="flaticon-location" />
												</div>
												<p>148-37 88th Ave, Jamaica, NY 11435</p>
											</div>
											<p>This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Valley.</p>
											<div className="icon-box">
												<div className="item">
													<i className="flaticon-hotel" />
													<p>4 Beds</p>
												</div>
												<div className="item">
													<i className="flaticon-bath-tub" />
													<p>3 Baths</p>
												</div>
												<div className="item">
													<i className="flaticon-minus-front" />
													<p>2660 Sqft</p>
												</div>
											</div>
										</div>
									</div>
									<div className="box-dream style-row wow fadeInUp">
										<div className="image">
											<div className="list-tags">
												<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
											</div>
											<div className="button-heart"><i className="flaticon-heart-1" /></div>
											<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
												<SliderBoxDream path="house/property-listing" start={2} end={5} />
											</div>
										</div>
										<div className="content">
											<div className="head">
												<div className="price">$815,000</div>
												<div className="title">
													<Link href="/property-single-v1">Villa One Hyde Park</Link>
												</div>
											</div>
											<div className="location">
												<div className="icon">
													<i className="flaticon-location" />
												</div>
												<p>148-37 88th Ave, Jamaica, NY 11435</p>
											</div>
											<p>This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Valley.</p>
											<div className="icon-box">
												<div className="item">
													<i className="flaticon-hotel" />
													<p>4 Beds</p>
												</div>
												<div className="item">
													<i className="flaticon-bath-tub" />
													<p>3 Baths</p>
												</div>
												<div className="item">
													<i className="flaticon-minus-front" />
													<p>2660 Sqft</p>
												</div>
											</div>
										</div>
									</div>
									<div className="box-dream style-row wow fadeInUp">
										<div className="image">
											<div className="list-tags">
												<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
											</div>
											<div className="button-heart"><i className="flaticon-heart-1" /></div>
											<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
												<SliderBoxDream path="house/property-listing" start={3} end={6} />
											</div>
										</div>
										<div className="content">
											<div className="head">
												<div className="price">$815,000</div>
												<div className="title">
													<Link href="/property-single-v1">Home Pitt Street</Link>
												</div>
											</div>
											<div className="location">
												<div className="icon">
													<i className="flaticon-location" />
												</div>
												<p>148-37 88th Ave, Jamaica, NY 11435</p>
											</div>
											<p>This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Valley.</p>
											<div className="icon-box">
												<div className="item">
													<i className="flaticon-hotel" />
													<p>4 Beds</p>
												</div>
												<div className="item">
													<i className="flaticon-bath-tub" />
													<p>3 Baths</p>
												</div>
												<div className="item">
													<i className="flaticon-minus-front" />
													<p>2660 Sqft</p>
												</div>
											</div>
										</div>
									</div>
									<div className="box-dream style-row wow fadeInUp">
										<div className="image">
											<div className="list-tags">
												<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
											</div>
											<div className="button-heart"><i className="flaticon-heart-1" /></div>
											<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
												<SliderBoxDream path="house/property-listing" start={4} end={7} />
											</div>
										</div>
										<div className="content">
											<div className="head">
												<div className="price">$815,000</div>
												<div className="title">
													<Link href="/property-single-v1">Luxury Mansion</Link>
												</div>
											</div>
											<div className="location">
												<div className="icon">
													<i className="flaticon-location" />
												</div>
												<p>148-37 88th Ave, Jamaica, NY 11435</p>
											</div>
											<p>This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Valley.</p>
											<div className="icon-box">
												<div className="item">
													<i className="flaticon-hotel" />
													<p>4 Beds</p>
												</div>
												<div className="item">
													<i className="flaticon-bath-tub" />
													<p>3 Baths</p>
												</div>
												<div className="item">
													<i className="flaticon-minus-front" />
													<p>2660 Sqft</p>
												</div>
											</div>
										</div>
									</div>
									<div className="box-dream style-row wow fadeInUp">
										<div className="image">
											<div className="list-tags">
												<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
											</div>
											<div className="button-heart"><i className="flaticon-heart-1" /></div>
											<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
												<SliderBoxDream path="house/property-listing" start={5} end={8} />
											</div>
										</div>
										<div className="content">
											<div className="head">
												<div className="price">$815,000</div>
												<div className="title">
													<Link href="/property-single-v1">Home in Merrick Way</Link>
												</div>
											</div>
											<div className="location">
												<div className="icon">
													<i className="flaticon-location" />
												</div>
												<p>148-37 88th Ave, Jamaica, NY 11435</p>
											</div>
											<p>This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Valley.</p>
											<div className="icon-box">
												<div className="item">
													<i className="flaticon-hotel" />
													<p>4 Beds</p>
												</div>
												<div className="item">
													<i className="flaticon-bath-tub" />
													<p>3 Baths</p>
												</div>
												<div className="item">
													<i className="flaticon-minus-front" />
													<p>2660 Sqft</p>
												</div>
											</div>
										</div>
									</div>
									<div className="box-dream style-row wow fadeInUp">
										<div className="image">
											<div className="list-tags">
												<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
											</div>
											<div className="button-heart"><i className="flaticon-heart-1" /></div>
											<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
												<SliderBoxDream path="house/property-listing" start={6} end={9} />
											</div>
										</div>
										<div className="content">
											<div className="head">
												<div className="price">$815,000</div>
												<div className="title">
													<Link href="/property-single-v1">Villa in Coral Gables</Link>
												</div>
											</div>
											<div className="location">
												<div className="icon">
													<i className="flaticon-location" />
												</div>
												<p>148-37 88th Ave, Jamaica, NY 11435</p>
											</div>
											<p>This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Valley.</p>
											<div className="icon-box">
												<div className="item">
													<i className="flaticon-hotel" />
													<p>4 Beds</p>
												</div>
												<div className="item">
													<i className="flaticon-bath-tub" />
													<p>3 Baths</p>
												</div>
												<div className="item">
													<i className="flaticon-minus-front" />
													<p>2660 Sqft</p>
												</div>
											</div>
										</div>
									</div>
								</div>
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
							<div className="col-lg-4">
								<div className="sidebar">
									<div className="sidebar-item sidebar-categories no-bg">
										<div className="sidebar-title">Property Types</div>
										<ul>
											<li>
												<Link href="/#">Apartment</Link>
											</li>
											<li className="active">
												<Link href="/#">Office</Link>
											</li>
											<li>
												<Link href="/#">Single Family</Link>
											</li>
											<li>
												<Link href="/#">Shop</Link>
											</li>
											<li>
												<Link href="/#">Villa</Link>
											</li>
										</ul>
									</div>
									<div className="sidebar-item sidebar-exclusive no-bg relative">
										<div className="sidebar-title">Exclusive Property</div>
										<div className="top-wrap arrow-style-2">
											<div className="swiper-button-prev exclusive-prev" />
											<div className="swiper-button-next exclusive-next" />
										</div>
										<Swiper {...sliderExclusive} className="swiper-container slider-exclusive">
											<div className="swiper-wrapper">
												<SwiperSlide>
													<div className="box-dream style-absolute type-no-bg-content style-properties-1 item-1">
														<div className="image">
															<div className="list-tags">
																<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
																<Link href="/#" className="tags-item featured">FEATURED</Link>
															</div>
															<img className="w-full" src="/images/sidebar/img-1.jpg" alt="" />
														</div>
														<div className="content">
															<div className="price">$815,000</div>
															<div className="head">
																<div className="title">
																	<Link href="/property-single-v1">Archer House</Link>
																</div>
															</div>
															<div className="location">
																<div className="icon">
																	<i className="flaticon-location" />
																</div>
																<p>148-37 88th Ave, Jamaica, NY 11435</p>
															</div>
															<div className="icon-box">
																<div className="item">
																	<i className="flaticon-hotel" />
																	<p>4</p>
																</div>
																<div className="item">
																	<i className="flaticon-bath-tub" />
																	<p>3</p>
																</div>
																<div className="item">
																	<i className="flaticon-minus-front" />
																	<p>2660</p>
																</div>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="box-dream style-absolute type-no-bg-content style-properties-1 item-1">
														<div className="image">
															<div className="list-tags">
																<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
																<Link href="/#" className="tags-item featured">FEATURED</Link>
															</div>
															<img className="w-full" src="/images/sidebar/img-1.jpg" alt="" />
														</div>
														<div className="content">
															<div className="price">$815,000</div>
															<div className="head">
																<div className="title">
																	<Link href="/property-single-v1">Archer House</Link>
																</div>
															</div>
															<div className="location">
																<div className="icon">
																	<i className="flaticon-location" />
																</div>
																<p>148-37 88th Ave, Jamaica, NY 11435</p>
															</div>
															<div className="icon-box">
																<div className="item">
																	<i className="flaticon-hotel" />
																	<p>4</p>
																</div>
																<div className="item">
																	<i className="flaticon-bath-tub" />
																	<p>3</p>
																</div>
																<div className="item">
																	<i className="flaticon-minus-front" />
																	<p>2660</p>
																</div>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="box-dream style-absolute type-no-bg-content style-properties-1 item-1">
														<div className="image">
															<div className="list-tags">
																<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
																<Link href="/#" className="tags-item featured">FEATURED</Link>
															</div>
															<img className="w-full" src="/images/sidebar/img-1.jpg" alt="" />
														</div>
														<div className="content">
															<div className="price">$815,000</div>
															<div className="head">
																<div className="title">
																	<Link href="/property-single-v1">Archer House</Link>
																</div>
															</div>
															<div className="location">
																<div className="icon">
																	<i className="flaticon-location" />
																</div>
																<p>148-37 88th Ave, Jamaica, NY 11435</p>
															</div>
															<div className="icon-box">
																<div className="item">
																	<i className="flaticon-hotel" />
																	<p>4</p>
																</div>
																<div className="item">
																	<i className="flaticon-bath-tub" />
																	<p>3</p>
																</div>
																<div className="item">
																	<i className="flaticon-minus-front" />
																	<p>2660</p>
																</div>
															</div>
														</div>
													</div>
												</SwiperSlide>
											</div>
										</Swiper>
									</div>
									<div className="sidebar-item sidebar-agents-1 no-bg">
										<div className="sidebar-title">Agents</div>
										<ul>
											<li>
												<div className="image">
													<img src="/images/sidebar/agent-1.png" alt="" />
												</div>
												<div className="content">
													<div className="name">
														<Link href="/#">Jane Cooper</Link>
													</div>
													<p>sale@justhome.com</p>
													<p>3-596 95 38 12</p>
												</div>
											</li>
											<li>
												<div className="image">
													<img src="/images/sidebar/agent-2.png" alt="" />
												</div>
												<div className="content">
													<div className="name">
														<Link href="/#">Marvin McKinney</Link>
													</div>
													<p>sale@justhome.com</p>
													<p>3-596 95 38 12</p>
												</div>
											</li>
											<li>
												<div className="image">
													<img src="/images/sidebar/agent-3.png" alt="" />
												</div>
												<div className="content">
													<div className="name">
														<Link href="/#">Cameron Williamson</Link>
													</div>
													<p>sale@justhome.com</p>
													<p>3-596 95 38 12</p>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</Layout >
		</>
	)
}