import PageNav from "../components/PageNav";
import Styles from "./About.module.css";
import { Typewriter } from "react-simple-typewriter";
import Footer from "../components/footer";

function About() {
  return (
    <div className={Styles.background} style={{ padding: "1.5rem" }}>
      <PageNav />
      <div>
        <h4>
          <Typewriter
            words={[
              "Accomplishment-driven Software Developer with wealth of experience in Front-end Development, focusing on crafting interactive web applications that prioritize user experience and performance. Expertise in delivering responsive, user-friendly web applications with a strong emphasis on performance, security, and cross-functional collaboration. ",
              "Last worked as Software Engineer at Wipro, actively participated in the development of scalable web applications that align with client specifications and industry benchmarks.  ",
              "Successfully resolved critical UI issues and performance bottlenecks in the Nokia 1830 Simulator project, conducted security testing with Defensics tool; contributed to developing dynamic, responsive user interfaces for large-scale projects like the SABIC dashboard using modern CSS, Bootstrap, and React. ",
              "Proficient in CSS3 & Bootstrap for responsive design, JavaScript & jQuery for dynamic interactivity, React.js for modern UI development, UNIX for system management, Playwright & Cypress for robust automated testing, Defensics for comprehensive security testing, Power BI for impactful data visualization, and Java for back-end development. ",
              "Proven skills in security testing, and performance optimization, with a particular interest in utilizing React.js and JavaScript expertise, contributing to the strategic growth of high-quality software solutions. ",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={1000}
          />
        </h4>
      </div>
      <div>
        <h2>Core Competencies</h2>
        <Typewriter
          words={[
            "Front-End Development",
            "Continuous Integration/ Continuous Deployment (CI/CD)",
            "Automated Testing & Security Testing ",
            "Performance Optimization",
            "Version Control  (Git)",
            "Component-Based Architecture",
            "Responsive & Adaptive Design",
            "Agile Methodologies",
            "Cross-Browser Compatibility & Debugging ",
            "User Interface Design",
            "Application Scalability",
            "Vulnerability Identification & Risk Mitigation",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={140}
          delaySpeed={1500}
        />
      </div>
      <Footer />
    </div>
  );
}

export default About;
