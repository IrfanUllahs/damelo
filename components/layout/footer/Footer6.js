export default function Footer6() {
  return (
    <>
      <footer className="footer style-1 style-full background-white type-1">
        <div className="footer-inner">
          <div className="footer-inner-wrap">
            <div className="center-footer">
              <div className="icon">
                <i className="flaticon-paper-plane" />
              </div>
              <h2>Stay Up to Date</h2>
              <p>Subscribe to our newsletter to receive our weekly feed.</p>
              <form className="form-subscribe">
                <fieldset className="name">
                  <input
                    type="text"
                    placeholder="Enter Your Email Address"
                    className="style-2"
                    name="name"
                    tabIndex={2}
                    aria-required="true"
                    required
                  />
                </fieldset>
                <div className="button-submit style-absolute-right-center">
                  <button
                    className="style-subscribe type-secondary"
                    type="submit"
                  >
                    <i className="flaticon-message" />
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="themesflat-container">
            <div className="row">
              <div className="col-12">
                <div className="inner">
                  <p>Copyright © 2024. Demelo Real Estate</p>
                  <div id="footer-logo">
                    <a href="index.html">
                      <img
                        src="images/logo/logo-footer-black.svg"
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="wg-social style-black">
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
