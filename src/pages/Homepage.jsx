import PageNav from "../components/PageNav";
import Styles from "./HomePage.module.css";
import { Typewriter } from "react-simple-typewriter";
import "bootstrap-icons/font/bootstrap-icons.css";
import DownloadButton from "../components/DownloadButton";
import SantaCanvas from "../components/Base64Canva";

function Homepage() {
  return (
    <main className={Styles.homepage} style={{ padding: "1.5rem" }}>
      <PageNav />

      <section>
        <div className="row">
          <div className="home-header d-flex flex-column align-items-center text-center gap-3 my-5">
            <h1 className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h2>
              I'm <strong className="main-name"> Utkarsh Kapoor</strong>
            </h2>
            <div
              className="background-container"
              style={{ position: "relative" }}
            >
              <SantaCanvas />
            </div>
            <h2>
              I'm a
              <Typewriter
                words={[
                  " Software Engineer",
                  " Web Developer",
                  " Automation Tester",
                  " Freelancer",
                  " Learning Enthusiast",
                  " Travel Storyteller",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={1500}
              />
            </h2>

            <DownloadButton
              filePath="../Utkarsh_Resume.pdf"
              fileName="Utkarsh_Resume.pdf"
              label="Download Resume"
              color="success"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Homepage;
