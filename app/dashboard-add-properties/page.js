"use client";
import LayoutAdmin from "@/components/layout/LayoutAdmin";
import { useState } from "react";
export default function DashboardAddProperties() {
  const [propertyType, setpropertyType] = useState("");
  return (
    <>
      <LayoutAdmin
        breadcrumbTitle="Add New Property"
        mainContentCls="spacing-20"
      >
        <div>
          <div className="wg-box pl-44 mb-20">
            <h4>Basic Infomation</h4>
            <form className="form-bacsic-infomation flex gap30 flex-column">
              <fieldset className="text has-top-title">
                <input
                  type="text"
                  placeholder="Property Title *"
                  className
                  name="text"
                  tabIndex={2}
                  aria-required="true"
                  required
                />
                <label htmlFor>Property Title *</label>
              </fieldset>
              <fieldset className="text has-top-title">
                <input
                  type="text"
                  placeholder="Your Email *"
                  className
                  name="text"
                  tabIndex={2}
                  aria-required="true"
                  required
                />
                <label htmlFor>Your Email *</label>
              </fieldset>
              <fieldset className="text has-top-title">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className
                  name="text"
                  tabIndex={2}
                  aria-required="true"
                  required
                />
                <label htmlFor>Your Name *</label>
              </fieldset>

              <fieldset className="text has-top-title">
                <input
                  type="text"
                  placeholder="Phone Number *"
                  className
                  name="text"
                  tabIndex={2}
                  aria-required="true"
                  required
                />
                <label htmlFor>Phone Number *</label>
              </fieldset>

              <fieldset className="description has-top-title">
                <textarea
                  name="description"
                  rows={4}
                  placeholder="Property Description"
                  className
                  tabIndex={2}
                  aria-required="true"
                  required
                  defaultValue={"Lorem Ipsum Dolar Sit Amet"}
                />
                <label htmlFor>Property Description</label>
              </fieldset>
              <div className="button-submit mt-10">
                <button className="tf-button-primary" type="submit">
                  tf-button-primary Save &amp; Preview
                  <i className="icon-arrow-right-add" />
                </button>
              </div>
            </form>
          </div>
          <div className="wg-box pl-44 mb-20">
            <h4>Additional</h4>
            <form className="form-additional flex gap30 flex-column">
              <div className="cols cols-two">
                <fieldset className="text">
                  <input
                    type="text"
                    placeholder="Property ID"
                    className
                    name="text"
                    tabIndex={2}
                    aria-required="true"
                    required
                  />
                </fieldset>
                <fieldset className="text">
                  <input
                    type="text"
                    placeholder="Label"
                    className
                    name="text"
                    tabIndex={2}
                    aria-required="true"
                    required
                  />
                </fieldset>
              </div>

              <div className="cols cols-two">
                <fieldset className="text">
                  <input
                    type="text"
                    placeholder="Home area (sqft)"
                    className
                    name="text"
                    tabIndex={2}
                    aria-required="true"
                    required
                  />
                </fieldset>
                <fieldset className="text">
                  <input
                    type="text"
                    placeholder="Lot dimensions"
                    className
                    name="text"
                    tabIndex={2}
                    aria-required="true"
                    required
                  />
                </fieldset>
              </div>
              <div className="cols cols-two">
                <fieldset className="text">
                  <input
                    type="text"
                    placeholder="Lot area (sqft)"
                    className
                    name="text"
                    tabIndex={2}
                    aria-required="true"
                    required
                  />
                </fieldset>
                <div />
              </div>
              <div className="button-submit mt-10">
                <button className="tf-button-primary" type="submit">
                  Save &amp; Preview
                  <i className="icon-arrow-right-add" />
                </button>
              </div>
            </form>
          </div>
          <div className="wg-box pl-44 mb-20">
            <h4>Choose the type of property</h4>
            <form className="flex flex-column">
              <div className=" flex  justify-between gap-5">
                <select className="nice-select" tabIndex={0}>
                  <option data-value className="option selected">
                    Rooms
                  </option>
                  <option data-value="For Ren" className="option">
                    Floors
                  </option>
                  <option data-value="Sold" className="option">
                    Office
                  </option>
                  <option data-value="Sold" className="option">
                    Land
                  </option>
                  <option data-value="Sold" className="option">
                    Storage Room
                  </option>
                  <option data-value="Sold" className="option">
                    Building
                  </option>
                  <option data-value="Sold" className="option">
                    Parking Space
                  </option>
                  <option data-value="Sold" className="option">
                    Local or Warehouse
                  </option>
                </select>
                <div className="flex items-center justify-center gap-5">
                  <label className="flex items-center justify-center gap-3">
                    <input
                      type="checkbox"
                      value="sale"
                      checked={propertyType == "sale"}
                      onClick={() => setpropertyType("sale")}
                    />
                    <span>Sale</span>
                  </label>
                  <label className="flex items-center justify-center gap-3">
                    <input
                      type="checkbox"
                      value="rent"
                      checked={propertyType == "rent"}
                      onClick={() => setpropertyType("rent")}
                    />
                    <span>Rent</span>
                  </label>
                </div>
              </div>
              <div className="form-section  ">
                <div className="form-group">
                  <h4>Number of rooms in the house</h4>
                  <div className="input-group">
                    <button>-</button>
                    <input value="1" />
                    <button>+</button>
                  </div>
                </div>

                <div className="form-group">
                  <h4>Number of bathrooms and toilets</h4>
                  <div className="input-group">
                    <button>-</button>
                    <input value="1" />
                    <button>+</button>
                  </div>
                </div>

                <div className="form-group">
                  <h4>Facade of the building</h4>
                  <div className="radio-group">
                    <label>
                      <input type="radio" name="facade" /> Abroad
                    </label>
                    <label>
                      <input type="radio" name="facade" /> Inside
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <h4>Does it have an elevator?</h4>
                  <div className="radio-group">
                    <label>
                      <input type="radio" name="elevator" /> Yes it has
                    </label>
                    <label>
                      <input type="radio" name="elevator" /> Does not have
                    </label>
                  </div>
                </div>
              </div>

              {/* this is for sale or rent  */}

              <div className="button-submit mt-10">
                <button className="tf-button-primary" type="submit">
                  Save &amp; Preview
                  <i className="icon-arrow-right-add" />
                </button>
              </div>
            </form>
          </div>
          <div className="wg-box pl-44 mb-20">
            <h4>Price</h4>
            <form className="form-price flex gap30 flex-column">
              <div className="cols">
                <fieldset className="text">
                  <input
                    type="text"
                    placeholder="Price ($)"
                    className
                    name="text"
                    tabIndex={2}
                    aria-required="true"
                    required
                  />
                </fieldset>
                <fieldset className="text">
                  <input
                    type="text"
                    placeholder="Price Prefix"
                    className
                    name="text"
                    tabIndex={2}
                    aria-required="true"
                    required
                  />
                </fieldset>
              </div>
              <div className="cols">
                <fieldset className="text">
                  <input
                    type="text"
                    placeholder="Price Suffix"
                    className
                    name="text"
                    tabIndex={2}
                    aria-required="true"
                    required
                  />
                </fieldset>
                <fieldset className="text">
                  <input
                    type="text"
                    placeholder="Price Custom"
                    className
                    name="text"
                    tabIndex={2}
                    aria-required="true"
                    required
                  />
                </fieldset>
              </div>
              <div className="button-submit mt-10">
                <button className="tf-button-primary" type="submit">
                  Save &amp; Preview
                  <i className="icon-arrow-right-add" />
                </button>
              </div>
            </form>
          </div>
          <div className="wg-box pl-44 mb-20">
            <h4>Property Location</h4>
            <form className="form-location flex gap30 flex-column">
              <div className="cols">
                <fieldset className="text">
                  <label>Locality</label>
                  <input
                    type="text"
                    placeholder="Locality"
                    className
                    name="text"
                    tabIndex={2}
                    aria-required="true"
                    required
                  />
                </fieldset>
                <fieldset className="text">
                  <label>Name of the road</label>
                  <input
                    type="text"
                    placeholder="Name of the road"
                    className
                    name="text"
                    tabIndex={2}
                    aria-required="true"
                    required
                  />
                </fieldset>
                <fieldset className="text">
                  <label>Track number</label>
                  <input
                    type="text"
                    placeholder="Track number"
                    className
                    name="text"
                    aria-required="true"
                    required
                  />
                </fieldset>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s"
                height={400}
                style={{ border: 0, width: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="cols small">
                <fieldset className="number">
                  <input
                    type="number"
                    placeholder="X"
                    className
                    name="number"
                    tabIndex={2}
                    defaultValue="25.783260"
                    aria-required="true"
                    required
                  />
                </fieldset>
                <fieldset className="number">
                  <input
                    type="number"
                    placeholder="Y"
                    className
                    name="number"
                    tabIndex={2}
                    defaultValue="-80.230863"
                    aria-required="true"
                    required
                  />
                </fieldset>
              </div>
              <div className="button-submit mt-10">
                <button className="tf-button-primary" type="submit">
                  Save &amp; Preview
                  <i className="icon-arrow-right-add" />
                </button>
              </div>
            </form>
          </div>
          <div className="wg-box pl-44 mb-20">
            <h4>Other features of your home</h4>
            <form>
              <div className="feature">
                <input type="checkbox" name="" id="" />
                <p>Built-in wardrobes</p>
              </div>
              <div className="feature">
                <input type="checkbox" name="" id="" />
                <p>Air-conditioning</p>
              </div>
              <div className="feature">
                <input type="checkbox" name="" id="" />
                <p>Terrace</p>
              </div>
              <div className="feature">
                <input type="checkbox" name="" id="" />
                <p>Balcony</p>
              </div>
              <div className="feature">
                <input type="checkbox" name="" id="" />
                <p>Parking space</p>
              </div>
              <div className="feature">
                <input type="checkbox" name="" id="" />
                <p>Storage room</p>
              </div>
              <h4 className="my-4">Other features of your building</h4>
              <div className="feature">
                <input type="checkbox" name="" id="" />
                <p>Pool</p>
              </div>
              <div className="feature">
                <input type="checkbox" name="" id="" />
                <p>Green zone</p>
              </div>

              <h4 className="my-4">Does it have an elevator?</h4>
              <div className="feature">
                <input type="checkbox" name="" id="" />
                <p>Yes it has</p>
              </div>
              <div className="feature">
                <input type="checkbox" name="" id="" />
                <p>Does not have</p>
              </div>
            </form>
          </div>
          <div className="wg-box pl-44 mb-20">
            <h4>Use of the home at the time of signing</h4>
            <form>
              <p>In what condition is the property sold?</p>
              <div className="sold-condition">
                <input type="checkbox" name="" id="" />
                <p>Free, with no one living there</p>
              </div>
              <div className="sold-condition">
                <input type="checkbox" name="" id="" />
                <p>Bare ownership, another person has the usufruct</p>
              </div>
              <div className="sold-condition">
                <input type="checkbox" name="" id="" />
                <p>Rented, with tenants</p>
              </div>
              <div className="sold-condition">
                <input type="checkbox" name="" id="" />
                <p>Illegally occupied</p>
              </div>
            </form>
          </div>
          <div className="wg-box pl-44 mb-20">
            <h4>Add Photos and Videos to your Ad</h4>
            <form className="form-media">
              <div className="upload-image-wrap">
                <div className="text">Featured Image</div>
                <div className="list">
                  <div className="item">
                    <img src="/images/image-box/upload-1.jpg" alt="" />
                    <ul className>
                      <li className="edit-btns">
                        <i className="flaticon-edit" />
                      </li>
                      <li className="delete-btns">
                        <i className="flaticon-delete" />
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <img src="/images/image-box/upload-2.jpg" alt="" />
                    <ul className>
                      <li className="edit-btns">
                        <i className="flaticon-edit" />
                      </li>
                      <li className="delete-btns">
                        <i className="flaticon-delete" />
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <label className="uploadfile">
                      <input type="file" className name="file" />
                      <i className="flaticon-gallery" />
                      <div>Upload</div>
                    </label>
                  </div>
                </div>
                <p>
                  Max file size is 1MB, Minimum dimension: 330x300 And Suitable
                  files are .jpg &amp; .png
                </p>
              </div>

              <fieldset className="text has-top-title">
                <input
                  type="text"
                  placeholder="Video link"
                  className
                  name="text"
                  tabIndex={2}
                  aria-required="true"
                  required
                />
                <label htmlFor>Video link</label>
              </fieldset>
              <fieldset className="description has-top-title">
                <textarea
                  name="description"
                  rows={4}
                  placeholder="Virtual Tour"
                  className
                  tabIndex={2}
                  aria-required="true"
                  required
                  defaultValue={"Lorem Ipsum Dolar Sit Amet"}
                />
                <label htmlFor>Virtual Tour</label>
              </fieldset>
              <div className="button-submit">
                <button className="tf-button-primary" type="submit">
                  Save &amp; Preview
                  <i className="icon-arrow-right-add" />
                </button>
              </div>
            </form>
          </div>
          <div className="wg-box pl-44 mb-20">
            <h4>Amenities</h4>
            <form className="form-amenities">
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
                <li className="checkbox-item">
                  <label>
                    <p>Window Coverings</p>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </li>
              </ul>
              <div className="button-submit">
                <button className="tf-button-primary" type="submit">
                  Save &amp; Preview
                  <i className="icon-arrow-right-add" />
                </button>
              </div>
            </form>
          </div>
          <div className="wg-box pl-44">
            <h4>Floor Features</h4>
            <div className="feature">
              <input type="checkbox" name="" id="" />
              <p>Floor</p>
            </div>
            <div className="feature">
              <input type="checkbox" name="" id="" />
              <p>Penthouse</p>
            </div>
            <div className="feature">
              <input type="checkbox" name="" id="" />
              <p>Duplex</p>
            </div>
            <div className="feature">
              <input type="checkbox" name="" id="" />
              <p>Studio / loft</p>
            </div>
          </div>
        </div>
      </LayoutAdmin>
    </>
  );
}
