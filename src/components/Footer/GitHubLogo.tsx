import GitHubLightLogo from "../../../public/logos/github_light.png";
import GitHubDarkLogo from "../../../public/logos/github_dark.png";
import { useSyncExternalStore } from "react";

export default function GitHubLogo() {
  const isLightMode = useSyncExternalStore(
    (onStoreChange) => {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const observer = new MutationObserver(onStoreChange);

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
      mediaQuery.addEventListener("change", onStoreChange);

      return () => {
        observer.disconnect();
        mediaQuery.removeEventListener("change", onStoreChange);
      };
    },
    () => document.documentElement.classList.contains("dark")
  );

  return (
    <img
      alt="GitHub"
      src={!isLightMode ? GitHubDarkLogo.src : GitHubLightLogo.src}
      width="16px"
      height="16px"
    />
  );
}
