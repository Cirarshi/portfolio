import PageNav from "../components/PageNav";
import Styles from "./Project.module.css";
import Footer from "../components/footer";
import { cn } from "../components/cn";
//import DemoButton from "../components/demoButton";

const certifications = [
  {
    title: "Developer Portfolio",
    description:
      'A dynamic Software Developer Portfolio Template built with React.js, Bootstrap, and Node.js — designed to elegantly showcase my skills, projects, and a personal "About Me" section. This project serves as a professional digital identity for software developers.',
    link: "https://utkarshkapoor.netlify.app/",
  },
  {
    title: "Connex Pizza",
    description:
      "A dynamic React-based menu display for restaurants that smartly toggles between open and closed states based on operating hours. It highlights available items and gracefully greys out those out of stock — making ordering intuitive for customers and effortless for staff.",
    link: "https://connex-pizza.netlify.app/",
  },
  {
    title: "Connex Resell",
    description:
      "A sleek React app where users can list their old goods for resale and interested buyers can browse, connect, and purchase. Whether it’s a vintage guitar or barely-used gadgets, this platform gives second chances to great items — one click at a time!",
    link: "https://connexresell.netlify.app/",
  },
  {
    title: "Movie Ready",
    description:
      "A dynamic React app that lets users rate movies, explore collections, apply filters to discover hidden gems, and build their very own watch later list. Whether you're a rom-com junkie or a sci-fi sleuth, this app helps you navigate the cinematic universe like a true movie buff!",
    link: "#",
  },
  {
    title: "Wait for more to come",
    description:
      "We are constantly working on new projects. Stay tuned for more exciting developments!",
    link: "#",
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
              <h2 className="text-xl font-semibold mb-12">{cert.title}</h2>
              <p className="text-gray-300 mb-12">{cert.description}</p>
              {/*<DemoButton link={cert.link} />*/}
              <a
                className={Styles.projectButton}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Preview</span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
