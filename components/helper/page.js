"use client";
import React from "react";
import ImageGallery from "react-image-gallery";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

import { FaImage } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import "react-image-gallery/styles/css/image-gallery.css";
function page() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <>
      <Layout headerStyle={12} footerStyle={1}>
        <div className="search">
          <div className="search-contents">
            <h3>938 houses and flats in La Dreta de l'Eixample, Barcelona</h3>
            <div className="cardArea ">
              {/* left section  */}
              <div className="leftSection"></div>
              {/* right section  */}
              <div className="rightSection">
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
                    <form className="flex flex-column filterForm">
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
                <div className="cardContents">
                  {/* this is for image section */}
                  <div className="cardImage">
                    <ImageGallery
                      items={images}
                      showPlayButton={false}
                      slideOnThumbnailOver={true}
                      showNav={true}
                      showThumbnails={false}
                    />
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
                  {/* this is for information section */}
                  <div className="cardInfo">
                    <h6>
                      Apartment on Girona street, La Dreta de l'Eixample,
                      Barcelona
                    </h6>
                    <div className="flex items-center  gap-3 property-price">
                      <h4>452,4520</h4>
                      <h6>
                        <span>$</span> 2323
                      </h6>
                    </div>
                    <div className="flex items-center  gap-3 bedAndarea">
                      <p>3 bedrooms </p>
                      <p> 213 m²</p>
                    </div>
                    <p className="desc">
                      This magnificent luxury apartment, renovated to the
                      highest quality, is synonymous with sophistication and
                      comfort. It is located at the beginning of Girona Street,
                      which is being
                    </p>
                  </div>
                </div>
                <div className="cardContents">
                  {/* this is for image section */}
                  <div className="cardImage">
                    <ImageGallery
                      items={images}
                      showPlayButton={false}
                      slideOnThumbnailOver={true}
                      showNav={true}
                      showThumbnails={false}
                    />
                    <div className="mediaLinks">
                      <Link href="/images/23232">
                        <p>
                          {" "}
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
                  {/* this is for information section */}
                  <div className="cardInfo">
                    <h6>
                      Apartment on Girona street, La Dreta de l'Eixample,
                      Barcelona
                    </h6>
                    <div className="flex items-center  gap-3 property-price">
                      <h4>452,4520</h4>
                      <h6>
                        <span>$</span> 2323
                      </h6>
                    </div>
                    <div className="flex items-center  gap-3 bedAndarea">
                      <p>3 bedrooms </p>
                      <p> 213 m²</p>
                    </div>
                    <p className="desc">
                      This magnificent luxury apartment, renovated to the
                      highest quality, is synonymous with sophistication and
                      comfort. It is located at the beginning of Girona Street,
                      which is being
                    </p>
                  </div>
                </div>
                <div className="cardContents">
                  {/* this is for image section */}
                  <div className="cardImage">
                    <ImageGallery
                      items={images}
                      showPlayButton={false}
                      slideOnThumbnailOver={true}
                      showNav={true}
                      showThumbnails={false}
                    />
                    <div className="mediaLinks">
                      <Link href="/images/23232">
                        <p>
                          {" "}
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
                  {/* this is for information section */}
                  <div className="cardInfo">
                    <h6>
                      Apartment on Girona street, La Dreta de l'Eixample,
                      Barcelona
                    </h6>
                    <div className="flex items-center  gap-3 property-price">
                      <h4>452,4520</h4>
                      <h6>
                        <span>$</span> 2323
                      </h6>
                    </div>
                    <div className="flex items-center  gap-3 bedAndarea">
                      <p>3 bedrooms </p>
                      <p> 213 m²</p>
                    </div>
                    <p className="desc">
                      This magnificent luxury apartment, renovated to the
                      highest quality, is synonymous with sophistication and
                      comfort. It is located at the beginning of Girona Street,
                      which is being
                    </p>
                  </div>
                </div>
                <div className="cardContents">
                  {/* this is for image section */}
                  <div className="cardImage">
                    <ImageGallery
                      items={images}
                      showPlayButton={false}
                      slideOnThumbnailOver={true}
                      showNav={true}
                      showThumbnails={false}
                    />
                    <div className="mediaLinks">
                      <Link href="/images/23232">
                        <p>
                          {" "}
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
                  {/* this is for information section */}
                  <div className="cardInfo">
                    <h6>
                      Apartment on Girona street, La Dreta de l'Eixample,
                      Barcelona
                    </h6>
                    <div className="flex items-center  gap-3 property-price">
                      <h4>452,4520</h4>
                      <h6>
                        <span>$</span> 2323
                      </h6>
                    </div>
                    <div className="flex items-center  gap-3 bedAndarea">
                      <p>3 bedrooms </p>
                      <p> 213 m²</p>
                    </div>
                    <p className="desc">
                      This magnificent luxury apartment, renovated to the
                      highest quality, is synonymous with sophistication and
                      comfort. It is located at the beginning of Girona Street,
                      which is being
                    </p>
                  </div>
                </div>
                <div className="cardContents">
                  {/* this is for image section */}
                  <div className="cardImage">
                    <ImageGallery
                      items={images}
                      showPlayButton={false}
                      slideOnThumbnailOver={true}
                      showNav={true}
                      showThumbnails={false}
                    />
                    <div className="mediaLinks">
                      <Link href="/images/23232">
                        <p>
                          {" "}
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
                  {/* this is for information section */}
                  <div className="cardInfo">
                    <h6>
                      Apartment on Girona street, La Dreta de l'Eixample,
                      Barcelona
                    </h6>
                    <div className="flex items-center  gap-3 property-price">
                      <h4>452,4520</h4>
                      <h6>
                        <span>$</span> 2323
                      </h6>
                    </div>
                    <div className="flex items-center  gap-3 bedAndarea">
                      <p>3 bedrooms </p>
                      <p> 213 m²</p>
                    </div>
                    <p className="desc">
                      This magnificent luxury apartment, renovated to the
                      highest quality, is synonymous with sophistication and
                      comfort. It is located at the beginning of Girona Street,
                      which is being
                    </p>
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

export default page;
