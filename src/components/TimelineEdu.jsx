import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Timeline = () => {
  return (
    <section id="timeline" style={{ padding: "1rem" }}>
      <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "2rem" }}>
        Education
      </h2>
      <VerticalTimeline lineColor="#fff">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Present"
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1a1a1a" }}
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            Embarking on Full Stack Development Journey
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Self</h4>
          <p>
            Advancing React skills and exploring Node.js, Express, MongoDB, and
            Git to become a Full Stack Developer.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2016 – March 2020"
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1a1a1a" }}
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">B. Tech. (CSE)</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kalsalingam Univeristy
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 – 2016"
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1a1a1a" }}
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Preparing for JEE</h3>
          <h4 className="vertical-timeline-element-subtitle">Career Point</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 – 2016"
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1a1a1a" }}
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Class 12th (CBSE)</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kendriya Vidyalaya
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012 – 2013"
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1a1a1a" }}
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Class 10th (CBSE)</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kendriya Vidyalaya
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
