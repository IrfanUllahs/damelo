import React from "react";

function Card4() {
  return (
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
  );
}

export default Card4;
