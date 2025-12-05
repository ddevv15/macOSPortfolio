import { useState } from "react";
import { ChevronRight, Folder, FileText, Image, Globe } from "lucide-react";
import { locations } from "@constants";
import useMobileStore from "@store/mobile";

const fileTypeIcons = {
  txt: FileText,
  img: Image,
  pdf: FileText,
  url: Globe,
  fig: Globe,
  folder: Folder,
};

const MobileFinder = ({ data }) => {
  const { openView } = useMobileStore();
  const [activeLocation, setActiveLocation] = useState(data || locations.work);

  const handleItemClick = (item) => {
    if (item.kind === "folder") {
      setActiveLocation(item);
      return;
    }

    if (item.fileType === "pdf") {
      // Pass activeLocation as historyData to preserve folder context
      openView("resume", null, activeLocation);
      return;
    }

    if (["fig", "url"].includes(item.fileType) && item.href) {
      window.open(item.href, "_blank");
      return;
    }

    // Open text or image files, passing activeLocation as historyData
    openView(`${item.fileType}file`, item, activeLocation);
  };

  const handleLocationChange = (location) => {
    setActiveLocation(location);
  };

  return (
    <div id="mobile-finder">
      {/* Location Tabs */}
      <div id="mobile-finder-tabs">
        {Object.values(locations).map((loc) => (
          <button
            key={loc.id}
            id={`mobile-finder-tab-${loc.id}`}
            className={`mobile-finder-tab ${
              activeLocation.id === loc.id ? "active" : ""
            }`}
            onClick={() => handleLocationChange(loc)}
          >
            <img src={loc.icon} alt={loc.name} className="w-4 h-4" />
            <span>{loc.name}</span>
          </button>
        ))}
      </div>

      {/* Current Location Title */}
      <div id="mobile-finder-header">
        <h3>{activeLocation.name}</h3>
      </div>

      {/* File List */}
      <ul id="mobile-finder-list">
        {activeLocation.children?.map((item) => {
          const IconComponent =
            fileTypeIcons[item.fileType] ||
            fileTypeIcons[item.kind] ||
            FileText;
          return (
            <li
              key={item.id}
              id={`mobile-finder-item-${item.id}`}
              className="mobile-finder-item"
              onClick={() => handleItemClick(item)}
            >
              <div className="mobile-finder-item-icon">
                <img src={item.icon} alt={item.name} />
              </div>
              <div className="mobile-finder-item-info">
                <p className="mobile-finder-item-name">{item.name}</p>
                <p className="mobile-finder-item-type">
                  {item.kind === "folder"
                    ? "Folder"
                    : item.fileType?.toUpperCase() || "File"}
                </p>
              </div>
              <ChevronRight className="mobile-finder-item-arrow" size={20} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileFinder;
