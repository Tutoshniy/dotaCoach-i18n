//import messagesEn from "../../../submodules/dotaCoach-i18n/app/desktop/en";
import notificationsEn from "../../../submodules/dotaCoach-i18n/app/desktop/notifications/en";
import settingsBr from "../../../submodules/dotaCoach-i18n/app/desktop/settings/br";
import settingsDe from "../../../submodules/dotaCoach-i18n/app/desktop/settings/de";
import settingsEn from "../../../submodules/dotaCoach-i18n/app/desktop/settings/en";
import settingsEs from "../../../submodules/dotaCoach-i18n/app/desktop/settings/es";
import settingsFil from "../../../submodules/dotaCoach-i18n/app/desktop/settings/fil";
import settingsFr from "../../../submodules/dotaCoach-i18n/app/desktop/settings/fr";
import settingsId from "../../../submodules/dotaCoach-i18n/app/desktop/settings/id";
import settingsRu from "../../../submodules/dotaCoach-i18n/app/desktop/settings/ru";
import settingsZh from "../../../submodules/dotaCoach-i18n/app/desktop/settings/zh";
import genericBr from "../../../submodules/dotaCoach-i18n/app/generic/br";
import genericDe from "../../../submodules/dotaCoach-i18n/app/generic/de";
import genericEn from "../../../submodules/dotaCoach-i18n/app/generic/en";
import genericEs from "../../../submodules/dotaCoach-i18n/app/generic/es";
import genericFil from "../../../submodules/dotaCoach-i18n/app/generic/fil";
import genericFr from "../../../submodules/dotaCoach-i18n/app/generic/fr";
import genericId from "../../../submodules/dotaCoach-i18n/app/generic/id";
import genericRu from "../../../submodules/dotaCoach-i18n/app/generic/ru";
import genericZh from "../../../submodules/dotaCoach-i18n/app/generic/zh";

const langBr = { ...settingsBr, ...genericBr };
const langDe = { ...settingsDe, ...genericDe };
const langEn = {
  //...messagesEn,
  ...notificationsEn,
  ...settingsEn,
  ...genericEn,
};
const langEs = { ...settingsEs, ...genericEs };
const langFil = { ...settingsFil, ...genericFil };
const langFr = { ...settingsFr, ...genericFr };
const langId = { ...settingsId, ...genericId };
const langRu = { ...settingsRu, ...genericRu };
const langZh = { ...settingsZh, ...genericZh };
const messages = {
  br: langBr,
  de: langDe,
  en: langEn,
  es: langEs,
  fil: langFil,
  fr: langFr,
  id: langId,
  ru: langRu,
  zh: langZh,
};

//console.log(`langEn = ${JSON.stringify(langEn, null, 2)}`);

export default messages;
