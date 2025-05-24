//import ParticlesBackground from "../components/ParticlesBackground";
import PageNav from "../components/PageNav";
import styles from "./Skills.module.css";
//import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import html5 from "../assets/skills/html.png";
import css3 from "../assets/skills/css3.png";
import js from "../assets/skills/js.png";
import jquery from "../assets/skills/jquery.png";
import reactLogo from "../assets/skills/react.png";
import typescript from "../assets/skills/typescript.png";
import playwright from "../assets/skills/playwright.png";
import Cypress from "../assets/skills/Cypress.png";
import sql from "../assets/skills/sql.png";
import tableau from "../assets/skills/tableau.png";
//import webdev1 from "../assets/webdev1.png";
//import webdev2 from "../assets/webdev2.png";
//import webdev3 from "../assets/webdev3.png";
import Footer from "../components/footer";

function Skills() {
  return (
    <div style={{ padding: "1.5rem" }} className={styles.background}>
      <PageNav />
      <div className={styles.skillsContainer}>
        {/*<ParticlesBackground />*/}
        <div className={styles.skillsContent}>
          <div className={styles.skillsGrid}>
            {/*
            <div className={styles.iconContainer}>
              <FaHtml5 className={styles.icon} title="HTML5" />
              <FaCss3Alt className={styles.icon} title="CSS3" />
              <FaJs className={styles.icon} title="JavaScript" />
              <FaReact className={styles.icon} title="React" />
            </div>
          */}
            <div className={styles.skillsIcons}>
              <h2 className={styles.h2}>Technologies</h2>
              <figure className={styles.skillItem}>
                <img src={reactLogo} alt="React" className={styles.icon} />
                <figcaption>React Js</figcaption>
              </figure>
              <figure className={styles.skillItem}>
                <img src={js} alt="Javascript" className={styles.icon} />
                <figcaption>Javascript</figcaption>
              </figure>
              <figure className={styles.skillItem}>
                <img src={html5} alt="HTML5" className={styles.icon} />
                <figcaption>HTML5</figcaption>
              </figure>
              <figure className={styles.skillItem}>
                <img src={css3} alt="CSS3" className={styles.icon} />
                <figcaption>CSS3</figcaption>
              </figure>
              <figure className={styles.skillItem}>
                <img src={jquery} alt="jQuery" className={styles.icon} />
                <figcaption>jQuery</figcaption>
              </figure>
              <figure className={styles.skillItem}>
                <img
                  src={typescript}
                  alt="Typescript"
                  className={styles.icon}
                />
                <figcaption>Typescript</figcaption>
              </figure>
              <figure className={styles.skillItem}>
                <img src={sql} alt="SQL" className={styles.icon} />
                <figcaption>SQL</figcaption>
              </figure>
              <figure className={styles.skillItem}>
                <img
                  src={playwright}
                  alt="Playwright"
                  className={styles.icon}
                />
                <figcaption>Playwright</figcaption>
              </figure>
              <figure className={styles.skillItem}>
                <img src={Cypress} alt="Cypress" className={styles.icon} />
                <figcaption>Cypress</figcaption>
              </figure>
            </div>
            <div>
              <h2 className={styles.h2}>Tools</h2>
              <figure className={styles.skillItem}>
                <img src={tableau} alt="Tableau" className={styles.icon} />
                <figcaption>Tableau</figcaption>
              </figure>
              {/*<img src={webdev1} alt="webdev" className={styles.sidepic} />*/}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Skills;
