import PageNav from "../components/PageNav";
import Styles from "./Certificate.module.css"; // Import the CSS module for styling
import { cn } from "../components/cn";

const certifications = [
  {
    title: "Frontend Development Certification",
    issuer: "freeCodeCamp",
    date: "March 2024",
    description:
      "Completed a comprehensive course covering HTML, CSS, and JavaScript.",
    link: "https://www.freecodecamp.org/certification/yourusername/front-end-development",
  },
  {
    title: "React Developer Certification",
    issuer: "Coursera",
    date: "June 2024",
    description: "Learned advanced React concepts and built several projects.",
    link: "https://www.coursera.org/account/accomplishments/certificate/yourcertificateid",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "January 2024",
    description: "Mastered algorithms and data structures in JavaScript.",
    link: "https://www.freecodecamp.org/certification/yourusername/javascript-algorithms-and-data-structures",
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
            <div
              key={index}
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
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-400 transition-colors duration-300"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
