import PageNav from "../components/PageNav";
import ParticlesBackground from "../components/ParticlesBackground";

function Homepage() {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Particle Background at the lowest layer */}
      <div style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}>
        <ParticlesBackground style={{ position: "absolute" }} />
      </div>

      {/* Page content above particles */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <PageNav />
        <h1 className="test">My Portfolio</h1>
        <p>Welcome to my portfolio website!</p>
      </div>
    </div>
  );
}

export default Homepage;
