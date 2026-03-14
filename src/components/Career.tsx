import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>SCM Softwarelabs – Andhra Pradesh</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working on full-stack development using Flutter and Java
              Springboot. Developing UI for CRM and client-based projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Research Technology – Vadodara</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked on full-stack development using Kotlin. Developed modules
              for inventory tracking and auditing on the IAMS project.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Developer (EdTech)</h4>
                <h5>GraspHopp – Vadodara</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed educational game levels for 10th–12th grade subjects.
              Converted textbook questions into interactive MCQs using Android
              Studio, Java, and JSON.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketing Intern</h4>
                <h5>FlyingBees – Vadodara</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Worked on SEO optimization and digital marketing strategies.
              Assisted in improving online presence and search rankings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
