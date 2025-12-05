import { gallery } from "@constants";
import useMobileStore from "@store/mobile";

const MobilePhotos = () => {
  const { openView } = useMobileStore();

  const handleImageClick = (item) => {
    openView("imgfile", {
      id: item.id,
      name: `Gallery image ${item.id}`,
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      imageUrl: item.img,
    });
  };

  return (
    <div id="mobile-photos">
      <div id="mobile-photos-header">
        <h2>Gallery</h2>
        <p>{gallery.length} Photos</p>
      </div>

      <div id="mobile-photos-grid">
        {gallery.map((item) => (
          <button
            key={item.id}
            id={`mobile-photo-${item.id}`}
            className="mobile-photo-item"
            onClick={() => handleImageClick(item)}
          >
            <img src={item.img} alt={`Gallery image ${item.id}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobilePhotos;

