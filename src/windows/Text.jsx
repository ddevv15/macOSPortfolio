import WindowWrapper from "@hoc/WindowWrapper";
import WindowControls from "@components/WindowControls";
import useWindowStore from "@store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data;

  if (!data) return null;

  return (
    <>
      <div id="window-header" className="window-header">
        <WindowControls target="txtfile" />
        <h2 id="txtfile-title">{data.name}</h2>
      </div>

      <div
        id="txtfile-content"
        className="bg-white p-6 overflow-y-auto max-h-[400px]"
      >
        {data.image && (
          <div
            id="txtfile-image-container"
            className="mb-4 flex justify-center"
          >
            <img
              id="txtfile-image"
              src={data.image}
              alt={data.name}
              className="w-32 h-32 object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        {data.subtitle && (
          <h3
            id="txtfile-subtitle"
            className="text-lg font-semibold text-gray-800 mb-4 text-center"
          >
            {data.subtitle}
          </h3>
        )}

        <div id="txtfile-description" className="space-y-3">
          {data.description?.map((paragraph, index) => (
            <p
              key={index}
              id={`txtfile-paragraph-${index}`}
              className="text-sm text-gray-600 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
