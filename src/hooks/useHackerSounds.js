import { useCallback, useEffect } from "react";
import hackerSounds from "../utils/hackerSounds";

export const useHackerSounds = () => {
  // Add interaction listeners
  const addInteractionListeners = useCallback(() => {
    // Click sounds for all interactive elements
    const clickElements = document.querySelectorAll(
      'button, a[href], [role="button"]'
    );
    clickElements.forEach((element) => {
      // Remove existing listeners to avoid duplicates
      element.removeEventListener("click", handleClick);
      element.removeEventListener("mouseenter", handleHover);

      element.addEventListener("click", handleClick);
      element.addEventListener("mouseenter", handleHover);
    });

    // Special handling for buttons
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.removeEventListener("click", handleButtonClick);
      button.addEventListener("click", handleButtonClick);
    });

    // Input typing sounds
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.removeEventListener("input", handleTyping);
      input.addEventListener("input", handleTyping);
    });
  }, []);

  const handleClick = () => {
    hackerSounds.playClick();
  };

  const handleHover = () => {
    hackerSounds.playHover();
  };

  const handleButtonClick = () => {
    hackerSounds.playAccessGranted();
  };

  const handleTyping = () => {
    hackerSounds.playKeyPress();
  };

  // Initialize
  useEffect(() => {
    // Play boot sound on load
    setTimeout(() => {
      hackerSounds.playSystemBoot();
    }, 500);

    // Resume audio on first interaction
    const resumeAudio = () => {
      hackerSounds.resume();
    };

    document.addEventListener("click", resumeAudio, { once: true });
    document.addEventListener("keydown", resumeAudio, { once: true });

    // Add interaction listeners
    addInteractionListeners();

    // Watch for DOM changes to add listeners to new elements
    const observer = new MutationObserver(() => {
      addInteractionListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [addInteractionListeners]);

  return {
    playClick: () => hackerSounds.playClick(),
    playHover: () => hackerSounds.playHover(),
    playScanner: () => hackerSounds.playScanner(),
    playKeyPress: () => hackerSounds.playKeyPress(),
    playDataProcess: () => hackerSounds.playDataProcess(),
    playMatrixRain: () => hackerSounds.playMatrixRain(),
    playSystemBoot: () => hackerSounds.playSystemBoot(),
    playAccessGranted: () => hackerSounds.playAccessGranted(),
    playGlitch: () => hackerSounds.playGlitch(),
    toggleSound: () => hackerSounds.toggle(),
    setVolume: (volume) => hackerSounds.setVolume(volume),
  };
};
