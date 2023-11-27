import Accordion from "react-bootstrap/Accordion";
const Experience = () => {
  return (
    <div className="pt-3">
      <div className="header">Professional Experience</div>
      <div className="accordion-section">
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Program Anaylst @Cognizant Technology Solutions{" "}
            </Accordion.Header>
            <Accordion.Body>
              <div>
                <div className="row">
                  <div className="col-md-6">Hyderbad,India</div>
                  <div className="col-md-6">01/22-Present </div>
                </div>
                <div className="objective">
                  Developing front-end and mobile app solutions (B2C, B2B) in
                  Travel Tech on React/Next.js framework and Flutter SDK.
                </div>

                <div className="skills pt-3">
                  <div className="experince-skills">Java</div>
                  <div className="experince-skills">Spring Boot</div>
                  <div className="experince-skills">MySql</div>
                  <div className="experince-skills">Data Analysis</div>
                  <div className="experince-skills">Python</div>
                  <div className="experince-skills">Html</div>
                  <div className="experince-skills">Css</div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};
export default Experience;
