import React from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import SliderBoxDream from "@/components/slider/SliderBoxDream";
function page() {
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
                <div className="cardContents">
                  {/* this is for image section */}
                  <div className="cardImage">
                    <img
                      src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg"
                      alt=""
                    />
                  </div>
                  {/* this is for information section */}
                  <div className="cardInfo">
                    <h6>
                      Apartment on Girona street, La Dreta de l'Eixample,
                      Barcelona
                    </h6>
                    <div className="flex items-center  gap-3">
                      <h4>452,4520</h4>
                      <h6>2323</h6>
                    </div>
                    <div className="flex items-center  gap-3">
                      <p>3 bedrooms </p>
                      <p>213 m²</p>
                    </div>
                    <p>
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
