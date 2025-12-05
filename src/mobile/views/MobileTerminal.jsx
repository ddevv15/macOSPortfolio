import { Check } from "lucide-react";
import { techStack } from "@constants";

const MobileTerminal = () => {
  return (
    <div id="mobile-terminal">
      <div id="mobile-terminal-header">
        <p className="mobile-terminal-prompt">
          <span className="mobile-terminal-user">@DEV_SHAH</span> show tech stack
        </p>
      </div>

      <div id="mobile-terminal-content">
        {techStack.map(({ category, items }) => (
          <div key={category} id={`mobile-stack-${category}`} className="mobile-stack-category">
            <div className="mobile-stack-header">
              <Check className="mobile-stack-check" size={18} />
              <h3 className="mobile-stack-title">{category}</h3>
            </div>
            <div className="mobile-stack-items">
              {items.map((item, i) => (
                <span key={i} className="mobile-stack-item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div id="mobile-terminal-footer">
        <p>
          <Check size={16} /> {techStack.length} of {techStack.length} stacks loaded (100%)
        </p>
      </div>
    </div>
  );
};

export default MobileTerminal;

