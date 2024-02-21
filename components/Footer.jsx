import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
export const Footer = () => {
  return (
    <>
      <div className="lower-section pt-4 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mt-1 logo-section">
              <h2 className="pb-4">
                <span className="lower-section-text">EZ</span>prompt
              </h2>
              <p>
                Join our vibrant community of creators and share your responses
                to our prompts for feedback, encouragement, and inspiration! our
                prompts are the perfect springboard for your next masterpiece.
              </p>
            </div>

            <div className="created-by-section">
              <h2 className="py-3">Created by</h2>
              <div className="border-bottom  "></div>
              <div className="created-by py-3 ">
                <div className="created-by-first">
                  <h3>Siratul Islam</h3>
                  <p>Software Developer</p>
                  <div className="social-icons">
                    <a href="https://github.com/Siratul804" target="_blank">
                      <SiGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/siratulislam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                    <a href="">
                      <FaStackOverflow />
                    </a>
                  </div>
                </div>
                <div className="py-2"></div>
                <div className="created-by-first">
                  <h3>Sultana Rupa</h3>
                  <p>Software Developer</p>
                  <div className="social-icons">
                    <a href="https://github.com/AsTeriaa09" target="_blank">
                      {" "}
                      <SiGithub />
                    </a>
                    <a href="">
                      {" "}
                      <FaLinkedin />
                    </a>
                    <a href="">
                      {" "}
                      <FaStackOverflow />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lower-hr">
            <hr />
          </div>
          <div className="copyright">
            <p>
              Copyright <span>©</span> PromptSquad | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
