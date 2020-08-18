import React, { Component } from "react";
import "./Resume.css";
import gitresumelogo from "../icons/resumelogo/githubresume.png";
import linkedinresumelogo from "../icons/resumelogo/linkedinresume.png";
import locationresumelogo from "../icons/resumelogo/locationresume.png";
import mailresumelogo from "../icons/resumelogo/mailresume.png";
import phoneresumelogo from "../icons/resumelogo/phoneresume.png";
class Resume extends Component {
  render() {
    return (
      <div className="maincontainerofresume">
        <div className="portfolio_container">
          <div className="resumeheaderdiv">
            <div className="resumeheader1">
              <div className="lineresumediv"></div>
              <span className="nameonresume"> Kshitiz S. </span>
              <br />
              <p className="resumetopleftpara">
                A self motivated individual whith a strong understanding of the
                entire web development process products that solve user
                problems.Team player with good communication skills adaptable to
                any work environment.A passionate developer who brings creative
                ideas from areas including progressive web applications.
              </p>
            </div>
            <div className="resumeheader2">
              <div className="descriptionlogocls">
                Version Control: github.com/domster4444
                <br />
                Location: Nepal,Jhapa
                <br />
                Linked in:(Not Made Any)
                <br />
                Mail:kshitiz.stha11@gmail.com
                <br />
                Phone No:9808436995
              </div>
              <div className="alllogodiv">
                <img
                  src={gitresumelogo}
                  alt="logo of git"
                  className="logoofresume"
                />
                <img
                  src={locationresumelogo}
                  alt="logo of location"
                  className="logoofresume"
                />
                <img
                  src={linkedinresumelogo}
                  alt="logo of linkedin"
                  className="logoofresume"
                />
                <img
                  src={mailresumelogo}
                  alt="logo of mail"
                  className="logoofresume"
                />
                <img
                  src={phoneresumelogo}
                  alt="logo of phone"
                  className="logoofresume"
                />
              </div>
            </div>
          </div>
          <div className="innerresumecontainerwith2column">
            <div className="resumecolumndiv1">
              <span className="workexptxtcls">
                <br />
                WORK EXPERIENCE
              </span>
              <p className="resumeworkexperiencepara">
                FullStack Developer From Age 17
              </p>
              <p className="resumeworkexperiencedatepara">
                August6/2020-present
              </p>
              <ul className="ulpointofworkexperience">
                <li>Translated UI wireframes and mockups into Websites.</li>
                <li>
                  Implemented best webdevelopment practices with frameworks like
                  react(progressive web app).
                </li>
                <li>
                  Built front-end of the application in HTML5,CSS3,JavaScript
                  and React Js.
                </li>
                <li>
                  Refactored source code down to 35% of it's original size for
                  an entire application.
                </li>
                <li>
                  Quality commenting on codes for understandability and well
                  documentation.
                </li>
              </ul>

              <span className="workexptxtcls">
                <br />
                FREELANCE WEB DEVELOPER
              </span>
              <p className="resumeworkexperiencepara">
                Self-Employed Web Developer
              </p>
              <p className="resumeworkexperiencedatepara">
                January6/2020-present
              </p>
              <ul className="ulpointofworkexperience">
                <li>
                  Successfully turned Client's mockup into Website for his
                  advisor business startup.
                </li>
                <li>
                  Built a fully responsive School's Website of with Admission
                  registration system through wordpress(PHPframework) for the
                  biggest Center of the District.
                </li>
                <li>
                  worked with my clients very closely, understand their
                  requirements and provided the best services.
                </li>
              </ul>
              
               
            </div>

            <div className="resumecolumndiv2">
              <span className="workexptxtcls">
                <br />
                PROJECTS
              </span>
              <p className="resumeworkexperiencepara">Project(Title)</p>
              <p className="resumeworkexperiencedatepara">
                August6/2020-present
              </p>
              <ul className="ulpointofworkexperience">
                <li>(No Project Available)</li>
                <li>(No Project Available)</li>
                <li>(No Project Available)</li>
                <li>(No Project Available)</li>
                <li>(No Project Available)</li>
              </ul>

              <span className="workexptxtcls">
                <br />
                VOLUNTEER EXPERIENCE
              </span>
              <p className="resumeworkexperiencepara">Member</p>
              <p className="resumeworkexperiencedatepara">
                January6/2020-present
              </p>
              <ul className="ulpointofworkexperience">
                <li>(No volunteer EXPERIENCE)</li>
                <li>(No volunteer EXPERIENCE)</li>
                <li>(No volunteer EXPERIENCE)</li>
              </ul>

              <span className="workexptxtcls">
                <br />
                CERTIFICATE
              </span>

              <p className="resumeworkexperiencepara">(No Certificate Yet)</p>
              <p className="resumeworkexperiencedatepara">
                (No Certificate Yet)
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
