
export default function Footer4() {
	return (
		<>

			<footer className="footer bg-white type-home8">
				<div className="footer-inner">
					<div className="footer-inner-wrap">
						<div className="top-footer">
							<div className="logo-footer">
								<a href="index.html">
									<img id="logo-footer" src="images/logo/logo.svg" alt="images" />
								</a>
							</div>
							<div className="wg-social style-black">
								<span>Follow Us</span>
								<ul className="list-social">
									<li>
										<a href="#">
											<i className="icon-facebook" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="icon-twitter" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="icon-instagram" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="icon-linkedin2" />
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="center-footer">
							<div className="footer-cl-1">
								<div className="ft-title">Subscribe</div>
								<form className="form-subscribe style-line-bottom">
									<fieldset className="email">
										<input type="email" placeholder="Your e-mail" className="style-1" name="email" tabIndex={2} defaultValue aria-required="true" required />
									</fieldset>
									<div className="button-submit style-absolute-right">
										<button className="tf-button-bg" type="submit">Send <i className="icon-arrow-right-add" /></button>
									</div>
								</form>
								<div className="text">Subscribe to our newsletter to receive our weekly feed.</div>
							</div>
							<div className="footer-cl-2">
								<div className="ft-title">Discover</div>
								<ul className="navigation-menu-footer">
									<li><a href="property-map-v1.html">Miami</a></li>
									<li><a href="property-map-v1.html">New York</a></li>
									<li><a href="property-map-v1.html">Chicago</a></li>
									<li><a href="property-map-v1.html">Sacramento</a></li>
									<li><a href="#">Los Angeles</a></li>
									<li><a href="#">San Francisco</a></li>
								</ul>
							</div>
							<div className="footer-cl-3">
								<div className="ft-title">Quick Links</div>
								<ul className="navigation-menu-footer">
									<li><a href="about.html">About</a></li>
									<li><a href="contact.html">Contact</a></li>
									<li><a href="faq.html">Faq</a></li>
									<li><a href="blog-list-v1.html">Blog</a></li>
									<li><a href="pricing.html">Pricing Plans</a></li>
									<li><a href="#">Privacy Policy</a></li>
									<li><a href="#">Terms &amp; Conditions</a></li>
								</ul>
							</div>
							<div className="footer-cl-4">
								<div className="ft-title">Contact Us</div>
								<ul className="navigation-menu-footer">
									<li>
										<div className="text">hi@justhome.com (123) 456-7890</div>
									</li>
								</ul>
							</div>
							<div className="footer-cl-5">
								<div className="ft-title">Our Address</div>
								<ul className="navigation-menu-footer">
									<li>
										<div className="text">90 Fifth Avenue, 3rd Floor San Francisco, CA 1980</div>
									</li>
								</ul>
							</div>
							<div className="footer-cl-6">
								<div className="ft-title">Get the app</div>
								<ul className="ft-download bg-fourth">
									<li>
										<a href="#">
											<div className="icon">
												<i className="icon-appleinc" />
											</div>
											<div className="app">
												<div>Download on the</div>
												<div>Apple Store</div>
											</div>
										</a>
									</li>
									<li>
										<a href="#">
											<div className="icon">
												<i className="icon-ch-play" />
											</div>
											<div className="app">
												<div>Get in on</div>
												<div>Google Play</div>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="bottom-footer">
							<div className="text">Copyright © 2024. JustHome</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
