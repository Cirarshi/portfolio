import PageNav from "../components/PageNav";
import Timeline from "../components/TimelineEdu";
import Styles from "./expedu.module.css";
import Footer from "../components/footer";

function Education() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        padding: "1.5rem",
      }}
      className={Styles.background}
    >
      <PageNav />
      <Timeline />
      <Footer />
    </div>
  );
}

export default Education;
