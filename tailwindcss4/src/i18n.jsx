import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  en: {
    translation: {
      dashboard: "Dashboard",
      upload: "Upload",
      economicData: "Economic Data",
      history: "History",
      voiceAssistant: "Voice Assistant",
      aiAssistant: "AI Assistant",
      profile: "Profile",
      settings: "Settings",
      searchPlaceholder: "Search menu...",
    },
  },
  hi: {
    translation: {
      dashboard: "डैशबोर्ड",
      upload: "अपलोड",
      economicData: "आर्थिक डेटा",
      history: "इतिहास",
      voiceAssistant: "वॉइस असिस्टेंट",
      aiAssistant: "एआई असिस्टेंट",
      profile: "प्रोफ़ाइल",
      settings: "सेटिंग्स",
      searchPlaceholder: "मेनू खोजें...",
    },
  },
  bn: {
    translation: {
      dashboard: "ড্যাশবোর্ড",
      upload: "আপলোড",
      economicData: "অর্থনৈতিক তথ্য",
      history: "ইতিহাস",
      voiceAssistant: "ভয়েস সহকারী",
      aiAssistant: "এআই সহকারী",
      profile: "প্রোফাইল",
      settings: "সেটিংস",
      searchPlaceholder: "মেনু অনুসন্ধান করুন...",
    },
  },
  or: {
    translation: {
      dashboard: "ଡ୍ୟାଶବୋର୍ଡ",
      upload: "ଅପଲୋଡ୍",
      economicData: "ଆର୍ଥିକ ତଥ୍ୟ",
      history: "ଇତିହାସ",
      voiceAssistant: "ଭୋଇସ୍ ସହାୟକ",
      aiAssistant: "ଏଆଇ ସହାୟକ",
      profile: "ପ୍ରୋଫାଇଲ୍",
      settings: "ସେଟିଂସ୍",
      searchPlaceholder: "ମେନୁ ଖୋଜନ୍ତୁ...",
    },
  },
};

// Init
i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
