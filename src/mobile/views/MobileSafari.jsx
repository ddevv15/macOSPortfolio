import { MoveRight } from "lucide-react";
import { blogPosts } from "@constants";

const MobileSafari = () => {
  return (
    <div id="mobile-safari">
      <div id="mobile-safari-header">
        <h2>My Developer Blog</h2>
        <p>Latest articles and tutorials</p>
      </div>

      <div id="mobile-safari-posts">
        {blogPosts.map(({ id, image, title, date, link }) => (
          <article key={id} id={`mobile-blog-post-${id}`} className="mobile-blog-post">
            <div className="mobile-blog-image">
              <img src={image} alt={title} />
            </div>
            <div className="mobile-blog-content">
              <span className="mobile-blog-date">{date}</span>
              <h3 className="mobile-blog-title">{title}</h3>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-blog-link"
              >
                Read More <MoveRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default MobileSafari;

