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
          date="Jan 2025 – Present"
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1a1a1a" }}
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Freelancer</h3>
          <p>Developing few user interfaces with React and Tailwind CSS.</p>
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
          <h3 className="vertical-timeline-element-title">Departed Wipro</h3>
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
          <p>
            Crafted intuitive user experiences and interfaces for web
            applications.
          </p>
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
          <p>
            Developing and maintaining user interfaces with React and Tailwind
            CSS.
          </p>
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
