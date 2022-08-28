import inGameBr from "./inGame/br";
import inGameDe from "./inGame/de";
import inGameEn from "./inGame/en";
import inGameEs from "./inGame/es";
import inGameFil from "./inGame/fil";
import inGameFr from "./inGame/fr";
import inGameId from "./inGame/id";
import inGameRu from "./inGame/ru";
import inGameZh from "./inGame/zh";
import genericBr from "./generic/br";
import genericDe from "./generic/de";
import genericEn from "./generic/en";
import genericEs from "./generic/es";
import genericFil from "./generic/fil";
import genericFr from "./generic/fr";
import genericId from "./generic/id";
import genericRu from "./generic/ru";
import genericZh from "./generic/zh";

const langBr = { ...inGameBr, ...genericBr };
const langDe = { ...inGameDe, ...genericDe };
const langEn = {
  ...inGameEn,
  ...genericEn,
};
const langEs = { ...inGameEs, ...genericEs };
const langFil = { ...inGameFil, ...genericFil };
const langFr = { ...inGameFr, ...genericFr };
const langId = { ...inGameId, ...genericId };
const langRu = { ...inGameRu, ...genericRu };
const langZh = { ...inGameZh, ...genericZh };

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

export default messages;
