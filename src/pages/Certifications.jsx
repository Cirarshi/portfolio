import PageNav from "../components/PageNav";
import Styles from "./Certificate.module.css"; // Import the CSS module for styling
import { cn } from "../components/cn";
import js2 from "../assets/cert/js2.png";
import js1 from "../assets/cert/js1.png";
import dataAnalytics from "../assets/cert/datanalytics.png";
import Footer from "../components/footer";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy",
    date: "May 2025",
    description:
      "Skilled in OOP (class-based and classless), built-in objects, Maps/Sets, and async programming.",
    link: "https://www.credly.com/badges/22d3ef00-449f-4be4-861b-b0586a795dfe",
    src: js2,
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "May 2025",
    description:
      "Proficient in core JavaScript syntax, data types, control flow, functions, and basic algorithmic problem-solving.",
    link: "https://www.credly.com/badges/fb8c63a5-1748-406e-bd34-73945213af22",
    src: js1,
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "May 2025",
    description:
      "Skilled in data analytics fundamentals, data transformation, and basic statistical analysis using Excel, SQL, Tableau, and more.",
    link: "https://www.credly.com/badges/9f9eaa8a-a30f-4c02-b78e-81d6596b7c24",
    src: dataAnalytics,
  },
  {
    title: "More to come",
    issuer: "",
    date: "",
    description:
      "I’m constantly sharpening my skills and collecting certifications like rare gems — stay tuned, the collection’s always growing!",
    link: "#",
    src: "",
  },
  // Add more certifications as needed
];

function Certifications() {
  return (
    <div className={Styles.outer} style={{ padding: "1.5rem" }}>
      <PageNav />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          My Certifications
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "border bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center text-center",
                Styles.card
              )}
            >
              <h2 className="text-xl font-semibold mb-2">{cert.title}</h2>
              <p className="text-sm text-gray-400 mb-1">
                <span className="font-medium text-white">Issuer:</span>{" "}
                {cert.issuer}
              </p>
              <p className="text-sm text-gray-400 mb-4">
                <span className="font-medium text-white">Date:</span>{" "}
                {cert.date}
              </p>
              <p className="text-gray-300 mb-4">{cert.description}</p>
              {cert.issuer && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-400 transition-colors duration-300"
                >
                  <img
                    src={cert.src}
                    className={Styles.icon}
                    alt={cert.title}
                  />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Certifications;
