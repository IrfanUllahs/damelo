import React, { useState } from "react";

function Card2({ handleNextCard }) {
  const [propertyType, setpropertyType] = useState("");
  return (
    <div className="wg-box pl-44 mb-20">
      <h1 className="text-[20px]">Choose the type of property</h1>
      <form className="flex flex-column" onSubmit={handleNextCard}>
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
        </div>
        <div className="flex items-center  gap-5 mt-20 mb-15">
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
        {/* rentel information more here */}
        {propertyType == "rent" && (
          <div className="form-group">
            <h4>Type of rental</h4>
            <div className="radio-group">
              <label>
                <input type="radio" name="residential" /> Residential, habitual
                residence
              </label>
              <label>
                <input type="radio" name="seasonal" id="seasonalCheckBox" />
                Seasonal, for limited periods, for example, school days,
                temporary work, moving, etc.
              </label>
              <label>
                <input type="radio" name="holiday" />
                Holiday, for tourist stays
              </label>
            </div>
            {
              <>
                <h6>
                  For tourist stays, we offer Rentalia, our portal specialising
                  in holiday rentals, and Avaibook, our rental management
                  software.
                </h6>
                <p>
                  At Rentalia, you can adjust the price based on the length of
                  the rental and manage your reservations and the availability
                  of the property. In addition, you will comply with vacation
                  rental regulations by indicating the tourist license number
                  required by your Autonomous Community.
                </p>
              </>
            }
          </div>
        )}
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
          <div>
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
                  placeholder="m² usable (optional)"
                  className
                  name="text"
                  tabIndex={2}
                  aria-required="true"
                  required
                />
              </fieldset>
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
  );
}

export default Card2;
