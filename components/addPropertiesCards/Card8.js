import React from "react";

function Card8() {
  return (
    <div className="wg-box pl-44 mb-20">
      <h4>What tenants are you looking for?</h4>
      <p>
        This section helps you to be contacted by the tenants who best fit your
        property.
      </p>
      <form className="flex flex-column gap-5">
        <p>Maximum number of tenants (optional)</p>
        <div className="form-group">
          <div className="input-group">
            <button>-</button>
            <input value="1" />
            <button>+</button>
          </div>
          <p>If you don't want to put maximum, leave it empty</p>
        </div>
        <div className="">
          <p>Suitable for children (0-12 years)?</p>
          <div className="flex items-center gap-3">
            <input type="checkbox" name="" id="" />
            <p>The house is suitable for children</p>
          </div>
        </div>
        <div className="">
          <p>Do you allow pets?</p>
          <div className="flex items-center gap-3">
            <input type="checkbox" name="" id="" />
            <p>Yes, I allow pets</p>
          </div>
        </div>
        {/* here ware problem */}
        <div>
          <p>Is the property adapted for people with reduced mobility? </p>
          <div className="checkbox-item">
            <label>
              <p>
                The exterior access to the house is adapted for wheelchairs. It
                has ramps and a 6-seat elevator or the house is at street level
                without curbs.
              </p>
              <input type="checkbox" />
              <span className="btn-checkbox" />
            </label>
          </div>
          <div className="checkbox-item">
            <label>
              <p>
                The interior of the house is adapted for wheelchairs. Wide doors
                and corridors, folding bars, non-slip floors...
              </p>
              <input type="checkbox" />
              <span className="btn-checkbox" />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Card8;
