import PageNav from "../components/PageNav";
import Timeline from "../components/TimelineExp";
import Styles from "./About.module.css";

function Experience() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        padding: "1.5rem",
        height: "calc(220vh)",
      }}
      className={Styles.background}
    >
      <PageNav />
      <Timeline />
    </div>
  );
}

export default Experience;
