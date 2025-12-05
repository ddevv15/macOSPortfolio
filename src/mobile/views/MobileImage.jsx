const MobileImage = ({ data }) => {
  if (!data) return null;

  return (
    <div id="mobile-image">
      <div id="mobile-image-container">
        <img
          id="mobile-image-preview"
          src={data.imageUrl}
          alt={data.name}
        />
      </div>
      <p id="mobile-image-name">{data.name}</p>
    </div>
  );
};

export default MobileImage;

