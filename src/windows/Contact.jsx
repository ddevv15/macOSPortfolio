import WindowWrapper from "@hoc/WindowWrapper";
import WindowControls from "@components/WindowControls";
import { socials } from "@constants";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/adrian.jpg"
          alt="Contact"
          className="w-20 rounded-full"
        />

        <h3>lets Connect</h3>
        <p>got an idea or what?</p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
