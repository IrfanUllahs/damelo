import Layout from "@/components/layout/Layout";
import SliderBoxDream from "@/components/slider/SliderBoxDream";
import Link from "next/link";
export default function SearchProperties() {
  return (
    <>
      <Layout headerStyle={12} footerStyle={1}>
        <div className="flat-title  ">
          <div className="themesflat-container full">
            <div className="row">
              <div className="col-12">
                <div className="content">
                  <h2>Real Estate &amp; Homes For Sale</h2>
                  <ul className="breadcrumbs">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>/</li>
                    <li>Property List</li>
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
                <div className="row">
                  <div className="col-xl-6">
                    <div className="box-dream has-border wow fadeInUp">
                      <div className="image-group relative">
                        <div className="list-tags">
                          <Link href="/#" className="tags-item for-sell">
                            FOR RENT
                          </Link>
                          <Link href="/#" className="tags-item featured">
                            FEATURED
                          </Link>
                        </div>
                        <div className="button-heart">
                          <i className="flaticon-heart-1" />
                        </div>
                        <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                          <SliderBoxDream
                            path="house/property-listing"
                            start={1}
                            end={4}
                          />
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
                        <div className="desc">
                          <p>
                            [ENG] AVAILABLE FROM: October. Book online by
                            clicking on "additional link" under the map. [ESP]
                            Rentals of less than 1 month ar
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div
                      className="box-dream has-border wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="image-group relative">
                        <div className="list-tags">
                          <Link href="/#" className="tags-item for-sell">
                            FOR SELL
                          </Link>
                        </div>
                        <div className="button-heart">
                          <i className="flaticon-heart-1" />
                        </div>
                        <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                          <SliderBoxDream
                            path="house/property-listing"
                            start={2}
                            end={5}
                          />
                        </div>
                      </div>
                      <div className="content">
                        <div className="head">
                          <div className="title">
                            <Link href="/property-single-v1">
                              Villa One Hyde Park
                            </Link>
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
                        <div className="desc">
                          <p>
                            [ENG] AVAILABLE FROM: October. Book online by
                            clicking on "additional link" under the map. [ESP]
                            Rentals of less than 1 month ar
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="box-dream has-border wow fadeInUp">
                      <div className="image-group relative">
                        <div className="list-tags">
                          <Link href="/#" className="tags-item for-sell">
                            FOR SELL
                          </Link>
                        </div>
                        <div className="button-heart">
                          <i className="flaticon-heart-1" />
                        </div>
                        <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                          <SliderBoxDream
                            path="house/property-listing"
                            start={3}
                            end={6}
                          />
                        </div>
                      </div>
                      <div className="content">
                        <div className="head">
                          <div className="title">
                            <Link href="/property-single-v1">
                              Home Pitt Street
                            </Link>
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
                        <div className="desc">
                          <p>
                            [ENG] AVAILABLE FROM: October. Book online by
                            clicking on "additional link" under the map. [ESP]
                            Rentals of less than 1 month ar
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div
                      className="box-dream has-border wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="image-group relative">
                        <div className="list-tags">
                          <Link href="/#" className="tags-item for-sell">
                            FOR SELL
                          </Link>
                        </div>
                        <div className="button-heart">
                          <i className="flaticon-heart-1" />
                        </div>
                        <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                          <SliderBoxDream
                            path="house/property-listing"
                            start={4}
                            end={7}
                          />
                        </div>
                      </div>
                      <div className="content">
                        <div className="head">
                          <div className="title">
                            <Link href="/property-single-v1">
                              Relaxing Villa
                            </Link>
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
                        <div className="desc">
                          <p>
                            [ENG] AVAILABLE FROM: October. Book online by
                            clicking on "additional link" under the map. [ESP]
                            Rentals of less than 1 month ar
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="box-dream has-border wow fadeInUp">
                      <div className="image-group relative">
                        <div className="list-tags">
                          <Link href="/#" className="tags-item for-sell">
                            FOR RENT
                          </Link>
                          <Link href="/#" className="tags-item featured">
                            FEATURED
                          </Link>
                        </div>
                        <div className="button-heart">
                          <i className="flaticon-heart-1" />
                        </div>
                        <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                          <SliderBoxDream
                            path="house/property-listing"
                            start={5}
                            end={8}
                          />
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
                        <div className="desc">
                          <p>
                            [ENG] AVAILABLE FROM: October. Book online by
                            clicking on "additional link" under the map. [ESP]
                            Rentals of less than 1 month ar
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div
                      className="box-dream has-border wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="image-group relative">
                        <div className="list-tags">
                          <Link href="/#" className="tags-item for-sell">
                            FOR SELL
                          </Link>
                        </div>
                        <div className="button-heart">
                          <i className="flaticon-heart-1" />
                        </div>
                        <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                          <SliderBoxDream
                            path="house/property-listing"
                            start={6}
                            end={9}
                          />
                        </div>
                      </div>
                      <div className="content">
                        <div className="head">
                          <div className="title">
                            <Link href="/property-single-v1">
                              Villa One Hyde Park
                            </Link>
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
                        <div className="desc">
                          <p>
                            [ENG] AVAILABLE FROM: October. Book online by
                            clicking on "additional link" under the map. [ESP]
                            Rentals of less than 1 month ar
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="box-dream has-border wow fadeInUp">
                      <div className="image-group relative">
                        <div className="list-tags">
                          <Link href="/#" className="tags-item for-sell">
                            FOR SELL
                          </Link>
                        </div>
                        <div className="button-heart">
                          <i className="flaticon-heart-1" />
                        </div>
                        <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                          <SliderBoxDream
                            path="house/property-listing"
                            start={7}
                            end={10}
                          />
                        </div>
                      </div>
                      <div className="content">
                        <div className="head">
                          <div className="title">
                            <Link href="/property-single-v1">
                              Home Pitt Street
                            </Link>
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
                        <div className="desc">
                          <p>
                            [ENG] AVAILABLE FROM: October. Book online by
                            clicking on "additional link" under the map. [ESP]
                            Rentals of less than 1 month ar
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div
                      className="box-dream has-border wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="image-group relative">
                        <div className="list-tags">
                          <Link href="/#" className="tags-item for-sell">
                            FOR SELL
                          </Link>
                        </div>
                        <div className="button-heart">
                          <i className="flaticon-heart-1" />
                        </div>
                        <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                          <SliderBoxDream
                            path="house/property-listing"
                            start={8}
                            end={11}
                          />
                        </div>
                      </div>
                      <div className="content">
                        <div className="head">
                          <div className="title">
                            <Link href="/property-single-v1">
                              Relaxing Villa
                            </Link>
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
                        <div className="desc">
                          <p>
                            [ENG] AVAILABLE FROM: October. Book online by
                            clicking on "additional link" under the map. [ESP]
                            Rentals of less than 1 month ar
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
      </Layout>
    </>
  );
}
