/**
 * This file contains all the languages supported by Dota Coach.
 *
 * Source for country codes: "https://www.localeplanet.com/icu/"
 *
 * Copyright (C) Dota Coach, 2022
 */
import { Language } from "./i18n";

/**
 * Function to transform locale to language cdoe
 * 
 * Currently used in dotacoach.gg
 * 
 * Source for locales: https://www.localeplanet.com/icu/
 * 
 * @param locale 
 */
export function getLanguage(locale: string): string {
  switch (true) {
    case (locale.startsWith('en')): {
      return "en"
    }
    case (locale.startsWith('de')): {
      return "de"
    }
    case (locale.startsWith('fr')): {
      return "fr"
    }
    case (locale.startsWith('ru')): {
      return "ru"
    }
    case (locale.startsWith('id')): {
      return "id"
    }
    case (locale.startsWith('fil')): {
      return "fil"
    }
    case (locale.startsWith('zh')): {
      return "zh"
    }
    case (locale.startsWith('br')): {
      return "br"
    }
    case (locale.startsWith('es')): {
      return "es"
    }
    default:
      return "en"
  }
}

/**
 * Converts Dota Coach language code into parameter for dota2.com
 * 
 * @param language E.g. en, de, etc.
 * @returns e.g., l=german
 */
export function getDota2DotComLocale(language?: string): string {
  if (language != undefined) {
    for (const l of Languages) {
      if (l.code == language && l["dota2.com"] != undefined) {
        return `l=${l["dota2.com"]}`
      }
    }
  }
  return `l=english` // If language is not provided dota2.com, then use english
}

export const Languages: Language[] = [
  {
    code: "en",
    name: "English",
    "dota2.com": "english",
    pollyConfig: {
      LanguageCode: "en-US",
      VoiceId: "Joanna",
      Engine: "neural",
    },
  },
  {
    code: "de",
    name: "Deutsch",
    "dota2.com": "german",
    pollyConfig: {
      LanguageCode: "de-DE",
      VoiceId: "Vicki",
      Engine: "neural",
    },
  },
  {
    code: "fr",
    name: "Français",
    "dota2.com": "french",
    pollyConfig: {
      LanguageCode: "fr-FR",
      VoiceId: "Lea",
      Engine: "neural",
    },
  },
  {
    code: "ru",
    name: "Русский",
    "dota2.com": "russian",
    pollyConfig: {
      LanguageCode: "ru-RU",
      VoiceId: "Tatyana",
      Engine: "standard",
    },
  },
  {
    code: "id", "dota2.com": undefined, // language is not offered on dota2.com
    pollyConfig: undefined, name: "Indonesia"
  },
  {
    code: "fil", "dota2.com": undefined, // language is not offered on dota2.com
    pollyConfig: undefined, name: "Filipino"
  },
  {
    code: "zh",
    name: "中文",
    "dota2.com": "schinese", // simplified chinese
    pollyConfig: {
      LanguageCode: "cmn-CN",
      VoiceId: "Zhiyu",
      Engine: "standard",
    },
  },
  {
    code: "br",
    name: "Português - Brasil",
    "dota2.com": "portuguese",
    pollyConfig: {
      LanguageCode: "pt-BR",
      VoiceId: "Camila",
      Engine: "neural",
    },
  },
  {
    code: "es",
    name: "Español",
    "dota2.com": "spanish",
    pollyConfig: {
      LanguageCode: "es-ES",
      VoiceId: "Lucia",
      Engine: "neural",
    },
  },
];
