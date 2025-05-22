import PageNav from "../components/PageNav";
import Timeline from "../components/TimelineEdu";
import Styles from "./About.module.css";

function Education() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        padding: "1.5rem",
        height: "calc(120vh)",
      }}
      className={Styles.background}
    >
      <PageNav />
      <Timeline />
    </div>
  );
}

export default Education;
