//import messagesEn from "./desktop/en";
import notificationsBr from "./desktop/notifications/br";
import notificationsDe from "./desktop/notifications/de";
import notificationsEn from "./desktop/notifications/en";
import notificationsEs from "./desktop/notifications/es";
import notificationsFil from "./desktop/notifications/fil";
import notificationsFr from "./desktop/notifications/fr";
import notificationsId from "./desktop/notifications/id";
import notificationsRu from "./desktop/notifications/ru";
import notificationsZh from "./desktop/notifications/zh";
import matchAnaylticsBr from "./desktop/matchAnalytics/br";
import matchAnaylticsDe from "./desktop/matchAnalytics/de";
import matchAnaylticsEn from "./desktop/matchAnalytics/en";
import matchAnaylticsEs from "./desktop/matchAnalytics/es";
import matchAnaylticsFil from "./desktop/matchAnalytics/fil";
import matchAnaylticsFr from "./desktop/matchAnalytics/fr";
import matchAnaylticsId from "./desktop/matchAnalytics/id";
import matchAnaylticsRu from "./desktop/matchAnalytics/ru";
import matchAnaylticsZh from "./desktop/matchAnalytics/zh";
import bugReportBr from "./desktop/bugReport/br";
import bugReportDe from "./desktop/bugReport/de";
import bugReportEn from "./desktop/bugReport/en";
import bugReportEs from "./desktop/bugReport/es";
import bugReportFil from "./desktop/bugReport/fil";
import bugReportFr from "./desktop/bugReport/fr";
import bugReportId from "./desktop/bugReport/id";
import bugReportRu from "./desktop/bugReport/ru";
import bugReportZh from "./desktop/bugReport/zh";
import settingsBr from "./desktop/settings/br";
import settingsDe from "./desktop/settings/de";
import settingsEn from "./desktop/settings/en";
import settingsEs from "./desktop/settings/es";
import settingsFil from "./desktop/settings/fil";
import settingsFr from "./desktop/settings/fr";
import settingsId from "./desktop/settings/id";
import settingsRu from "./desktop/settings/ru";
import settingsZh from "./desktop/settings/zh";
import genericBr from "./generic/br";
import genericDe from "./generic/de";
import genericEn from "./generic/en";
import genericEs from "./generic/es";
import genericFil from "./generic/fil";
import genericFr from "./generic/fr";
import genericId from "./generic/id";
import genericRu from "./generic/ru";
import genericZh from "./generic/zh";

const langBr = {
  ...notificationsBr,
  ...matchAnaylticsBr,
  ...bugReportBr,
  ...settingsBr,
  ...genericBr,
};
const langDe = {
  ...notificationsDe,
  ...matchAnaylticsDe,
  ...bugReportDe,
  ...settingsDe,
  ...genericDe,
};
const langEn = {
  //...messagesEn,
  ...notificationsEn,
  ...matchAnaylticsEn,
  ...bugReportEn,
  ...settingsEn,
  ...genericEn,
};
const langEs = {
  ...notificationsEs,
  ...matchAnaylticsEs,
  ...bugReportEs,
  ...settingsEs,
  ...genericEs,
};
const langFil = {
  ...notificationsFil,
  ...matchAnaylticsFil,
  ...bugReportFil,
  ...settingsFil,
  ...genericFil,
};
const langFr = {
  ...notificationsFr,
  ...matchAnaylticsFr,
  ...bugReportFr,
  ...settingsFr,
  ...genericFr,
};
const langId = {
  ...notificationsId,
  ...matchAnaylticsId,
  ...bugReportId,
  ...settingsId,
  ...genericId,
};
const langRu = {
  ...notificationsRu,
  ...matchAnaylticsRu,
  ...bugReportRu,
  ...settingsRu,
  ...genericRu,
};
const langZh = {
  ...notificationsZh,
  ...matchAnaylticsZh,
  ...bugReportZh,
  ...settingsZh,
  ...genericZh,
};
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
