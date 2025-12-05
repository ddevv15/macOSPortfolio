const MobileText = ({ data }) => {
  if (!data) return null;

  return (
    <div id="mobile-text">
      {data.image && (
        <div id="mobile-text-image">
          <img src={data.image} alt={data.name} />
        </div>
      )}

      {data.subtitle && (
        <h3 id="mobile-text-subtitle">{data.subtitle}</h3>
      )}

      <div id="mobile-text-content">
        {data.description?.map((paragraph, index) => (
          <p key={index} id={`mobile-text-paragraph-${index}`}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MobileText;

