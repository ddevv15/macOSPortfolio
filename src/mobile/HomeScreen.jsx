import { dockApps } from "@constants";
import useMobileStore from "@store/mobile";

const mobileApps = dockApps.filter((app) => app.canOpen);

const HomeScreen = () => {
  const { openView } = useMobileStore();

  return (
    <div id="mobile-home-screen">
      {/* Welcome Text */}
      <div id="mobile-welcome">
        <p id="mobile-welcome-subtitle">Hey I am Dev Shah</p>
        <h1 id="mobile-welcome-title">A Web Developer</h1>
      </div>

      {/* App Grid */}
      <div id="mobile-app-grid">
        {mobileApps.map((app) => (
          <button
            key={app.id}
            id={`mobile-app-${app.id}`}
            className="mobile-app-icon"
            onClick={() => openView(app.id)}
          >
            <div className="mobile-app-icon-wrapper">
              <img src={`/images/${app.icon}`} alt={app.name} />
            </div>
            <span className="mobile-app-label">{app.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;

