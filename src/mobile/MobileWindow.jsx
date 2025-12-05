import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ChevronLeft } from "lucide-react";
import useMobileStore from "@store/mobile";

const MobileWindow = ({ title, children }) => {
  const { goBack, goHome, history } = useMobileStore();
  const windowRef = useRef(null);
  const animationRef = useRef(null);

  useLayoutEffect(() => {
    const el = windowRef.current;
    if (!el) return;

    // Kill any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Reset initial state and animate in
    gsap.set(el, { x: "100%", opacity: 0 });
    animationRef.current = gsap.to(el, {
      x: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  const handleBack = () => {
    const el = windowRef.current;
    const historyLength = history.length;

    if (!el) {
      historyLength > 0 ? goBack() : goHome();
      return;
    }

    // Kill any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    gsap.to(el, {
      x: "100%",
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        historyLength > 0 ? goBack() : goHome();
      },
    });
  };

  return (
    <div id="mobile-window" ref={windowRef}>
      {/* Window Header */}
      <div id="mobile-window-header">
        <button
          id="mobile-back-button"
          onClick={handleBack}
          className="mobile-header-btn"
        >
          <ChevronLeft size={24} />
          <span>Back</span>
        </button>
        <h2 id="mobile-window-title">{title}</h2>
        <div id="mobile-header-spacer" />
      </div>

      {/* Window Content */}
      <div id="mobile-window-content">{children}</div>
    </div>
  );
};

export default MobileWindow;

