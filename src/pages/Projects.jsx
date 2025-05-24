import PageNav from "../components/PageNav";
import Styles from "./About.module.css";
import Footer from "../components/footer";
import { cn } from "../components/cn";
import DemoButton from "../components/demoButton";

const certifications = [
  {
    title: "Developer Portfolio",
    description:
      'A dynamic Software Developer Portfolio Template built with React.js, Bootstrap, and Node.js — designed to elegantly showcase my skills, projects, and a personal "About Me" section. This project serves as a professional digital identity for software developers.',
    link: "https://utkarshkapoor.netlify.app/",
  },
  {
    title: "JavaScript Essentials 1",
    description:
      "Proficient in core JavaScript syntax, data types, control flow, functions, and basic algorithmic problem-solving.",
    link: "https://www.credly.com/badges/fb8c63a5-1748-406e-bd34-73945213af22",
  },
  {
    title: "Data Analytics Essentials",
    description:
      "Skilled in data analytics fundamentals, data transformation, and basic statistical analysis using Excel, SQL, Tableau, and more.",
    link: "https://www.credly.com/badges/9f9eaa8a-a30f-4c02-b78e-81d6596b7c24",
  },
  // Add more certifications as needed
];

function Projects() {
  return (
    <div style={{ padding: "1.5rem" }} className={Styles.background}>
      <PageNav />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
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
              <p className="text-gray-300 mb-4">{cert.description}</p>
              <DemoButton link={cert.link} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
