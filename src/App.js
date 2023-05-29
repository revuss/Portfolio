import "./styles.css";
import { useRef, React } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Navele from "./navbar/Navele.js";
import Project from "./Projects/Project";
import Abot from "./About/Abot";
import CForm from "./Contact/CForm";

function App() {
  const containerRef = useRef(null);

  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          smartphone: {
            smooth: true
          }
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <Navele />
          <Abot />
          <Project />
          <CForm />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}
export default App;
