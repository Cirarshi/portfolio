import PageNav from "../components/PageNav";
import Styles from "./About.module.css";

function Projects() {
  return (
    <div style={{ padding: "1.5rem" }} className={Styles.background}>
      <PageNav />
      My Projects
    </div>
  );
}

export default Projects;
