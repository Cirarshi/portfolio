import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import stlyes from "./footer.module.css";

function footer() {
  return (
    <div>
      <footer>
        <div className={stlyes.foot}>
          <div className="text-center">
            <p>
              Designed and created with ❣️ by Connex &copy;{" "}
              {new Date().getFullYear()}
            </p>
          </div>
          <div className="col-md-12 text-center">
            <p>
              Follow me on
              <a
                href="https://www.linkedin.com/in/utkarsh-kapoor-6b3200127/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={24} />
              </a>
              ,
              <a
                href="https://github.com/Cirarshi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              ,
              <a
                href="https://www.youtube.com/@Connex18"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={24} />
              </a>
              ,
              <a href="#">
                <FaFacebook size={24} />
              </a>
              ,
              <a href="#">
                <FaGithub size={24} />
              </a>
              and
              <a href="#">
                <FaFacebook size={24} />
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
