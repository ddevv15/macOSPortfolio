import dayjs from "dayjs";
import HomeScreen from "./HomeScreen";
import MobileWindow from "./MobileWindow";
import useMobileStore from "@store/mobile";
import {
  MobileFinder,
  MobileSafari,
  MobilePhotos,
  MobileContact,
  MobileTerminal,
  MobileResume,
  MobileText,
  MobileImage,
} from "./views";

const viewComponents = {
  finder: MobileFinder,
  safari: MobileSafari,
  photos: MobilePhotos,
  contact: MobileContact,
  terminal: MobileTerminal,
  resume: MobileResume,
  txtfile: MobileText,
  imgfile: MobileImage,
};

const viewTitles = {
  finder: "Portfolio",
  safari: "Articles",
  photos: "Gallery",
  contact: "Contact",
  terminal: "Skills",
  resume: "Resume",
  txtfile: "Text File",
  imgfile: "Image",
};

const MobileApp = () => {
  const { currentView, viewData } = useMobileStore();
  const ViewComponent = currentView ? viewComponents[currentView] : null;

  return (
    <div id="mobile-app">
      {/* iOS Status Bar */}
      <div id="mobile-status-bar">
        <span id="mobile-time">{dayjs().format("h:mm")}</span>
        <div id="mobile-status-icons">
          <svg
            id="mobile-signal"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M2 17h2v4H2v-4zm4-3h2v7H6v-7zm4-3h2v10h-2V11zm4-3h2v13h-2V8zm4-3h2v16h-2V5z" />
          </svg>
          <svg
            id="mobile-wifi"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M12 18c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0-4c2.2 0 4 1.8 4 4h-2c0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.2 1.8-4 4-4zm0-4c3.3 0 6 2.7 6 6h-2c0-2.2-1.8-4-4-4s-4 1.8-4 4H6c0-3.3 2.7-6 6-6zm0-4c4.4 0 8 3.6 8 8h-2c0-3.3-2.7-6-6-6s-6 2.7-6 6H4c0-4.4 3.6-8 8-8z" />
          </svg>
          <svg
            id="mobile-battery"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-4"
          >
            <path d="M17 4h-3V2h-4v2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H7V6h10v14z" />
            <path d="M9 8h6v10H9z" opacity="0.8" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div id="mobile-content">
        {currentView && ViewComponent ? (
          <MobileWindow key={currentView} title={viewTitles[currentView] || currentView}>
            <ViewComponent data={viewData} />
          </MobileWindow>
        ) : (
          <HomeScreen key="home" />
        )}
      </div>

      {/* Home Indicator */}
      <div id="mobile-home-indicator">
        <div id="mobile-home-bar" />
      </div>
    </div>
  );
};

export default MobileApp;

