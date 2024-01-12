import { atom } from "recoil";

export const currentActiveSectionState = atom({
  key: "currentActiveSectionState",
  default: "Home",
});

export const timeOfLastClickState = atom({
  key: "timeOfLastClickState",
  default: Date.now(),
});

export const themeState = atom({
  key: "themeState",
  default: "light",
});
