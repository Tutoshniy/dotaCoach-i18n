//import messagesEn from "../../../submodules/dotaCoach-i18n/app/desktop/en";
import notificationsBr from "../../../submodules/dotaCoach-i18n/app/desktop/notifications/br";
import notificationsDe from "../../../submodules/dotaCoach-i18n/app/desktop/notifications/de";
import notificationsEn from "../../../submodules/dotaCoach-i18n/app/desktop/notifications/en";
import notificationsEs from "../../../submodules/dotaCoach-i18n/app/desktop/notifications/es";
import notificationsFil from "../../../submodules/dotaCoach-i18n/app/desktop/notifications/fil";
import notificationsFr from "../../../submodules/dotaCoach-i18n/app/desktop/notifications/fr";
import notificationsId from "../../../submodules/dotaCoach-i18n/app/desktop/notifications/id";
import notificationsRu from "../../../submodules/dotaCoach-i18n/app/desktop/notifications/ru";
import notificationsZh from "../../../submodules/dotaCoach-i18n/app/desktop/notifications/zh";
import matchAnaylticsEn from "../../../submodules/dotaCoach-i18n/app/desktop/matchAnalytics/en";
import bugReportEn from "../../../submodules/dotaCoach-i18n/app/desktop/bugReport/en";
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

const langBr = { ...notificationsBr, ...settingsBr, ...genericBr };
const langDe = { ...notificationsDe, ...settingsDe, ...genericDe };
const langEn = {
  //...messagesEn,
  ...notificationsEn,
  ...matchAnaylticsEn,
  ...bugReportEn,
  ...settingsEn,
  ...genericEn,
};
const langEs = { ...notificationsEs, ...settingsEs, ...genericEs };
const langFil = { ...notificationsFil, ...settingsFil, ...genericFil };
const langFr = { ...notificationsFr, ...settingsFr, ...genericFr };
const langId = { ...notificationsId, ...settingsId, ...genericId };
const langRu = { ...notificationsRu, ...settingsRu, ...genericRu };
const langZh = { ...notificationsZh, ...settingsZh, ...genericZh };
const messages = {
  br: { ...langEn, ...langBr },
  de: { ...langEn, ...langDe },
  en: { ...langEn, ...langEn },
  es: { ...langEn, ...langEs },
  fil: { ...langEn, ...langFil },
  fr: { ...langEn, ...langFr },
  id: { ...langEn, ...langId },
  ru: { ...langEn, ...langRu },
  zh: { ...langEn, ...langZh },
};

//console.log(`langEn = ${JSON.stringify(langEn, null, 2)}`);

export default messages;
