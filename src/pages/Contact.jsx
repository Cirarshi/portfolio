import PageNav from "../components/PageNav";
import Styles from "./About.module.css";

function Contact() {
  return (
    <div style={{ padding: "1.5rem" }} className={Styles.background}>
      <PageNav />
      Get in touch with me
    </div>
  );
}

export default Contact;
