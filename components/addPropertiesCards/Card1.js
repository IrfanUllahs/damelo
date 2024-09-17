import React, { useState } from "react";

function Card1({ handleNextCard }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [tenantProfileMessages, setTenantProfileMessages] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission (page refresh)
    console.log("Form submitted");

    // You can add form validation or additional logic here

    handleNextCard(); // Ensure this function is defined and passed from parent
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    // Reset tenantProfileMessages when the user changes notification option
    setTenantProfileMessages("");
  };

  return (
    <div className="wg-box pl-44 mb-20">
      <h4>Basic Information</h4>
      <form
        className="form-bacsic-infomation flex gap30 flex-column"
        onSubmit={handleSubmit}
      >
        {/* Property Title Field */}
        <fieldset className="text has-top-title">
          <input
            type="text"
            placeholder="Property Title *"
            id="property-title"
            name="property-title"
            tabIndex={2}
            aria-required="true"
            required
          />
          <label htmlFor="property-title">Property Title *</label>
        </fieldset>

        {/* Email Field */}
        <fieldset className="text has-top-title">
          <input
            type="email"
            placeholder="Your Email *"
            id="your-email"
            name="your-email"
            tabIndex={2}
            aria-required="true"
            required
          />
          <label htmlFor="your-email">Your Email *</label>
        </fieldset>

        {/* Name Field */}
        <fieldset className="text has-top-title">
          <input
            type="text"
            placeholder="Your Name *"
            id="your-name"
            name="your-name"
            tabIndex={2}
            aria-required="true"
            required
          />
          <label htmlFor="your-name">Your Name *</label>
        </fieldset>

        {/* Phone Number Field */}
        <fieldset className="text has-top-title">
          <input
            type="tel"
            placeholder="Phone Number *"
            id="phone-number"
            name="phone-number"
            tabIndex={2}
            aria-required="true"
            required
          />
          <label htmlFor="phone-number">Phone Number *</label>
        </fieldset>

        <p>How do you prefer to be contacted?</p>

        <div className="mt-10">
          <h1 className="text-xl font-semibold mb-4">
            Notification Preferences
          </h1>

          {/* Radio Button Group */}
          <div className="space-y-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="notification"
                value="phoneAndChat"
                id="phoneRadio"
                checked={selectedOption === "phone"}
                onChange={() => handleOptionChange("phone")}
              />
              <p className="sm:text-[16px] text-[12px] ml-3 sm:ml-0">
                Telephone and messages in our chat (recommended)
              </p>
            </label>

            {selectedOption === "phone" && (
              <div className="pl-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={tenantProfileMessages === "phoneMsg"}
                    onChange={() =>
                      setTenantProfileMessages(
                        tenantProfileMessages === "phoneMsg" ? "" : "phoneMsg"
                      )
                    }
                  />
                  <p className="sm:text-[16px] text-[12px]">
                    Receive all messages via chat with tenant profile
                  </p>
                </label>
                <a href="#" className="text-blue-500 text-sm">
                  What are tenant profile messages?
                </a>
              </div>
            )}

            <label className="flex items-center">
              <input
                type="radio"
                name="notification"
                value="chatMessages"
                className="mr-2"
                checked={selectedOption === "chatMessages"}
                onChange={() => handleOptionChange("chatMessages")}
              />
              <p className="sm:text-[16px] text-[12px]">
                Only by chat messages
              </p>
            </label>

            {selectedOption === "chatMessages" && (
              <div className="pl-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={tenantProfileMessages === "chatMsg"}
                    onChange={() =>
                      setTenantProfileMessages(
                        tenantProfileMessages === "chatMsg" ? "" : "chatMsg"
                      )
                    }
                  />
                  <p className="sm:text-[16px] text-[12px]">
                    Receive all messages via chat with tenant profile
                  </p>
                </label>
                <a href="#" className="text-blue-500 text-sm">
                  What are tenant profile messages?
                </a>
              </div>
            )}

            <label className="flex items-center">
              <input
                type="radio"
                name="notification"
                value="onlyPhone"
                className="mr-2"
                checked={selectedOption === "onlyPhone"}
                onChange={() => handleOptionChange("onlyPhone")}
              />
              <p className="sm:text-[16px] text-[12px]">Only by phone</p>
            </label>
          </div>
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

export default Card1;
