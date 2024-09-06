import Link from "next/link";
import Menu from "../Menu";
export default function Header11({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isLogin,
  handleLogin,
  isRegister,
  handleRegister,
}) {
  return (
    <>
      <header
        id="header_main"
        className={`header style-fixed ${scroll ? "is-fixed is-small" : ""}`}
      >
        <div className="header-inner background-white">
          <div className="header-inner-wrap">
            <div id="site-logo">
              <Link href="/" rel="home">
                <img
                  className="d-block nav-bar-logo "
                  id="logo-header"
                  src="/images/logo/logo.png"
                  alt=""
                />
              </Link>
            </div>
            <nav className="main-menu">
              <Menu />
            </nav>
            <div className="header-right gap30">
              <div onClick={handleLogin} className="header-user-login">
                <div className="image">
                  <img src="/images/author/author-6.png" alt="" />
                </div>
                <div className="name">Ali Tufan</div>
              </div>
              <div className="header-btn">
                <Link
                  href="/dashboard-add-properties"
                  className="tf-button-default"
                >
                  Add Listing
                </Link>
              </div>
            </div>
            <a
              className="mobile-nav-toggler mobile-button"
              onClick={handleMobileMenu}
            />
          </div>
        </div>
      </header>
    </>
  );
}
