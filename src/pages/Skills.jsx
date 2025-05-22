//import ParticlesBackground from "../components/ParticlesBackground";
import PageNav from "../components/PageNav";
import styles from "./Skills.module.css";
//import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import html5 from "../assets/html.png";
import css3 from "../assets/css3.png";
import js from "../assets/java-script.png";
import jquery from "../assets/jquery.png";
import reactLogo from "../assets/react.png";
import typescript from "../assets/typescript.png";
import playwright from "../assets/playwright.png";
import Cypress from "../assets/Cypress.png";

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
              <figure className={styles.skillItem}>
                <img src={html5} alt="HTML5" className={styles.icon} />
                <figcaption>HTML5</figcaption>
              </figure>
              <figure className={styles.skillItem}>
                <img src={css3} alt="CSS3" className={styles.icon} />
                <figcaption>CSS3</figcaption>
              </figure>
              <figure className={styles.skillItem}>
                <img src={js} alt="JS" className={styles.icon} />
                <figcaption>Javascript</figcaption>
              </figure>
              <figure className={styles.skillItem}>
                <img src={jquery} alt="jQuery" className={styles.icon} />
                <figcaption>jQuery</figcaption>
              </figure>
              <figure className={styles.skillItem}>
                <img src={reactLogo} alt="React" className={styles.icon} />
                <figcaption>React Js</figcaption>
              </figure>
              <figure className={styles.skillItem}>
                <img src={typescript} alt="TS" className={styles.icon} />
                <figcaption>Typescript</figcaption>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
