import React from "react";
import SliderBoxDream from "@/components/slider/SliderBoxDream";
import Link from "next/link";
import { FaImage } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
function Searchcard() {
  return (
    <div className="row">
      <div className="">
        <div className="box-dream has-border wow fadeInUp flex searchContainer ">
          <div className="searchImage overflow-hidden">
            <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1 relative">
              <SliderBoxDream path="house/property-listing" start={1} end={4} />
              <div className="mediaLinks">
                <Link href="/images/23232">
                  <p>
                    <FaImage />
                  </p>
                </Link>
                <Link href="/video/2323">
                  <p>
                    <IoVideocamOutline />
                  </p>
                </Link>
                <Link href="/map/3234">
                  {" "}
                  <p>
                    <FiMapPin />
                  </p>
                </Link>
              </div>{" "}
            </div>
          </div>
          <div className="searchContent content">
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
                [ENG] AVAILABLE FROM: October. Book online by clicking on
                "additional link" under the map. [ESP] Rentals of less than 1
                month ar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchcard;
