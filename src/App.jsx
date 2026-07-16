import {useEffect} from "react";
import "./App.css";
import {ContactMe, NavigationBar, Projects, Skills, Summary, Footer} from "./components";
import Experience from "src/components/experience/Experience";
import OpenSource from "src/components/oss/OpenSource";
import {Toaster} from "react-hot-toast";
// import Testimonials from "components/testimonials/Testimonials";
import {ErrorBoundary} from "react-error-boundary";
import {Routes, Route} from "react-router-dom";
import ProjectsPage from "src/pages/ProjectsPage";
import ContributionsPage from "src/pages/ContributionsPage";

const App = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  }, []);

  function fallbackRender({error, resetErrorBoundary}) {
    return (
      <div role="alert" style={{padding: "2rem", color: "#e6e6e6", fontFamily: "monospace"}}>
        <p style={{color: "#8b8f98"}}>// something went wrong</p>
        <pre style={{color: "#ff6b6b", marginTop: "0.5rem"}}>{error.message}</pre>
      </div>
    );
  }

  return (
    <main className="relative bg-bg-primary min-h-screen">
      {/* Subtle terminal grid background */}
      <div
        className="fixed inset-0 -z-50 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,217,163,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,163,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <ErrorBoundary fallbackRender={fallbackRender}>
        <Routes>
          {/* Main single-page portfolio */}
          <Route
            path="/"
            element={
              <>
                <NavigationBar />
                <div className="pt-16 relative z-10 flex flex-col gap-10">
                  <Summary index={-1} />
                  <Experience index={0} />
                  <Projects index={1} />
                  <OpenSource index={2} />
                  <Skills index={3} />
                  {/* <Testimonials index={4} /> */}
                  <ContactMe index={4} />
                </div>
                <Footer />
              </>
            }
          />
          {/* All projects page */}
          <Route path="/projects" element={<ProjectsPage />} />
          {/* Contributions page */}
          <Route path="/contributions" element={<ContributionsPage />} />
        </Routes>
        <Toaster
          containerStyle={{top: 100}}
          toastOptions={{
            style: {
              background: "#111318",
              color: "#e6e6e6",
              border: "1px solid #262a33",
              borderRadius: "2px",
              fontFamily: "monospace",
            },
          }}
        />
      </ErrorBoundary>
    </main>
  );
};

export default App;
