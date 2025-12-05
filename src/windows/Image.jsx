import WindowWrapper from "@hoc/WindowWrapper";
import WindowControls from "@components/WindowControls";
import useWindowStore from "@store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{data.name}</h2>
      </div>

      <div
        id="imgfile-content"
        className="bg-white p-4 flex items-center justify-center overflow-auto"
      >
        <img
          id="imgfile-image"
          src={data.imageUrl}
          alt={data.name}
          className="max-w-full max-h-[400px] object-contain rounded shadow-lg"
        />
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
