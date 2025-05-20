import PageNav from "../components/PageNav";
import Styles from "./Homepage.module.css";
import { Typewriter } from "react-simple-typewriter";
import "bootstrap-icons/font/bootstrap-icons.css";
import DownloadButton from "../components/DownloadButton";

function Homepage() {
  return (
    <main className={Styles.homepage}>
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
              I'm <strong class="main-name"> Utkarsh Kapoor</strong>
            </h2>
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
                typeSpeed={50}
                deleteSpeed={50}
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
