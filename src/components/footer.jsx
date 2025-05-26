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
          <div className="text-center text-gray-300 mb-3">
            <p>
              Designed and created with ❣️ by Connex &copy;{" "}
              {new Date().getFullYear()}
            </p>
          </div>
          <div className="text-center text-gray-300 mb-3">
            <span className="text-gray-300">Follow me on</span>
            <a
              href="https://www.linkedin.com/in/utkarsh-kapoor-6b3200127/"
              target="_blank"
              rel="noopener noreferrer"
              className={stlyes.icon}
            >
              <FaLinkedinIn size={24} />
            </a>

            <a
              href="https://github.com/Cirarshi"
              target="_blank"
              rel="noopener noreferrer"
              className={stlyes.icon}
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.youtube.com/@Connex18"
              target="_blank"
              rel="noopener noreferrer"
              className={stlyes.icon}
            >
              <FaYoutube size={24} />
            </a>

            <a
              href="https://www.instagram.com/lost_cirarshi?utm_source=qr&igsh=eG9ieWo2NTkxd2ww"
              target="_blank"
              rel="noopener noreferrer"
              className={stlyes.icon}
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://x.com/CIRARSHI?t=UCn5UkUByCBpjcFi5PKkRQ&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className={stlyes.icon}
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.facebook.com/share/16BbKnMbay/"
              target="_blank"
              rel="noopener noreferrer"
              className={stlyes.icon}
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
