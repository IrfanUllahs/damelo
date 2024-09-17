import React from "react";

function Card9() {
  return (
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
            Max file size is 1MB, Minimum dimension: 330x300 And Suitable files
            are .jpg &amp; .png
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
  );
}

export default Card9;
