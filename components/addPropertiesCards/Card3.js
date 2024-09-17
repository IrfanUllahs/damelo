import React from "react";

function Card3() {
  return (
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
        </div>
        <div>
          <p>Bail (optional)</p>
          <select className="nice-select" tabIndex={0}>
            <option data-value className="option selected">
              select
            </option>
            <option data-value className="option selected">
              1 month
            </option>
            <option data-value className="option selected">
              2 month
            </option>
            <option data-value className="option selected">
              3 month
            </option>
          </select>
        </div>
        <p>Do you want to hide the street and number? (optional) </p>
        <form className="flex  gap-5 flex-column">
          <div className="feature">
            <input type="checkbox" name="" id="" />
            <p>Hide address for $9.9</p>
          </div>
          <p>Plant</p>
          <div className=" flex  justify-between gap-5">
            <select className="nice-select" tabIndex={0}>
              <option data-value className="option selected">
                Select
              </option>
              <option data-value="-2" className="option">
                Below the ground floor (-2)
              </option>
              <option data-value="-1" className="option">
                Below the ground floor (-1)
              </option>
              <option data-value="Basement" className="option">
                Basement
              </option>
              <option data-value="Semi-basement" className="option">
                Semi-basement
              </option>
              <option data-value="Low" className="option">
                Low
              </option>
              <option data-value="Mezzanine" className="option">
                Mezzanine
              </option>
              <option data-value="1" className="option">
                1st floor
              </option>
              <option data-value="2" className="option">
                2nd floor
              </option>
              <option data-value="3" className="option">
                3rd floor
              </option>
              <option data-value="4" className="option">
                4th floor
              </option>
              <option data-value="5" className="option">
                5th floor
              </option>

              <option data-value="6" className="option">
                6th floor
              </option>
              <option data-value="7" className="option">
                7th floor
              </option>
              <option data-value="8" className="option">
                8th floor
              </option>
              <option data-value="9" className="option">
                9th floor
              </option>
              <option data-value="10" className="option">
                10th floor
              </option>
              <option data-value="11" className="option">
                11th floor
              </option>
              <option data-value="12" className="option">
                12th floor
              </option>
              <option data-value="13" className="option">
                13th floor
              </option>
              <option data-value="14" className="option">
                14th floor
              </option>
              <option data-value="15" className="option">
                15th floor
              </option>
              <option data-value="16" className="option">
                16th floor
              </option>
              <option data-value="17" className="option">
                17th floor
              </option>
              <option data-value="18" className="option">
                18th floor
              </option>
              <option data-value="19" className="option">
                19th floor
              </option>
              <option data-value="20" className="option">
                20th floor
              </option>
              <option data-value="21" className="option">
                21st floor
              </option>
              <option data-value="22" className="option">
                22nd floor
              </option>
              <option data-value="23" className="option">
                23rd floor
              </option>
              <option data-value="24" className="option">
                24th floor
              </option>
              <option data-value="25" className="option">
                25th floor
              </option>
              <option data-value="26" className="option">
                26th floor
              </option>
              <option data-value="27" className="option">
                27th floor
              </option>
              <option data-value="28" className="option">
                28th floor
              </option>
              <option data-value="29" className="option">
                29th floor
              </option>
              <option data-value="30" className="option">
                30th floor
              </option>
              <option data-value="31" className="option">
                31st floor
              </option>
              <option data-value="32" className="option">
                32nd floor
              </option>
              <option data-value="33" className="option">
                33rd floor
              </option>
              <option data-value="34" className="option">
                34th floor
              </option>
              <option data-value="35" className="option">
                35th floor
              </option>
              <option data-value="36" className="option">
                36th floor
              </option>
              <option data-value="37" className="option">
                37th floor
              </option>
              <option data-value="38" className="option">
                38th floor
              </option>
              <option data-value="39" className="option">
                39th floor
              </option>
              <option data-value="40" className="option">
                40th floor
              </option>
              <option data-value="41" className="option">
                41st floor
              </option>
              <option data-value="42" className="option">
                42nd floor
              </option>
              <option data-value="43" className="option">
                43rd floor
              </option>
              <option data-value="44" className="option">
                44th floor
              </option>
              <option data-value="45" className="option">
                45th floor
              </option>
              <option data-value="46" className="option">
                46th floor
              </option>
              <option data-value="47" className="option">
                47th floor
              </option>
              <option data-value="48" className="option">
                48th floor
              </option>
              <option data-value="49" className="option">
                49th floor
              </option>
              <option data-value="50" className="option">
                50th floor
              </option>
              <option data-value="51" className="option">
                51st floor
              </option>
              <option data-value="52" className="option">
                52nd floor
              </option>
              <option data-value="53" className="option">
                53rd floor
              </option>
              <option data-value="54" className="option">
                54th floor
              </option>
              <option data-value="55" className="option">
                55th floor
              </option>
              <option data-value="56" className="option">
                56th floor
              </option>
              <option data-value="57" className="option">
                57th floor
              </option>
              <option data-value="58" className="option">
                58th floor
              </option>
              <option data-value="59" className="option">
                59th floor
              </option>
              <option data-value="60" className="option">
                60th floor
              </option>
            </select>
          </div>
          <div className="feature">
            <input type="checkbox" name="" id="" />
            <p>It is the last floor of the block</p>
          </div>
          <p>Door</p>
          <select className="nice-select" tabIndex={0}>
            <option data-value className="option selected">
              Select
            </option>
            <option data-value="Letter" className="option">
              Letter (A, B, C...)
            </option>
            <option data-value="Number" className="option">
              Number (1, 2, 3...)
            </option>
            <option data-value="Single door" className="option">
              Single door
            </option>
            <option data-value="Left" className="option">
              Left
            </option>
            <option data-value="Right" className="option">
              Right
            </option>
            <option data-value="Abroad" className="option">
              Abroad
            </option>
            <option data-value="Outside left" className="option">
              Outside left
            </option>
            <option data-value="Outside right" className="option">
              Outside right
            </option>
            <option data-value="Inside" className="option">
              Inside
            </option>
            <option data-value="Inside left" className="option">
              Inside left
            </option>
            <option data-value="Inside right" className="option">
              Inside right
            </option>
            <option data-value="Center" className="option">
              Center
            </option>
            <option data-value="Center left" className="option">
              Center left
            </option>
            <option data-value="Center right" className="option">
              Center right
            </option>
          </select>
        </form>

        <p>Is there more than one block/portal?</p>
        <div className="feature">
          <input type="checkbox" name="" id="" />
          <p>NO</p>
        </div>
        <div className="feature">
          <input type="checkbox" name="" id="" />
          <div className="flex gap-5">
            <p>Yes, block/portal</p>
            <input type="text" />
          </div>
        </div>
        <div>
          <p>Urbanization(optional)</p>
          <input type="text" />
        </div>
        <div className="button-submit mt-10">
          <button className="tf-button-primary" type="submit">
            Save
            <i className="icon-arrow-right-add" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Card3;
