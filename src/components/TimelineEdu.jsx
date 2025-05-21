import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Timeline = () => {
  return (
    <section
      id="timeline"
      style={{ backgroundColor: "#000", padding: "2rem 0" }}
    >
      <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "2rem" }}>
        Work Experience
      </h2>
      <VerticalTimeline lineColor="#fff">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2023 – Present"
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1a1a1a" }}
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">TechCorp Inc.</h4>
          <p>
            Developing and maintaining user interfaces with React and Tailwind
            CSS.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 2021 – Dec 2022"
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1a1a1a" }}
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">UI/UX Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">DesignStudio</h4>
          <p>
            Crafted intuitive user experiences and interfaces for web
            applications.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 – 2021"
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1a1a1a" }}
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            B.Tech in Computer Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">XYZ University</h4>
          <p>
            Specialized in software development and human-computer interaction.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
