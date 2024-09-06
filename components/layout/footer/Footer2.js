import Link from "next/link";

export default function Footer2({ footerCls }) {
  return (
    <>
      <footer
        className={`footer  style-1 style-full ${footerCls ? footerCls : ""}`}
      >
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
                    className="style-4"
                    name="name"
                    tabIndex={2}
                    aria-required="true"
                    required
                  />
                </fieldset>
                <div className="button-submit style-absolute-right-center">
                  <button className="style-subscribe" type="submit">
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
                    <Link href="/">
                      <img src="/images/logo/logo-footer.svg" alt="images" />
                    </Link>
                  </div>
                  <div className="wg-social">
                    <ul className="list-social">
                      <li>
                        <Link href="/#">
                          <i className="icon-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <i className="icon-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <i className="icon-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <i className="icon-linkedin2" />
                        </Link>
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
