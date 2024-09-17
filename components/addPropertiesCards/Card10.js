import React from "react";

function Card10() {
  return (
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
  );
}

export default Card10;
