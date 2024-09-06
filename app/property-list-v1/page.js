
import Layout from "@/components/layout/Layout"
import SliderBoxDream from "@/components/slider/SliderBoxDream"
import Link from "next/link"
export default function PropertyListV1() {

	return (
		<>

			<Layout headerStyle={12} footerStyle={1}>
				<div className="flat-title">
					<div className="themesflat-container full">
						<div className="row">
							<div className="col-12">
								<div className="content">
									<h2>Real Estate &amp; Homes For Sale</h2>
									<ul className="breadcrumbs">
										<li><Link href="/">Home</Link></li><li>/</li><li>Property List</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="property-list-wrap v1">
					<div className="themesflat-container">
						<div className="row">
							<div className="col-lg-4">
								<form className="form-sidebar-left">
									<div className="input-search relative wow fadeInUp">
										<fieldset className="name">
											<input type="text" placeholder="New York NY homes" className name="name" tabIndex={2} aria-required="true" required />
										</fieldset>
										<div className="button-submit style-absolute-right-center">
											<button className="style-icon-default" type="submit"><i className="flaticon-magnifiying-glass" /></button>
										</div>
									</div>
									<select className="nice-select wow fadeInUp" tabIndex={0}>


										<option data-value className="option selected">For Sale</option>
										<option data-value="For Ren" className="option">For Ren</option>
										<option data-value="Sold" className="option">Sold</option>

									</select>
									<select className="nice-select wow fadeInUp" tabIndex={0}>

										<option data-value className="option selected">Apartments</option>
										<option data-value="For Ren" className="option">Office</option>
										<option data-value="Sold" className="option">Villa</option>

									</select>
									<select className="nice-select wow fadeInUp" tabIndex={0}>

										<option data-value className="option selected">USA</option>
										<option data-value="For Ren" className="option">China</option>
										<option data-value="Sold" className="option">Viet Nam</option>

									</select>
									<select className="nice-select wow fadeInUp" tabIndex={0}>

										<option data-value className="option selected">2</option>
										<option data-value="For Ren" className="option">3</option>
										<option data-value="Sold" className="option">4</option>

									</select>
									<select className="nice-select wow fadeInUp" tabIndex={0}>

										<option data-value className="option selected">2</option>
										<option data-value="For Ren" className="option">3</option>
										<option data-value="Sold" className="option">4</option>

									</select>
									<select className="nice-select wow fadeInUp" tabIndex={0}>

										<option data-value className="option selected">2</option>
										<option data-value="For Ren" className="option">3</option>
										<option data-value="Sold" className="option">4</option>

									</select>
									<div className="grid-2-cols">
										<fieldset className="name">
											<input type="text" placeholder="Min. Area" className name="name" tabIndex={2} aria-required="true" required />
										</fieldset>
										<fieldset className="name">
											<input type="text" placeholder="Max. Area" className name="name" tabIndex={2} aria-required="true" required />
										</fieldset>
										<select className="nice-select wow fadeInUp" tabIndex={0}>

											<option data-value className="option">Min. Price</option>
											<option data-value="100 $" className="option">100 $</option>
											<option data-value="150 $" className="option">150 $</option>

										</select>
										<select className="nice-select wow fadeInUp" data-wow-delay="0.1s" tabIndex={0}>

											<option data-value className="option">Max. Price</option>
											<option data-value="1000 $" className="option">1000 $</option>
											<option data-value="1500 $" className="option">1500 $</option>

										</select>
									</div>
									<Link href="/#" className="tf-button-other wow fadeInUp"><div className="icon" />Other Features</Link>
									<Link href="/#" className="tf-button-primary w-full wow fadeInUp">Search Property<i className="icon-arrow-right-add" /></Link>
								</form>
							</div>
							<div className="col-lg-8">
								<div className="top">
									<form className>
										<div className="wg-filter">
											<div className="tf-button-filter btn-filter"><i className="flaticon-filter" />Filter</div>
											<div className="open-filter filter-no-content" id="a1">
												<div className="input-search relative wow fadeInUp">
													<fieldset className="name">
														<input type="text" placeholder="New York NY homes" className name="name" tabIndex={2} aria-required="true" required />
													</fieldset>
													<div className="button-submit style-absolute-right-center">
														<button className="style-icon-default" type="submit"><i className="flaticon-magnifiying-glass" /></button>
													</div>
												</div>
												<select className="nice-select wow fadeInUp" tabIndex={0}>


													<option data-value className="option selected">For Sale</option>
													<option data-value="For Ren" className="option">For Ren</option>
													<option data-value="Sold" className="option">Sold</option>

												</select>
												<select className="nice-select wow fadeInUp" tabIndex={0}>

													<option data-value className="option selected">Apartments</option>
													<option data-value="For Ren" className="option">Office</option>
													<option data-value="Sold" className="option">Villa</option>

												</select>
												<select className="nice-select wow fadeInUp" tabIndex={0}>

													<option data-value className="option selected">USA</option>
													<option data-value="For Ren" className="option">China</option>
													<option data-value="Sold" className="option">Viet Nam</option>

												</select>
												<select className="nice-select wow fadeInUp" tabIndex={0}>

													<option data-value className="option selected">2</option>
													<option data-value="For Ren" className="option">3</option>
													<option data-value="Sold" className="option">4</option>

												</select>
												<select className="nice-select wow fadeInUp" tabIndex={0}>

													<option data-value className="option selected">2</option>
													<option data-value="For Ren" className="option">3</option>
													<option data-value="Sold" className="option">4</option>

												</select>
												<select className="nice-select wow fadeInUp" tabIndex={0}>

													<option data-value className="option selected">2</option>
													<option data-value="For Ren" className="option">3</option>
													<option data-value="Sold" className="option">4</option>

												</select>
												<div className="grid-2-cols">
													<fieldset className="name">
														<input type="text" placeholder="Min. Area" className name="name" tabIndex={2} aria-required="true" required />
													</fieldset>
													<fieldset className="name">
														<input type="text" placeholder="Max. Area" className name="name" tabIndex={2} aria-required="true" required />
													</fieldset>
													<select className="nice-select wow fadeInUp" tabIndex={0}>

														<option data-value className="option">Min. Price</option>
														<option data-value="100 $" className="option">100 $</option>
														<option data-value="150 $" className="option">150 $</option>

													</select>
													<select className="nice-select wow fadeInUp" data-wow-delay="0.1s" tabIndex={0}>

														<option data-value className="option">Max. Price</option>
														<option data-value="1000 $" className="option">1000 $</option>
														<option data-value="1500 $" className="option">1500 $</option>

													</select>
												</div>
												<Link href="/#" className="tf-button-other wow fadeInUp"><div className="icon" />Other Features</Link>
												<Link href="/#" className="tf-button-primary w-full wow fadeInUp">Search Property<i className="icon-arrow-right-add" /></Link>
											</div>
										</div>
									</form>
									<div className="sub">
										<p>9,998 results</p>
										<div className="sort-wrap">
											<p className="wow fadeInUp">Sort by</p>
											<select className="nice-select default wow fadeInUp" tabIndex={0}>

												<option data-value className="option selected">Newest</option>
												<option data-value="For Ren" className="option">Oldest</option>
												<option data-value="Sold" className="option">3 days</option>

											</select>
										</div>
									</div >
								</div >
								<div className="row">
									<div className="col-xl-6">
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
									</div>
									<div className="col-xl-6">
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
									</div>
									<div className="col-xl-6">
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
									</div>
									<div className="col-xl-6">
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
									<div className="col-xl-6">
										<div className="box-dream has-border wow fadeInUp">
											<div  className="image-group relative">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
													<Link href="/#" className="tags-item featured">FEATURED</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/property-listing" start={5} end={8} />
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
									</div>
									<div className="col-xl-6">
										<div className="box-dream has-border wow fadeInUp" data-wow-delay="0.1s">
											<div  className="image-group relative">
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
									</div>
									<div className="col-xl-6">
										<div className="box-dream has-border wow fadeInUp">
											<div  className="image-group relative">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/property-listing" start={7} end={10} />
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
									</div>
									<div className="col-xl-6">
										<div className="box-dream has-border wow fadeInUp" data-wow-delay="0.1s">
											<div  className="image-group relative">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/property-listing" start={8} end={11} />
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
								</div>
								<div className="row">
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
							</div >
						</div >
					</div >
				</div >

			</Layout >
		</>
	)
}