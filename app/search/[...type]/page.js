import Layout from "@/components/layout/Layout";
import SliderBoxDream from "@/components/slider/SliderBoxDream";
import Breadcrumbs from "@/components/CommonBreadcrumbs/CommonBreadcrumbs";
import { FaImage } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import Link from "next/link";
import Searchcard from "@/components/searchCard/Searchcard";
import SearchPageLayout from "@/components/layout/SearchPageLayout";
export default function SearchProperties() {
  return (
    <>
      <SearchPageLayout headerStyle={12} footerStyle={1}>
        <div className="flat-title  ">
          <div className="themesflat-container full">
            <div className="row">
              <div className="col-12">
                <div className="content">
                  <h3>
                    400 houses and apartments for rent in Malasaña-Universidad,
                    Madrid
                  </h3>
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
                      <input
                        type="text"
                        placeholder="New York NY homes"
                        className
                        name="name"
                        tabIndex={2}
                        aria-required="true"
                        required
                      />
                    </fieldset>
                    <div className="button-submit style-absolute-right-center">
                      <button className="style-icon-default" type="submit">
                        <i className="flaticon-magnifiying-glass" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label>Type of Property</label>
                    <select className="nice-select wow fadeInUp" tabIndex={0}>
                      <option data-value className="option selected">
                        New Construction
                      </option>
                      <option data-value="For Ren" className="option">
                        Housing
                      </option>
                      <option data-value="Sold" className="option">
                        Room
                      </option>
                      <option data-value="Sold" className="option">
                        Offices
                      </option>
                      <option data-value="Sold" className="option">
                        Transfers
                      </option>
                      <option data-value="Sold" className="option">
                        Garages
                      </option>
                      <option data-value="Sold" className="option">
                        Lands
                      </option>
                    </select>
                  </div>
                  <select className="nice-select wow fadeInUp" tabIndex={0}>
                    <option data-value className="option selected">
                      For Sale
                    </option>
                    <option data-value="For Ren" className="option">
                      For Ren
                    </option>
                    <option data-value="Sold" className="option">
                      Sold
                    </option>
                  </select>
                  <select className="nice-select wow fadeInUp" tabIndex={0}>
                    <option data-value className="option selected">
                      Apartments
                    </option>
                    <option data-value="For Ren" className="option">
                      Office
                    </option>
                    <option data-value="Sold" className="option">
                      Villa
                    </option>
                  </select>

                  <select className="nice-select wow fadeInUp" tabIndex={0}>
                    <option data-value className="option selected">
                      2
                    </option>
                    <option data-value="For Ren" className="option">
                      3
                    </option>
                    <option data-value="Sold" className="option">
                      4
                    </option>
                  </select>
                  <select className="nice-select wow fadeInUp" tabIndex={0}>
                    <option data-value className="option selected">
                      2
                    </option>
                    <option data-value="For Ren" className="option">
                      3
                    </option>
                    <option data-value="Sold" className="option">
                      4
                    </option>
                  </select>
                  <select className="nice-select wow fadeInUp" tabIndex={0}>
                    <option data-value className="option selected">
                      2
                    </option>
                    <option data-value="For Ren" className="option">
                      3
                    </option>
                    <option data-value="Sold" className="option">
                      4
                    </option>
                  </select>
                  <div className="grid-2-cols">
                    <fieldset className="name">
                      <input
                        type="text"
                        placeholder="Min. Area"
                        className
                        name="name"
                        tabIndex={2}
                        aria-required="true"
                        required
                      />
                    </fieldset>
                    <fieldset className="name">
                      <input
                        type="text"
                        placeholder="Max. Area"
                        className
                        name="name"
                        tabIndex={2}
                        aria-required="true"
                        required
                      />
                    </fieldset>
                    <select className="nice-select wow fadeInUp" tabIndex={0}>
                      <option data-value className="option">
                        Min. Price
                      </option>
                      <option data-value="100 $" className="option">
                        100 $
                      </option>
                      <option data-value="150 $" className="option">
                        150 $
                      </option>
                    </select>
                    <select
                      className="nice-select wow fadeInUp"
                      data-wow-delay="0.1s"
                      tabIndex={0}
                    >
                      <option data-value className="option">
                        Max. Price
                      </option>
                      <option data-value="1000 $" className="option">
                        1000 $
                      </option>
                      <option data-value="1500 $" className="option">
                        1500 $
                      </option>
                    </select>
                  </div>
                  <div className="searchFilter">
                    <h6>Rooms</h6>
                    <label className="flex items-center  gap-3">
                      <input type="checkbox" value="sale" />
                      <span>0 Rooms (studios)</span>
                    </label>
                    <label className="flex items-center  gap-3">
                      <input type="checkbox" value="sale" />
                      <span>1</span>
                    </label>
                    <label className="flex items-center  gap-3">
                      <input type="checkbox" value="sale" />
                      <span>2</span>
                    </label>
                    <label className="flex items-center  gap-3">
                      <input type="checkbox" value="sale" />
                      <span>3</span>
                    </label>
                    <label className="flex items-center  gap-3">
                      <input type="checkbox" value="sale" />
                      <span>4 bedrooms or more</span>
                    </label>
                  </div>

                  <div className="searchFilter">
                    <h6>Bathrooms</h6>

                    <label className="flex items-center  gap-3">
                      <input type="checkbox" value="sale" />
                      <span>1</span>
                    </label>
                    <label className="flex items-center  gap-3">
                      <input type="checkbox" value="sale" />
                      <span>2</span>
                    </label>
                    <label className="flex items-center  gap-3">
                      <input type="checkbox" value="sale" />
                      <span>3 bathrooms or more </span>
                    </label>
                  </div>
                  <div className="searchFilter">
                    <h6>State</h6>

                    <label className="flex items-center  gap-3">
                      <input type="checkbox" value="sale" />
                      <span>New construction</span>
                    </label>
                    <label className="flex items-center  gap-3">
                      <input type="checkbox" value="sale" />
                      <span>Good condition</span>
                    </label>
                    <label className="flex items-center  gap-3">
                      <input type="checkbox" value="sale" />
                      <span>To reform </span>
                    </label>
                  </div>
                  <div className="searchFilter">
                    <h6>Characteristics</h6>

                    <label className="flex items-center  gap-3">
                      <input type="checkbox" value="sale" />
                      <span>Pets allowed</span>
                    </label>
                    <label className="flex items-center  gap-3">
                      <input type="checkbox" value="sale" />
                      <span>Air-conditioning</span>
                    </label>
                    <label className="flex items-center  gap-3">
                      <input type="checkbox" value="sale" />
                      <span>Built-in wardrobes</span>
                    </label>
                    <label className="flex items-center  gap-3">
                      <input type="checkbox" value="sale" />
                      <span>Elevator</span>
                    </label>
                    <label className="flex items-center  gap-3">
                      <input type="checkbox" value="sale" />
                      <span>Abroad</span>
                    </label>
                    <label className="flex items-center  gap-3">
                      <input type="checkbox" value="sale" />
                      <span>Garage</span>
                    </label>
                    <label className="flex items-center  gap-3">
                      <input type="checkbox" value="sale" />
                      <span>Garden</span>
                    </label>
                    <label className="flex items-center  gap-3">
                      <input type="checkbox" value="sale" />
                      <span>Pool</span>
                    </label>
                  </div>
                  <Link
                    href="/#"
                    className="tf-button-primary w-full wow fadeInUp"
                  >
                    Search Property
                    <i className="icon-arrow-right-add" />
                  </Link>
                </form>
              </div>
              <div className="col-lg-8">
                <div className="top">
                  <form className="filterForm">
                    <div className="wg-filter">
                      <div className="tf-button-filter btn-filter">
                        <i className="flaticon-filter" />
                        Filter
                      </div>
                      <div className="open-filter filter-no-content" id="a1">
                        <div className="input-search relative wow fadeInUp">
                          <fieldset className="name">
                            <input
                              type="text"
                              placeholder="New York NY homes"
                              className
                              name="name"
                              tabIndex={2}
                              aria-required="true"
                              required
                            />
                          </fieldset>
                          <div className="button-submit style-absolute-right-center">
                            <button
                              className="style-icon-default"
                              type="submit"
                            >
                              <i className="flaticon-magnifiying-glass" />
                            </button>
                          </div>
                        </div>
                        <div>
                          <label>Type of Property</label>
                          <select
                            className="nice-select wow fadeInUp"
                            tabIndex={0}
                          >
                            <option data-value className="option selected">
                              New Construction
                            </option>
                            <option data-value="For Ren" className="option">
                              Housing
                            </option>
                            <option data-value="Sold" className="option">
                              Room
                            </option>
                            <option data-value="Sold" className="option">
                              Offices
                            </option>
                            <option data-value="Sold" className="option">
                              Transfers
                            </option>
                            <option data-value="Sold" className="option">
                              Garages
                            </option>
                            <option data-value="Sold" className="option">
                              Lands
                            </option>
                          </select>
                        </div>
                        <select
                          className="nice-select wow fadeInUp"
                          tabIndex={0}
                        >
                          <option data-value className="option selected">
                            For Sale
                          </option>
                          <option data-value="For Ren" className="option">
                            For Ren
                          </option>
                          <option data-value="Sold" className="option">
                            Sold
                          </option>
                        </select>
                        <select
                          className="nice-select wow fadeInUp"
                          tabIndex={0}
                        >
                          <option data-value className="option selected">
                            Apartments
                          </option>
                          <option data-value="For Ren" className="option">
                            Office
                          </option>
                          <option data-value="Sold" className="option">
                            Villa
                          </option>
                        </select>

                        <select
                          className="nice-select wow fadeInUp"
                          tabIndex={0}
                        >
                          <option data-value className="option selected">
                            2
                          </option>
                          <option data-value="For Ren" className="option">
                            3
                          </option>
                          <option data-value="Sold" className="option">
                            4
                          </option>
                        </select>
                        <select
                          className="nice-select wow fadeInUp"
                          tabIndex={0}
                        >
                          <option data-value className="option selected">
                            2
                          </option>
                          <option data-value="For Ren" className="option">
                            3
                          </option>
                          <option data-value="Sold" className="option">
                            4
                          </option>
                        </select>
                        <select
                          className="nice-select wow fadeInUp"
                          tabIndex={0}
                        >
                          <option data-value className="option selected">
                            2
                          </option>
                          <option data-value="For Ren" className="option">
                            3
                          </option>
                          <option data-value="Sold" className="option">
                            4
                          </option>
                        </select>
                        <div className="grid-2-cols">
                          <fieldset className="name">
                            <input
                              type="text"
                              placeholder="Min. Area"
                              className
                              name="name"
                              tabIndex={2}
                              aria-required="true"
                              required
                            />
                          </fieldset>
                          <fieldset className="name">
                            <input
                              type="text"
                              placeholder="Max. Area"
                              className
                              name="name"
                              tabIndex={2}
                              aria-required="true"
                              required
                            />
                          </fieldset>
                          <select
                            className="nice-select wow fadeInUp"
                            tabIndex={0}
                          >
                            <option data-value className="option">
                              Min. Price
                            </option>
                            <option data-value="100 $" className="option">
                              100 $
                            </option>
                            <option data-value="150 $" className="option">
                              150 $
                            </option>
                          </select>
                          <select
                            className="nice-select wow fadeInUp"
                            data-wow-delay="0.1s"
                            tabIndex={0}
                          >
                            <option data-value className="option">
                              Max. Price
                            </option>
                            <option data-value="1000 $" className="option">
                              1000 $
                            </option>
                            <option data-value="1500 $" className="option">
                              1500 $
                            </option>
                          </select>
                        </div>
                        <div className="searchFilter">
                          <h6>Rooms</h6>
                          <label className="flex items-center  gap-3">
                            <input type="checkbox" value="sale" />
                            <span>0 Rooms (studios)</span>
                          </label>
                          <label className="flex items-center  gap-3">
                            <input type="checkbox" value="sale" />
                            <span>1</span>
                          </label>
                          <label className="flex items-center  gap-3">
                            <input type="checkbox" value="sale" />
                            <span>2</span>
                          </label>
                          <label className="flex items-center  gap-3">
                            <input type="checkbox" value="sale" />
                            <span>3</span>
                          </label>
                          <label className="flex items-center  gap-3">
                            <input type="checkbox" value="sale" />
                            <span>4 bedrooms or more</span>
                          </label>
                        </div>

                        <div className="searchFilter">
                          <h6>Bathrooms</h6>

                          <label className="flex items-center  gap-3">
                            <input type="checkbox" value="sale" />
                            <span>1</span>
                          </label>
                          <label className="flex items-center  gap-3">
                            <input type="checkbox" value="sale" />
                            <span>2</span>
                          </label>
                          <label className="flex items-center  gap-3">
                            <input type="checkbox" value="sale" />
                            <span>3 bathrooms or more </span>
                          </label>
                        </div>
                        <div className="searchFilter">
                          <h6>State</h6>

                          <label className="flex items-center  gap-3">
                            <input type="checkbox" value="sale" />
                            <span>New construction</span>
                          </label>
                          <label className="flex items-center  gap-3">
                            <input type="checkbox" value="sale" />
                            <span>Good condition</span>
                          </label>
                          <label className="flex items-center  gap-3">
                            <input type="checkbox" value="sale" />
                            <span>To reform </span>
                          </label>
                        </div>
                        <div className="searchFilter">
                          <h6>Characteristics</h6>

                          <label className="flex items-center  gap-3">
                            <input type="checkbox" value="sale" />
                            <span>Pets allowed</span>
                          </label>
                          <label className="flex items-center  gap-3">
                            <input type="checkbox" value="sale" />
                            <span>Air-conditioning</span>
                          </label>
                          <label className="flex items-center  gap-3">
                            <input type="checkbox" value="sale" />
                            <span>Built-in wardrobes</span>
                          </label>
                          <label className="flex items-center  gap-3">
                            <input type="checkbox" value="sale" />
                            <span>Elevator</span>
                          </label>
                          <label className="flex items-center  gap-3">
                            <input type="checkbox" value="sale" />
                            <span>Abroad</span>
                          </label>
                          <label className="flex items-center  gap-3">
                            <input type="checkbox" value="sale" />
                            <span>Garage</span>
                          </label>
                          <label className="flex items-center  gap-3">
                            <input type="checkbox" value="sale" />
                            <span>Garden</span>
                          </label>
                          <label className="flex items-center  gap-3">
                            <input type="checkbox" value="sale" />
                            <span>Pool</span>
                          </label>
                        </div>
                        <Link
                          href="/#"
                          className="tf-button-primary w-full wow fadeInUp"
                        >
                          Search Property
                          <i className="icon-arrow-right-add" />
                        </Link>
                      </div>
                    </div>
                  </form>
                  <div className="">
                    <p>9,998 results</p>
                    <div className="sort-wrap">
                      <div className="propertyType">
                        <div className="links">
                          <h6>Buy</h6>
                          <h6>Rent</h6>
                          <h6>New Construction</h6>
                        </div>
                        <div className="filters">
                          <span>Order: </span>
                          <p className="filter">Relevance</p>
                          <p>Cheap</p>
                          <p>Recent</p>
                          <form className=" orderForm">
                            <div className=" flex  justify-between gap-5">
                              <select id="select">
                                <option>Relevance</option>
                                <option>Floors</option>
                                <option>Office</option>
                                <option>Land</option>
                                <option>Storage Room</option>
                                <option>Building</option>
                                <option>Parking Space</option>
                                <option>Local or Warehouse</option>
                              </select>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Searchcard />
                <Searchcard />
                <Searchcard />
                <div className="row">
                  <div className="col-12">
                    <ul className="wg-pagination justify-center wow fadeInUp">
                      <li>
                        <Link href="/#">
                          <i className="icon-keyboard_arrow_left" />
                        </Link>
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
                        <Link href="/#">
                          <i className="icon-keyboard_arrow_right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SearchPageLayout>
    </>
  );
}
