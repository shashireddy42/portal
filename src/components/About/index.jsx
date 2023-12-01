import profileImg from "../../assets/profile.jpeg";
import java from "../../assets/java.png";
import spring from "../../assets/spring.png";
import javascript from "../../assets/javascript.png";
import mysql from "../../assets/mysql.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import python from "../../assets/python.png";
const About = () => {
  return (
    <div>
      <div className="header">About Me</div>
      <div className="image-section">
        <img height={300} width={300} src={profileImg} alt="Girl in a jacket" />
      </div>
      <div>
        <div className="content">
          Hello! My name is Shivani and I enjoy developing things that live on
          the internet.
          <br />
          My interest in Backend development started back in 2022 when I decided
          to do projects. It turns out the interest in development taught me a
          lot about <span className="highlight">Java & SpringBoot!</span> <br />
          Fast-forward to today, and I’ve had the privilege of working at a{" "}
          <span className="highlight">Multi National Companies.</span> My main
          focus these days is building accessible, inclusive products and
          digital experiences at Upstatement for a variety of clients.
        </div>
        <div className="content row skill-header">
          Skills
          <div className="skills">
            <div>
              {" "}
              <a className="card1" href="#">
                <div className="logo">
                  <img height={80} width={80} src={java} alt="Java logo" />
                </div>
                <div className="go-corner" href="#">
                  <div className="go-arrow">→</div>
                </div>
              </a>
            </div>
            <div>
              {" "}
              <a className="card1" href="#">
                <div className="logo">
                  <img height={50} width={50} src={spring} alt="Spring logo" />
                </div>
                <div className="go-corner" href="#">
                  <div className="go-arrow">→</div>
                </div>
              </a>
            </div>
            <div>
              {" "}
              <a className="card1" href="#">
                <div className="logo">
                  <img
                    height={80}
                    width={80}
                    src={javascript}
                    alt="Java logo"
                  />
                </div>
                <div className="go-corner" href="#">
                  <div className="go-arrow">→</div>
                </div>
              </a>
            </div>
            <div>
              {" "}
              <a className="card1" href="#">
                <div className="logo">
                  <img height={80} width={80} src={mysql} alt="Java logo" />
                </div>
                <div className="go-corner" href="#">
                  <div className="go-arrow">→</div>
                </div>
              </a>
            </div>
            <div>
              {" "}
              <a className="card1" href="#">
                <div className="logo">
                  <img height={80} width={80} src={python} alt="Java logo" />
                </div>
                <div className="go-corner" href="#">
                  <div className="go-arrow">→</div>
                </div>
              </a>
            </div>
            <div>
              {" "}
              <a className="card1" href="#">
                <div className="logo">
                  <img height={80} width={80} src={html} alt="Java logo" />
                </div>
                <div className="go-corner" href="#">
                  <div className="go-arrow">→</div>
                </div>
              </a>
            </div>
            <div>
              {" "}
              <a className="card1" href="#">
                <div className="logo">
                  <img height={80} width={80} src={css} alt="Java logo" />
                </div>
                <div className="go-corner" href="#">
                  <div className="go-arrow">→</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
