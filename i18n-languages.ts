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


export const Languages: Language[] = [
  {
    code: "en",
    name: "English",
    pollyConfig: {
      LanguageCode: "en-US",
      VoiceId: "Joanna",
      Engine: "neural",
    },
  },
  {
    code: "de",
    name: "Deutsch",
    pollyConfig: {
      LanguageCode: "de-DE",
      VoiceId: "Vicki",
      Engine: "neural",
    },
  },
  {
    code: "fr",
    name: "Français",
    pollyConfig: {
      LanguageCode: "fr-FR",
      VoiceId: "Lea",
      Engine: "neural",
    },
  },
  {
    code: "ru",
    name: "Русский",
    pollyConfig: {
      LanguageCode: "ru-RU",
      VoiceId: "Tatyana",
      Engine: "standard",
    },
  },
  { code: "id", pollyConfig: undefined, name: "Indonesia" },
  { code: "fil", pollyConfig: undefined, name: "Filipino" },
  {
    code: "zh",
    name: "中文",
    pollyConfig: {
      LanguageCode: "cmn-CN",
      VoiceId: "Zhiyu",
      Engine: "standard",
    },
  },
  {
    code: "br",
    name: "Português - Brasil",
    pollyConfig: {
      LanguageCode: "pt-BR",
      VoiceId: "Camila",
      Engine: "neural",
    },
  },
  {
    code: "es",
    name: "Español",
    pollyConfig: {
      LanguageCode: "es-ES",
      VoiceId: "Lucia",
      Engine: "neural",
    },
  },
];
