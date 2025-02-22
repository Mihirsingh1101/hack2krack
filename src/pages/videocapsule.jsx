import React, { useEffect, useState } from "react";
import "./Videostyle.css";

const Videocapsule = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.querySelector(".videos-aren-t-just");
      if (textElement) {
        const rect = textElement.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="lyfre-index">
      <div className="div">
        <div className="ellipse" />

        <div className="overlap">
          <div className="overlap-group">
            <div className="frame">
              <div className="group">
                <div className="image" />
                <div className="link-lyfeindex">LyfeIndex</div>
              </div>

              <div className="navbar">
                <div className="text-wrapper">Home</div>
                <div className="text-wrapper-2">Product</div>
                <div className="text-wrapper-3">FAQ</div>
                <div className="text-wrapper-4">Teams</div>
                <div className="text-wrapper-5">Privacy Policy</div>
              </div>

              <div className="div-wrapper">
                <div className="text-wrapper-6">Contacts US</div>
              </div>
            </div>

            <div className="ellipse-2" />
          </div>

          <img
            className="vector"
            alt="Vector"
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/Light_blue_background.png"
          />

          <div className="overlap-2">
            <div className="ellipse-3" />
            <img
              className="img"
              alt="Image"
              src="https://source.unsplash.com/200x200/?nature"
            />
            <img
              className="image-2"
              alt="Image"
              src="https://source.unsplash.com/200x200/?city"
            />
            <img
              className="image-3"
              alt="Image"
              src="https://source.unsplash.com/200x200/?ocean"
            />
            <img
              className="arrow"
              alt="Arrow"
              src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Arrow_icon.png"
            />

            <div className="relive-the-moments">
              Relive the Moments,
              <br />
              Frame by Frame
            </div>

            <img
              className="rectangle"
              alt="Rectangle"
              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Rectangle_example.png"
            />
            <div className="text-wrapper-7">Add</div>
          </div>
        </div>

        <div className="frame-wrapper">
          <div className="frame-2">
            <div className="frame-3">
              <div className="frame-4">
                <div className="group">
                  <div className="image-4" />
                  <div className="link-lyfeindex-2">LyfeIndex</div>
                </div>

                <p className="p">Get started now to try out!</p>

                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-8">Enter your email here</div>
                    <div className="rectangle-2" />
                    <div className="ellipse-4" />
                  </div>
                </div>
              </div>

              <div className="frame-5">
                <div className="frame-6">
                  <div className="text-wrapper-9">Useful Links</div>
                  <div className="text-wrapper-10">Home</div>
                  <div className="text-wrapper-10">About Us</div>
                  <div className="text-wrapper-10">FAQs</div>
                </div>

                <div className="frame-7">
                  <div className="text-wrapper-11">Social Links</div>
                  <div className="frame-8">
                    <div className="text-wrapper-12">Facebook</div>
                    <div className="text-wrapper-10">Instagram</div>
                    <div className="text-wrapper-10">LinkedIn</div>
                  </div>
                </div>

                <div className="group-2">
                  <div className="frame-9">
                    <div className="text-wrapper-13">Contact Us</div>
                    <div className="text-wrapper-14">Support@gmail.com</div>
                    <div className="text-wrapper-14">+41444457688</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="frame-10">
              <p className="text-wrapper-15">
                © 2024 LyfeIndex. Copyright and rights reserved
              </p>

              <div className="group-3">
                <div className="text-wrapper-16">Terms and Conditions</div>
                <div className="ellipse-5" />
                <div className="text-wrapper-17">Privacy Policy</div>
              </div>
            </div>
          </div>
        </div>

        <div className="ellipse-6" />

        <div className="frame-11">
          <div className="frame-12">
            <img
              className="img-2"
              alt="Camera"
              src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
            />
            <div className="text-wrapper-18">Take Photo</div>
          </div>

          <div className="frame-13">
            <img
              className="img-2"
              alt="Upload"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            />
            <div className="text-wrapper-19">Upload it</div>
          </div>

          <div className="frame-14">
            <img
              className="img-2"
              alt="Share"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Share-icon.svg/1024px-Share-icon.svg.png"
            />
            <div className="text-wrapper-19">Share with your friends</div>
          </div>
        </div>

        <p className={`videos-aren-t-just ${isVisible ? "fade-in" : ""}`}>
          “Videos aren’t just recordings; they are time machines that take us
          back to the laughter, the voices, and the emotions we once lived”
        </p>
      </div>
    </div>
  );
};

export default Videocapsule;
