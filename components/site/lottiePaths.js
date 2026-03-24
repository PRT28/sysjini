export const LOTTIE_PATHS = {
  home: "/models/Artificial intelligence digital technology.json",
  station: "/models/Technology Network-dark.json",
  earth: "/models/Technology Network.json",
  commerce: "/models/Isometric data analysis.json",
  infrastructure: "/models/Backend Icon.json",
  intelligence: "/models/AI animation.json",
  contact: "/models/Programming.json",
  default: "/models/Technology.json",
  hero: "/models/ai animation Flow 1.json",
  contactus: "/models/Call Center Support Lottie Animation.json"
};

export function getLottiePath(key = "default") {
  return LOTTIE_PATHS[key] || LOTTIE_PATHS.default;
}
