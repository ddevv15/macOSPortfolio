import { socials } from "@constants";

const MobileContact = () => {
  return (
    <div id="mobile-contact">
      <div id="mobile-contact-header">
        <img
          id="mobile-contact-avatar"
          src="/images/adrian.jpg"
          alt="Profile"
        />
        <h2 id="mobile-contact-title">Let's Connect</h2>
        <p id="mobile-contact-subtitle">Got an idea or want to collaborate?</p>
      </div>

      <div id="mobile-contact-socials">
        {socials.map(({ id, bg, link, icon, text }) => (
          <a
            key={id}
            id={`mobile-social-${id}`}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-social-link"
            style={{ backgroundColor: bg }}
          >
            <img src={icon} alt={text} className="mobile-social-icon" />
            <span className="mobile-social-text">{text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileContact;

