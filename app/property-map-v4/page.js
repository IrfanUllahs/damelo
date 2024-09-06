'use client'
import Layout from "@/components/layout/Layout"
import SliderBoxDream from "@/components/slider/SliderBoxDream"
import dynamic from 'next/dynamic'
import Link from "next/link"
const MapCluster = dynamic(() => import('@/components/elements/MapCluster'), {
	ssr: false,
})
export default function PropertyMapV4() {

	return (
		<>

			<Layout headerStyle={13} mainContentCls="spacing-20">
				<div className="property-map-wrap-v4">
					<div className="wrap-map-v4">
						<div className="map-style-fixed">
							<MapCluster />
						</div>
					</div>
					<div>
						<div className="box-filter-small">
							<form className="form-search">
								<div className="input-search relative">
									<fieldset className="name">
										<input type="text" placeholder="New York NY homes" className="border-radius-corner" name="name" tabIndex={2} aria-required="true" required />
									</fieldset>
									<div className="button-submit style-absolute-right-center">
										<button className="style-icon-default" type="submit"><i className="flaticon-magnifiying-glass" /></button>
									</div>
								</div>
								<select className="nice-select" tabIndex={0}>


									<option data-value className="option selected">For Sale</option>
									<option data-value="For Ren" className="option">For Ren</option>
									<option data-value="Sold" className="option">Sold</option>

								</select>
								<select className="nice-select" tabIndex={0}>
									<option data-value className="option selected focus">All Type</option>
									<option data-value="Office" className="option">Office</option>
									<option data-value="Villa" className="option">Villa</option>
									<option data-value="Shop" className="option">Shop</option>

								</select>
								<div className="wg-filter style-more">
									<div className="tf-button-filter btn-filter border-radius">More</div>
									<div className="open-filter">
										<div>
											<div className="grid-3-cols mb-20">
												<select className="nice-select" tabIndex={0}>


													<option data-value className="option selected">City</option>
													<option data-value="New York" className="option">New York</option>
													<option data-value="Paris" className="option">Paris</option>
													<option data-value="Ha Noi" className="option">Ha Noi</option>

												</select>
												<select className="nice-select" tabIndex={0}>


													<option data-value className="option selected">Bedrooms</option>
													<option data-value="1 Bed" className="option">1 Bed</option>
													<option data-value="2 Bed" className="option">2 Bed</option>

												</select>
												<select className="nice-select" tabIndex={0}>


													<option data-value className="option selected">Bathrooms</option>
													<option data-value="1 Bath" className="option">1 Bath</option>
													<option data-value="2 Bath" className="option">2 Bath</option>

												</select>
											</div>
											<div className="grid-2-cols">
												<fieldset className="name">
													<input type="text" placeholder="Min. Area" className name="name" tabIndex={2} aria-required="true" required />
												</fieldset>
												<fieldset className="name">
													<input type="text" placeholder="Max. Area" className name="name" tabIndex={2} aria-required="true" required />
												</fieldset>
												<select className="nice-select" tabIndex={0}>


													<option data-value className="option selected">Min. Price</option>
													<option data-value="100 $" className="option">100 $</option>
													<option data-value="150 $" className="option">150 $</option>

												</select>
												<select className="nice-select" tabIndex={0}>


													<option data-value className="option selected">Max. Price</option>
													<option data-value="1000 $" className="option">1000 $</option>
													<option data-value="1500 $" className="option">1500 $</option>

												</select>
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
								</div >
							</form >
						</div >
						<div className="top">
							<h3 className="wow fadeInUp">Real Estate &amp; Homes For Sale</h3>
							<div className="sub wow fadeInUp">
								<p>9,998 results</p>
							</div>
						</div>
						<div className="list-box-dream">
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
					</div >
				</div >

			</Layout >
		</>
	)
}