import {useEffect} from "react";
import "./App.css";
import {AboutMe, ContactMe, NavigationBar, Projects, Skills, Summary, Footer} from "./components";
import {Toaster} from "react-hot-toast";
import Testimonials from "components/testimonials/Testimonials";
import {ErrorBoundary} from "react-error-boundary";

const App = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  }, []);

  function fallbackRender({error, resetErrorBoundary}) {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.

    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{color: "red"}}>{error.message}</pre>
      </div>
    );
  }

  return (
    <main className="relative">
      {/* Extraordinary animated background */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/5 to-orange-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Subtle grid pattern */}
          {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]"></div> */}

        {/* Moving particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 dark:bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent animate-pulse delay-1000"></div>
        </div>
      </div>

      <ErrorBoundary fallbackRender={fallbackRender}>
        <NavigationBar />
        <div className="pt-16 relative z-10 flex flex-col gap-32">
          <Summary index={-1} />
          <Skills index={0} />
          <AboutMe index={1} />
          <Projects index={2} />
          <Testimonials index={3} />
          <ContactMe index={4} />
        </div>
        <Footer />
        <Toaster containerStyle={{top: 100}} />
      </ErrorBoundary>
    </main>
  );
};

export default App;
