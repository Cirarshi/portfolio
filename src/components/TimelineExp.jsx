import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import styles from "./Timeline.module.css"; // Import your CSS file for custom styles

const Timeline = () => {
  return (
    <section id="timeline">
      <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "2rem" }}>
        Work Experience
      </h2>
      <VerticalTimeline lineColor="#fff">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2025 – Present"
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1a1a1a" }}
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Freelancer</h3>
          <p>
            Developing few user interfaces with React and Tailwind CSS for
            multiple clients.
          </p>
          <h4 className="vertical-timeline-element-subtitle">📍 Remote</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="8 January 2025"
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1a1a1a" }}
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Departed from Wipro with...
          </h3>
          <ul className={styles.customBulletList}>
            <li>
              Led the development of web applications, ensuring adherence to
              coding and design best practices while focusing on high-quality
              user experiences.
            </li>
            <li>
              Collaborated with cross-functional teams, aligning project goals
              and deliverables with client expectations and industry standards.
            </li>
            <li>
              Conducted security assessments and testing, identifying
              vulnerabilities and implementing enhancements to protect user
              data. devices.
            </li>
            <li>
              Administered the integration of modern UI frameworks, improving
              the visual appeal and functionality of applications.{" "}
            </li>
            <li>
              Organized code reviews and knowledge-sharing sessions, promoting a
              culture of continuous improvement and technical excellence.{" "}
            </li>
            <li>
              Implemented responsive design across projects, ensuring seamless
              user experiences on all devices.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sept 2024 – Jan 2025"
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1a1a1a" }}
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Responsive Web & UI/UX Designer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Client: SABIC</h4>
          <h4 className="vertical-timeline-element-subtitle">
            📍 Bengaluru, Karnataka
          </h4>
          <ul className={styles.customBulletList}>
            <li>
              Led the development of a responsive UI, optimizing dashboard
              layouts for diverse screen sizes with CSS and Bootstrap
              techniques.
            </li>
            <li>
              Guaranteed consistent visual appearance and seamless user
              experience across various resolutions, enhancing usability.
            </li>
            <li>
              Utilized modern CSS methodologies to fine-tune design elements,
              ensuring smooth performance and visual appeal across multiple
              devices.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sept 2023 – Aug 2024"
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1a1a1a" }}
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Clinet: NOKIA - 1830 Simulator
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            📍 Chennai, Tamil Nadu
          </h4>
          <ul className={styles.customBulletList}>
            <li>
              Transformed the UI of the network simulator by integrating card
              and port requirements, refining layout and functionality to
              accommodate new features.
            </li>
            <li>
              Led comprehensive security testing using Defensics, identifying
              and addressing vulnerabilities to enhance the application's
              security.
            </li>
            <li>
              Collaborated with cross-functional teams to troubleshoot, resolve
              issues, and proactively improve the application's security and
              performance.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="18 September 2020"
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1a1a1a" }}
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Joined Wipro</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
