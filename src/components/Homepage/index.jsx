import React from "react";
const Homepage = () => {
  function handleRouting() {
    const section = document.getElementById("#about");
    console.log(section);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="flex">
      <div className="text">
        <div>
          Hello,This is <span className="name">MADDELA SHIVANI</span>
          <br />
          <div class="wrapper">
            <div class="static-txt">I'm a</div>
            <ul class="dynamic-txts">
              <li>
                <span>Backend Developer</span>
              </li>
              <li>
                <span>Software Engineer</span>
              </li>
              <li>
                <span>Data Anaylst</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-3 button-position">
          <button className="work-btn" onClick={handleRouting}>
            View My Work
          </button>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
