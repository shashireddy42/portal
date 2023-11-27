import flightProject from "../../assets/project1.jpg";
import Card from "react-bootstrap/Card";
const Projects = () => {
  return (
    <div className="pt-3">
      <div className="header">Projects</div>
      <div className="row pt-3">
        <div className="col-md-6 project-img">
          <div>
            <img src={flightProject} alt="flight" height={300} width={400} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="project">
            <div className="project-heading">Flight Reservation System</div>
            <div className="project-desc">
              <Card style={{ width: "30rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    The <p className="skill-highlight">Java-based</p> Flight
                    Reservation System is an online solution facilitating swift
                    flight bookings, real-time consolidation of data from
                    various airlines, and efficient administration of flight
                    information, including updates, cancellations, routes, and
                    schedules.
                    <div className="skills pt-10">
                      <div className="project-skills">Java</div>
                      <div className="project-skills">Spring Boot</div>
                      <div className="project-skills">MySQl</div>
                      <div className="project-skills">Html</div>
                      <div className="project-skills">Css</div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="soon pt-3">More Coming soon..</div>
    </div>
  );
};
export default Projects;
