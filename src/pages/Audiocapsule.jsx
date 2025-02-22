import React from "react";
import arrow1 from "./arrow-1.svg";
import arrow2 from "./arrow-2.svg";
import arrow3 from "./arrow-3.svg";
import arrow4 from "./arrow-4.svg";
import arrow5 from "./arrow-5.svg";
import arrowRight11 from "./arrow-right-1-1.svg";
import camera from "./camera.svg";
import image8 from "./image-8.png";
import image9 from "./image-9.png";
import image10 from "./image-10.png";
import rectangle27 from "./rectangle-27.svg";
import share from "./share.svg";
import "./style.css";
import upload from "./upload.svg";
import vector32 from "./vector-32.svg";

export const LyfreIndex = () => {
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
                <div className="text-wrapper-6">Contacs US</div>
              </div>
            </div>

            <div className="ellipse-2" />
          </div>

          <img className="vector" alt="Vector" src={vector32} />

          <div className="overlap-2">
            <div className="ellipse-3" />

            <img className="img" alt="Image" src={image8} />

            <img className="image-2" alt="Image" src={image9} />

            <img className="image-3" alt="Image" src={image10} />

            <img className="arrow" alt="Arrow" src={arrow1} />

            <img className="arrow-2" alt="Arrow" src={arrow2} />

            <img className="arrow-3" alt="Arrow" src={arrow3} />

            <p className="p">Voices Fade, Memories in Sound Last Forever</p>

            <img className="rectangle" alt="Rectangle" src={rectangle27} />

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

                <p className="text-wrapper-8">Get started now to try out!</p>

                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-9">Enter your email here</div>

                    <div className="rectangle-2" />

                    <div className="ellipse-4" />

                    <img
                      className="arrow-right"
                      alt="Arrow right"
                      src={arrowRight11}
                    />
                  </div>
                </div>
              </div>

              <div className="frame-5">
                <div className="frame-6">
                  <div className="text-wrapper-10">Useful Links</div>

                  <div className="text-wrapper-11">Home</div>

                  <div className="text-wrapper-11">About Us</div>

                  <div className="text-wrapper-11">FAQs</div>
                </div>

                <div className="frame-7">
                  <div className="text-wrapper-12">Social Links</div>

                  <div className="frame-8">
                    <div className="text-wrapper-13">Facebook</div>

                    <div className="text-wrapper-11">Instagram</div>

                    <div className="text-wrapper-11">LinkedIn</div>
                  </div>
                </div>

                <div className="group-2">
                  <div className="frame-9">
                    <div className="text-wrapper-14">Contact Us</div>

                    <div className="text-wrapper-15">Support@gmail.com</div>

                    <div className="text-wrapper-15">+41444457688</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="frame-10">
              <p className="text-wrapper-16">
                © 2024 LyfeIndex. Copyright and rights reserved
              </p>

              <div className="group-3">
                <div className="text-wrapper-17">Terms and Condtions</div>

                <div className="ellipse-5" />

                <div className="text-wrapper-18">Privacy Policy</div>
              </div>
            </div>
          </div>
        </div>

        <div className="ellipse-6" />

        <div className="frame-11">
          <div className="frame-12">
            <img className="img-2" alt="Camera" src={camera} />

            <div className="text-wrapper-19">Take Photo</div>
          </div>

          <img className="arrow-4" alt="Arrow" src={arrow4} />

          <div className="frame-13">
            <img className="img-2" alt="Upload" src={upload} />

            <div className="text-wrapper-20">Upload it</div>
          </div>

          <img className="arrow-4" alt="Arrow" src={arrow5} />

          <div className="frame-14">
            <img className="img-2" alt="Share" src={share} />

            <div className="text-wrapper-20">Share with your friends</div>
          </div>
        </div>

        <p className="text-wrapper-21">
          “A voice once heard, a memory forever felt”
        </p>
      </div>
    </div>
  );
};
