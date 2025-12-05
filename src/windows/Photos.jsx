import { Mail, Search } from "lucide-react";
import WindowWrapper from "@hoc/WindowWrapper";
import WindowControls from "@components/WindowControls";
import useWindowStore from "@store/window";
import { gallery, photosLinks } from "@constants";

const Photos = () => {
  const { openWindow } = useWindowStore();

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <div
          id="photos-header-icons"
          className="w-full flex justify-end items-center gap-3 text-gray-500"
        >
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div id="photos-content" className="flex w-full h-full">
        <div id="photos-sidebar" className="sidebar">
          <h2>Photos</h2>

          <ul id="photos-nav-list">
            {photosLinks.map(({ id, icon, title }) => (
              <li key={id} id={`photos-nav-item-${id}`}>
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div id="photos-gallery" className="gallery">
          <ul id="photos-gallery-grid">
            {gallery.map(({ id, img }) => (
              <li
                key={id}
                id={`photos-gallery-item-${id}`}
                className="cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() =>
                  openWindow("imgfile", {
                    id,
                    name: `Gallery image ${id}`,
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    imageUrl: img,
                  })
                }
              >
                <img src={img} alt={`Gallery image ${id}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
export default PhotosWindow;
