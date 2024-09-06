'use client'
import Layout from "@/components/layout/Layout"
import SliderBoxDream from "@/components/slider/SliderBoxDream"
import dynamic from 'next/dynamic'
import Link from "next/link"
const MapCluster = dynamic(() => import('@/components/elements/MapCluster'), {
	ssr: false,
})
export default function PropertyMapV1() {

	return (
		<>

			<Layout headerStyle={12} footerStyle={1}>
				<div>
					<div className="themesflat-container w1800">
						<div className="row">
							<div className="col-12">
								<div className="page-head">
									<div className="widget-tabs style-3 style-row">
										<div className="widget-content-tab">
											<div className="widget-content-inner active">
												<form className="form-search">
													<div className="input-search">
														<fieldset className="name">
															<input type="text" placeholder="New York NY homes" className="border-radius-corner" name="name" tabIndex={2} aria-required="true" required />
														</fieldset>
														<div className="button-submit style-absolute-right-center">
															<button className="style-icon-default" type="submit"><i className="flaticon-magnifiying-glass" /></button>
														</div>
													</div>
													<select className="nice-select" tabIndex={0}>


														<option className="option selected">For Sale</option>
														<option data-value="For Ren" className="option">For Ren</option>
														<option data-value="Sold" className="option">Sold</option>

													</select>
													<select className="nice-select" tabIndex={0}>
														<option className="option selected focus">All Type</option>
														<option data-value="Office" className="option">Office</option>
														<option data-value="Villa" className="option">Villa</option>
														<option data-value="Shop" className="option">Shop</option>

													</select>
													<div className="wg-filter style-price">
														<div className="tf-button-filter btn-filter border-radius">Price</div>
														<div className="open-filter">
															<div>
																<div className="title">Price</div>
																<div className="grid-2-cols">
																	<select className="nice-select" tabIndex={0}>


																		<option className="option selected">Min. Price</option>
																		<option data-value="100 $" className="option">100 $</option>
																		<option data-value="150 $" className="option">150 $</option>

																	</select>
																	<select className="nice-select" tabIndex={0}>


																		<option className="option selected">Max. Price</option>
																		<option data-value="1000 $" className="option">1000 $</option>
																		<option data-value="1500 $" className="option">1500 $</option>

																	</select>
																</div>
															</div>
														</div>
													</div>
													<select className="nice-select" tabIndex={0}>


														<option className="option selected">2</option>
														<option data-value="For Ren" className="option">3</option>
														<option data-value="Sold" className="option">4</option>

													</select>
													<select className="nice-select" tabIndex={0}>


														<option className="option selected">2</option>
														<option data-value="For Ren" className="option">3</option>
														<option data-value="Sold" className="option">4</option>

													</select>
													<select className="nice-select" tabIndex={0}>


														<option className="option selected">USA</option>
														<option data-value="For Ren" className="option">Viet Nam</option>
														<option data-value="Sold" className="option">China</option>

													</select>
													<div className="wg-filter style-more">
														<div className="tf-button-filter btn-filter border-radius">More</div>
														<div className="open-filter">
															<div>
																<div className="grid-3-cols mb-20">
																	<select className="nice-select" tabIndex={0}>


																		<option className="option selected">2</option>
																		<option data-value="New York" className="option">3</option>
																		<option data-value="Paris" className="option">4</option>

																	</select>
																	<select className="nice-select" tabIndex={0}>


																		<option className="option selected">Archer House</option>
																		<option data-value="1 Bed" className="option">Villa One Hyde Park</option>
																		<option data-value="2 Bed" className="option">Home Pitt Street</option>

																	</select>
																	<fieldset className="name">
																		<input type="text" placeholder="Property ID" className name="name" tabIndex={2} aria-required="true" required />
																	</fieldset>
																</div>
																<div className="grid-4-cols">
																	<fieldset className="name">
																		<input type="text" placeholder="Min. Year Built" className name="name" tabIndex={2} aria-required="true" required />
																	</fieldset>
																	<fieldset className="name">
																		<input type="text" placeholder="Min. Year Built" className name="name" tabIndex={2} aria-required="true" required />
																	</fieldset>
																	<fieldset className="name">
																		<input type="text" placeholder="Min. Square Feet" className name="name" tabIndex={2} aria-required="true" required />
																	</fieldset>
																	<fieldset className="name">
																		<input type="text" placeholder="Max. Square Feet" className name="name" tabIndex={2} aria-required="true" required />
																	</fieldset>
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
												</form>
											</div>
											<div className="widget-content-inner">
												<form className="form-search">
													<div className="input-search">
														<fieldset className="name">
															<input type="text" placeholder="New York NY homes" className="border-radius-corner" name="name" tabIndex={2} aria-required="true" required />
														</fieldset>
														<div className="button-submit style-absolute-right-center">
															<button className="style-icon-default" type="submit"><i className="flaticon-magnifiying-glass" /></button>
														</div>
													</div>
													<select className="nice-select" tabIndex={0}>


														<option className="option selected">For Sale</option>
														<option data-value="For Ren" className="option">For Ren</option>
														<option data-value="Sold" className="option">Sold</option>

													</select>
													<select className="nice-select" tabIndex={0}>
														<option className="option selected focus">All Type</option>
														<option data-value="Office" className="option">Office</option>
														<option data-value="Villa" className="option">Villa</option>
														<option data-value="Shop" className="option">Shop</option>

													</select>
													<div className="wg-filter style-price">
														<div className="tf-button-filter btn-filter border-radius">Price</div>
														<div className="open-filter">
															<div>
																<div className="title">Price</div>
																<div className="grid-2-cols">
																	<select className="nice-select" tabIndex={0}>


																		<option className="option selected">Min. Price</option>
																		<option data-value="100 $" className="option">100 $</option>
																		<option data-value="150 $" className="option">150 $</option>

																	</select>
																	<select className="nice-select" tabIndex={0}>


																		<option className="option selected">Max. Price</option>
																		<option data-value="1000 $" className="option">1000 $</option>
																		<option data-value="1500 $" className="option">1500 $</option>

																	</select>
																</div>
															</div>
														</div>
													</div >
													<select className="nice-select" tabIndex={0}>


														<option className="option selected">2</option>
														<option data-value="For Ren" className="option">3</option>
														<option data-value="Sold" className="option">4</option>

													</select >
													<select className="nice-select" tabIndex={0}>


														<option className="option selected">2</option>
														<option data-value="For Ren" className="option">3</option>
														<option data-value="Sold" className="option">4</option>

													</select >
													<select className="nice-select" tabIndex={0}>


														<option className="option selected">USA</option>
														<option data-value="For Ren" className="option">Viet Nam</option>
														<option data-value="Sold" className="option">China</option>

													</select >
													<div className="wg-filter style-more">
														<div className="tf-button-filter btn-filter border-radius">More</div>
														<div className="open-filter">
															<div>
																<div className="grid-3-cols mb-20">
																	<select className="nice-select" tabIndex={0}>


																		<option className="option selected">2</option>
																		<option data-value="New York" className="option">3</option>
																		<option data-value="Paris" className="option">4</option>

																	</select>
																	<select className="nice-select" tabIndex={0}>


																		<option className="option selected">Archer House</option>
																		<option data-value="1 Bed" className="option">Villa One Hyde Park</option>
																		<option data-value="2 Bed" className="option">Home Pitt Street</option>

																	</select>
																	<fieldset className="name">
																		<input type="text" placeholder="Property ID" className name="name" tabIndex={2} aria-required="true" required />
																	</fieldset>
																</div>
																<div className="grid-4-cols">
																	<fieldset className="name">
																		<input type="text" placeholder="Min. Year Built" className name="name" tabIndex={2} aria-required="true" required />
																	</fieldset>
																	<fieldset className="name">
																		<input type="text" placeholder="Min. Year Built" className name="name" tabIndex={2} aria-required="true" required />
																	</fieldset>
																	<fieldset className="name">
																		<input type="text" placeholder="Min. Square Feet" className name="name" tabIndex={2} aria-required="true" required />
																	</fieldset>
																	<fieldset className="name">
																		<input type="text" placeholder="Max. Square Feet" className name="name" tabIndex={2} aria-required="true" required />
																	</fieldset>
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
														</div >
													</div >
												</form >
											</div >
										</div >
										<ul className="widget-menu-tab">
											<li className="item-title active">
												<span className="inner">List</span>
											</li>
											<li className="item-title">
												<span className="inner">Map</span>
											</li>
										</ul>
									</div >
								</div >
							</div >
						</div >
					</div >
					{/* /page-head */}
					{/* property-grid */}
					<div className="themesflat-container w1800">
						<div className="row">
							<div className="col-lg-6">
								<div className="top">
									<h3 className="wow fadeInUp">Real Estate &amp; Homes For Sale</h3>
									<div className="sub">
										<p className="wow fadeInUp">9,998 results</p>
										<div className="sort-wrap wow fadeInUp">
											<p>Sort by</p>
											<select className="nice-select default" tabIndex={0}>


												<option className="option selected">Newest</option>
												<option data-value="For Ren" className="option">Oldest</option>
												<option data-value="Sold" className="option">3 days</option>

											</select>
										</div>
									</div>
								</div>
								<div className="property-grid-wrap type-2-cols">
									<div className="box-dream has-border wow fadeInUp">
										<div  className="image-group relative">
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
												<div className="title">
													<Link href="/property-single-v1">Archer House</Link>
												</div>
												<div className="price">$815,000</div>
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
									<div className="box-dream has-border wow fadeInUp" data-wow-delay="0.1s">
										<div  className="image-group relative">
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
												<div className="title">
													<Link href="/property-single-v1">Villa One Hyde Park</Link>
												</div>
												<div className="price">$815,000</div>
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
									<div className="box-dream has-border wow fadeInUp">
										<div  className="image-group relative">
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
												<div className="title">
													<Link href="/property-single-v1">Home Pitt Street</Link>
												</div>
												<div className="price">$815,000</div>
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
									<div className="box-dream has-border wow fadeInUp" data-wow-delay="0.1s">
										<div  className="image-group relative">
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
												<div className="title">
													<Link href="/property-single-v1">Relaxing Villa</Link>
												</div>
												<div className="price">$815,000</div>
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
							<div className="col-lg-6">
								<div className="wrap-map-v1 ">
									<MapCluster />
								</div>
							</div>
						</div>
					</div >
				</div >

			</Layout >
		</>
	)
}