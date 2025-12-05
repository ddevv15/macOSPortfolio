import { Navbar, Welcome, Dock, Home } from "@components";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
gsap.registerPlugin(Draggable);
import {
  Terminal,
  Safari,
  Resume,
  Finder,
  Text,
  Image,
  Contact,
  Photos,
} from "@windows";
import { MobileApp } from "@mobile";
import useIsMobile from "@hooks/useIsMobile";

const App = () => {
  const isMobile = useIsMobile();

  // Mobile: iOS-style interface
  if (isMobile) {
    return (
      <main>
        <MobileApp />
      </main>
    );
  }

  // Desktop: macOS-style interface
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
      <Home />
    </main>
  );
};

export default App;
