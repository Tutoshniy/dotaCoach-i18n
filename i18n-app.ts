/**
 * This file contains all the logic for the internationalization (i18n) of the Dota Coach app.
 *
 * Instructions for translators:
 *     - Lines with an OK, have already been reviewed by a nativ speaker
 *     - Comments and potential issues are added at the end of each line, after the // signs
 *
 * Instruction for webLinks:
 *     - Add HTML elements with an id set to "webLink"
 *     - Add a field webLinks, containing an array of http(s) links
 *     - Variables can be added optionally, e.g. to write "5 days ago". The corresponding i18n-app would be "$1 days ago"
 *     - "You played agasinst $1 $2 days ago aga $3"
 *      - Function t2(token, var1, var2, var3....)
 *
 * Source for country codes: "https://www.localeplanet.com/icu/"
 *
 * Note: Dota 2 provides the following 4 audio languages: English, Korean, Simplified Chinese and Russian
 *
 * TASK: REMOVE ALL TEXT UNTIL "InGame pick/ban and roles" (ca. line 600)
 *
 */
import { Translations } from "./i18n";

export const AppTranslations: Translations = {
  Dota2: {
    en: "Dota 2",
  },

  // Desktop window
  // 'Notifications' exists already in settings
  MatchAnalytics: {
    en: "Match Analytics",
    de: "Spielanalyse",
    fr: "Analyse des matchs",
    ru: "Аналитика матчей",
    id: "Match Analytics", // #toBeUpdated
    fil: "Itugma ang Analytics", // #toBeUpdated
    zh: "匹配分析", // #toBeUpdated
    br: "Análise de partida",
    es: "Análisis de partidos", // #toBeUpdated
  },

  // Match analytics
  WELCOME_TO_MATCH_ANALYTICS: {
    en: "WELCOME TO MATCH ANALYTICS",
    de: "WILLKOMMEN BEI DER SPIELANALYSE",
    fr: "BIENVENUE DANS L'ANALYSE DES MATCHS",
    ru: "ДОБРО ПОЖАЛОВАТЬ В АНАЛИТИКУ МАТЧА",
    id: "SELAMAT DATANG UNTUK MENCOCOKKAN ANALISIS", // #toBeUpdated
    fil: "MALIGAYANG PAGDATING UPANG TUMUGMA SA ANALYTICS", // #toBeUpdated
    zh: "欢迎使用匹配分析", // #toBeUpdated
    br: "BEM-VINDO À ANÁLISE DE PARTIDA",
    es: "BIENVENIDO A ANÁLISIS DE PARTIDOS", // #toBeUpdated
  },
  MatchAnalyticsIntro: {
    en: "Play a match with Dota Coach to be able to use Match Analytics and to compare your performance with other players.",
    de: "Spiele ein Match mit Dota Coach, um die Spielanalyse nutzen zu können und deine Leistung mit anderen Spielern zu vergleichen.",
    fr: "Jouez un match avec Dota Coach pour pouvoir utiliser l'analyse des matchs et comparer vos performances avec celles des autres joueurs.",
    ru: "Сыграйте матч с Dota Coach, чтобы использовать аналитику матчей и сравнить свои результаты с результатами других игроков.",
    id: "Mainkan pertandingan dengan Dota Coach untuk dapat menggunakan Match Analytics dan membandingkan kinerja Anda dengan pemain lain.", // #toBeUpdated
    fil: "Maglaro ng isang tugma sa Dota Coach upang magamit ang Match Analytics at upang ihambing ang iyong pagganap sa iba pang mga manlalaro.", // #toBeUpdated
    zh: "与Dota Coach进行一场比赛，即可使用比赛分析并比较你与其他牌手的表现。", // #toBeUpdated
    br: "Jogue uma partida com o Dota Coach para poder usar a Análise de Partida e comparar seu desempenho com outros jogadores.",
    es: "Juega un partido con Dota Coach para poder usar Match Analytics y comparar tu rendimiento con el de otros jugadores.", // #toBeUpdated
  },
  SupportedLobbies: {
    en: "Supported lobbies:",
    de: "Unterstützte Lobbys:", // #toBeUpdated
    fr: "Lobbies soutenue :", // #toBeUpdated
    ru: "Поддерживаемые лобби:",
    id: "Lobi yang didukung:", // #toBeUpdated
    fil: "Mga sinusuportahang lobbies:", // #toBeUpdated
    zh: "支持的大厅: ", // #toBeUpdated
    br: "Lobbies apoiados:", // #toBeUpdated
    es: "Lobbies compatibles:", // #toBeUpdated
  },
  SupportedLobbiesList: {
    en: "Ranked and unranked.",
    de: "Ranked and unranked.",
    fr: "Classé et non classé.", // #toBeUpdated
    ru: "Рейтинговые и безрейтинговые",
    id: "Peringkat dan unranking.", // #toBeUpdated
    fil: "Niraranggo at walang ranggo.", // #toBeUpdated
    zh: "排名和未排名。", // #toBeUpdated
    br: "Competitiva e casual.",
    es: "Clasificados y no clasificados.", // #toBeUpdated
  },
  SupportedRankedModes: {
    en: "Supported ranked modes:",
    de: "Unterstützte Ranked Modi:", // #toBeUpdated
    fr: "Modes Ranked soutenus :", // #toBeUpdated
    ru: "Поддерживаемые рейтинговые режимы:",
    id: "Mode peringkat yang didukung:", // #toBeUpdated
    fil: "Sinusuportahang mga mode ng ranggo:", // #toBeUpdated
    zh: "支持的排名模式：", // #toBeUpdated
    br: "Modos competitivos compatíveis:",
    es: "Modos clasificados compatibles:", // #toBeUpdated
  },

  SupportedRankedModesList: {
    en: "All pick, captains mode and random draft.",
    de: "Alle wählen, Kapitänsmodus und zufälliger Entwurf.", // #toBeUpdated
    fr: "Tous les choix, le mode capitaines et le draft aléatoire.", // #toBeUpdated
    ru: "Режим всех пиков, капитанов и случайный драфт.", // #toBeUpdated
    id: "Semua memilih, mode kapten dan draft acak.", // #toBeUpdated
    fil: "Lahat ng pick, captains mode at random draft.", // #toBeUpdated
    zh: "全选、队长模式和随机选秀。", // #toBeUpdated
    br: "Escolha livre, modo de capitães e seleção aleatória.",
    es: "Todas las selecciones, modo capitanes y draft aleatorio.", // #toBeUpdated
  },

  SupportedUnrankedModes: {
    en: "Supported unranked modes:",
    de: "Unterstützte unranked Modi:", // #toBeUpdated
    fr: "Modes unranked pris en charge :", // #toBeUpdated
    ru: "Поддерживаемые безрейтинговые режимы:",
    id: "Mode unranked yang didukung:", // #toBeUpdated
    fil: "Mga suportadong hindi naka-ranggo na mga mode:", // #toBeUpdated
    zh: "支持的未排序模式：", // #toBeUpdated
    br: "Modos casuais compatíveis:",
    es: "Modos no clasificados compatibles:", // #toBeUpdated
  },
  SupportedUnrankedModesList: {
    en: "All pick, turbo, single draft, random draft, all random.",
    de: "Alle Auswahl, Turbo, Einzelentwurf, zufälliger Entwurf, alles zufällig.", // #toBeUpdated
    fr: "Tout pick, turbo, simple draft, draft aléatoire, tout aléatoire.", // #toBeUpdated
    ru: "All pick, turbo, single draft, random draft, all random.",
    id: "Semua pick, turbo, draft tunggal, draft acak, semua acak.", // #toBeUpdated
    fil: "Lahat ng pick, turbo, solong draft, random draft, lahat ng random.", // #toBeUpdated
    zh: "所有选择、turbo、单草稿、随机草稿，都是随机的。", // #toBeUpdated
    br: "Escolha livre, turbo, seleção individual, seleção aleatória e todos aleatórios.",
    es: "Todas las selecciones, turbo, borrador simple, borrador aleatorio, todo aleatorio.", // #toBeUpdated
  },

  MATCH_ANALYTICS: {
    en: "MATCH ANALYTICS",
    de: "SPIELANALYSE",
    fr: "ANALYSE DES MATCHS",
    ru: "АНАЛИТИКА МАТЧЕЙ",
    id: "ANALISIS PERTANDINGAN", // #toBeUpdated
    fil: "TUMUGMA SA ANALYTICS", // #toBeUpdated
    zh: "匹配分析", // #toBeUpdated
    br: "ANÁLISE DE PARTIDA",
    es: "ANÁLISIS DE PARTIDOS", // #toBeUpdated
  },
  You: {
    en: "You",
    de: "Du",
    fr: "Toi",
    ru: "Вы",
    id: "Anda", // #toBeUpdated
    fil: "Ikaw", // #toBeUpdated
    zh: "你", // #toBeUpdated
    br: "Você",
    es: "Tú", // #toBeUpdated
  },
  Benchmark: {
    en: "Benchmark",
    de: "Benchmark",
    fr: "Repère",
    ru: "Контрольный показатель",
    id: "Benchmark", // #toBeUpdated
    fil: "Benchmark", // #toBeUpdated
    zh: "基准", // #toBeUpdated
    br: "Referência",
    es: "Referencia", // #toBeUpdated
  },
  InMatch: {
    en: "In match",
    de: "Im Spiel",
    fr: "En match",
    ru: "В матче",
    id: "Dalam pertandingan", // #toBeUpdated
    fil: "Sa tugma", // #toBeUpdated
    zh: "在比赛中", // #toBeUpdated
    br: "Em partida",
    es: "En partido", // #toBeUpdated
  },
  percentile: {
    en: "percentile",
    de: "Perzentil",
    fr: "percentile",
    ru: "процентиль",
    id: "persentil", // #toBeUpdated
    fil: "percentile", // #toBeUpdated
    zh: "百分位数", // #toBeUpdated
    br: "percentil",
    es: "percentil", // #toBeUpdated
  },
  percentile75: {
    en: "75 percentile",
    de: "75 Perzentil", // #toBeUpdated
    fr: "75 centile", // #toBeUpdated
    ru: "75 процентиль",
    id: "75 persentil", // #toBeUpdated
    fil: "75 porsiyento", // #toBeUpdated
    zh: "75 百分位数", // #toBeUpdated
    br: "percentil 75",
    es: "percentil 75", // #toBeUpdated
  },
  percentile25: {
    en: "25 percentile",
    de: "25 Perzentil", // #toBeUpdated
    fr: "25 centile", // #toBeUpdated
    ru: "25 процентиль",
    id: "25 persentil", // #toBeUpdated
    fil: "25 porsiyento", // #toBeUpdated
    zh: "25百分位数", // #toBeUpdated
    br: "percentil 25",
    es: "percentil 25", // #toBeUpdated
  },
  LaningPhase: {
    en: "Laning phase",
    de: "Laning-Phase", // #toBeUpdated
    fr: "Phase d'atterrissage", // #toBeUpdated
    ru: "Фаза лайнинга",
    id: "fase laning", // #toBeUpdated
    fil: "Laning phase", // #toBeUpdated
    zh: "着陆阶段", // #toBeUpdated
    br: "Fase de trilha",
    es: "Fase de aterrizaje", // #toBeUpdated
  },
  Denies: {
    en: "Denies",
    de: "Denies", // #toBeUpdated
    fr: "Denies", // #toBeUpdated
    ru: "Денаи",
    id: "Menyangkal", // #toBeUpdated
    fil: "Tinanggihan", // #toBeUpdated
    zh: "否认", // #toBeUpdated
    br: "Negados",
    es: "Niega", // #toBeUpdated
  },
  Kills: {
    en: "Kills",
    de: "Kills", // #toBeUpdated
    fr: "Kills", // #toBeUpdated
    ru: "Убийства",
    id: "Membunuh", // #toBeUpdated
    fil: "Kills", // #toBeUpdated
    zh: "击杀", // #toBeUpdated
    br: "Vítimas",
    es: "muertes", // #toBeUpdated
  },
  MidLateGame: {
    en: "Mid & late game",
    de: "Mittleres und spätes Spiel", // #toBeUpdated
    fr: "Mid & late game", // #toBeUpdated
    ru: "Средняя и поздняя игра",
    id: "Pertengahan & akhir permainan", // #toBeUpdated
    fil: "Mid at huli na laro", // #toBeUpdated
    zh: "游戏中后期", // #toBeUpdated
    br: "Mid e late game",
    es: "Juego medio y tardío", // #toBeUpdated
  },
  Deaths: {
    en: "Deaths",
    de: "Tode",
    fr: "Morts",
    ru: "Смерти",
    id: "Kematian", // #toBeUpdated
    fil: "Pagkamatay", // #toBeUpdated
    zh: "死亡", // #toBeUpdated
    br: "Mortes",
    es: "Defunciones", // #toBeUpdated
  },
  GPM: {
    en: "GPM",
    de: "GPM", // #toBeUpdated
    fr: "GAL/MIN", // #toBeUpdated
    ru: "GPM",
    id: "GPM", // #toBeUpdated
    fil: "GPM", // #toBeUpdated
    zh: "GPM", // #toBeUpdated
    br: "OPM",
    es: "GPM", // #toBeUpdated
  },
  XPM: {
    en: "XPM",
    de: "XPM", // #toBeUpdated
    fr: "XPM", // #toBeUpdated
    ru: "XPM",
    id: "XPM", // #toBeUpdated
    fil: "XPM", // #toBeUpdated
    zh: "XPM", // #toBeUpdated
    br: "XPM",
    es: "XPM", // #toBeUpdated
  },
  LargeItems: {
    en: "Large items",
    de: "Große Gegenstände", // #toBeUpdated
    fr: "Articles de grande taille", // #toBeUpdated
    ru: "Ключевые предметы",
    id: "Item besar", // #toBeUpdated
    fil: "Malaking mga item", // #toBeUpdated
    zh: "大件物品", // #toBeUpdated
    br: "Itens grandes",
    es: "Artículos grandes", // #toBeUpdated
  },
  Item: {
    en: "Item",
    de: "Gegenstand", // #toBeUpdated
    fr: "Article", // #toBeUpdated
    ru: "Предмет",
    id: "Butir", // #toBeUpdated
    fil: "Item", // #toBeUpdated
    zh: "物品", // #toBeUpdated
    br: "Item",
    es: "Ítem", // #toBeUpdated
  },
  BenchmarkMedian: {
    en: "Benchmark<br>Median",
    de: "Benchmark<br>Mittelwert", // #toBeUpdated
    fr: "Médiane de<br>référence", // #toBeUpdated
    ru: "Медиана контрольного<br>показателя",
    id: "Acuan<br>Median", // #toBeUpdated
    fil: "Benchmark<br>Median", // #toBeUpdated
    zh: "基准中位数", // #toBeUpdated
    br: "Mediana de<br>referência",
    es: "Mediana de<br>referencia", // #toBeUpdated

    /*en: "Median",
      de: "Median", // #toBeUpdated
      fr: "Médiane", // #toBeUpdated
      ru: "Медиана",
      id: "Median", // #toBeUpdated
      fil: "Median", // #toBeUpdated
      zh: "中位数", // #toBeUpdated
      br: "Mediana", // #toBeUpdated
      es: "Mediana", // #toBeUpdated*/
  },
  Best: {
    en: "Best",
    de: "Am besten",
    fr: "Meilleur",
    ru: "Лучшее",
    id: "Terbaik", // #toBeUpdated
    fil: "Pinakamahusay", // #toBeUpdated
    zh: "最好", // #toBeUpdated
    br: "Melhor",
    es: "Mejor", // #toBeUpdated
  },
  Delta: {
    // 'Delta' compared to benchmark / your results
    en: "Delta",
    de: "Abweichung", // #toBeUpdated
    fr: "Différence", // #toBeUpdated
    ru: "Дельта",
    id: "kuala", // #toBeUpdated
    fil: "Delta", // #toBeUpdated
    zh: "三角洲", // #toBeUpdated
    br: "Delta",
    es: "Delta", // #toBeUpdated
  },
  SelectMatch: {
    en: "Select Match",
    de: "Wähle Spiel",
    fr: "Choisir Jeu",
    ru: "Выберите матч",
    id: "Pilih Cocok", // #toBeUpdated
    fil: "Piliin ang Pagtutugma", // #toBeUpdated
    zh: "选择 “匹配”", // #toBeUpdated
    br: "Selecionar partida",
    es: "Seleccionar partido", // #toBeUpdated
  },
  SelectBenchmark: {
    en: "Select Benchmark",
    de: "Wähle Benchmark",
    fr: "Sélectionnez Benchmark",
    ru: "Выберите контрольный показатель",
    id: "Pilih Tolok Ukur", // #toBeUpdated
    fil: "Piliin ang Benchmark", // #toBeUpdated
    zh: "选择基准", // #toBeUpdated
    br: "Selecionar referência",
    es: "Seleccione Benchmark", // #toBeUpdated
  },
  NoBenchmarkData: {
    en: "Attention: Peer benchmark data is currently not available",
    de: "Achtung: Peer-Benchmark-Daten sind derzeit nicht verfügbar", // #toBeUpdated
    fr: "Attention : Les données de référence des pairs ne sont actuellement pas disponibles", // #toBeUpdated
    ru: "Внимание: данные одноранговых тестов в настоящее время недоступны",
    id: "Perhatian: Data patokan peer saat ini tidak tersedia", // #toBeUpdated
    fil: "Pansin: Kasalukuyang hindi magagamit ang data ng benchmark ng Peer", // #toBeUpdated
    zh: "注意：同行基准测试数据目前不可用", // #toBeUpdated
    br: "Atenção: Os dados de referência de outros não estão disponíveis no momento",
    es: "Atención: los datos de referencia de pares no están disponibles actualmente", // #toBeUpdated
  },
  RetryFetchBenchmark: {
    en: "Try to fetch benchmark data again",
    de: "Verusche Benchmark-Daten erneut abzurufen", // #toBeUpdated
    fr: "Essayez à nouveau de charger les données de référence", // #toBeUpdated
    ru: "Попробуйте обновить контрольные данные",
    id: "Cobalah untuk mengambil data patokan lagi", // #toBeUpdated
    fil: "Subukang kunin muli ang data ng benchmark", // #toBeUpdated
    zh: "尝试再次获取基准数据", // #toBeUpdated
    br: "Tente buscar dados de referência novamente",
    es: "Intente recuperar datos de referencia de nuevo", // #toBeUpdated
  },
  Today: {
    en: "Today",
    de: "Heute",
    fr: "Aujourd'hui",
    ru: "Сегодня",
    id: "Hari ini", // #toBeUpdated
    fil: "Ngayon", // #toBeUpdated
    zh: "今天", // #toBeUpdated
    br: "Hoje",
    es: "Hoy", // #toBeUpdated
  },
  DaysAgo: {
    // used to display "5 days ago" ; '$1' sign represents number of days
    en: "#### days ago",
    de: "Vor #### Tagen", // #toBeUpdated
    fr: "Il y a #### jours", // #toBeUpdated
    ru: "#### дней назад",
    id: "#### hari lalu", // #toBeUpdated
    fil: "#### mga araw na nakalipas", // #toBeUpdated
    zh: "#### 天前", // #toBeUpdated
    br: "há #### dias",
    es: "Hace #### días", // #toBeUpdated
  },
  Peers: {
    en: "Peers",
    de: "Peers", // #toBeUpdated
    fr: "Pairs", // #toBeUpdated
    ru: "Игроки на ранге",
    id: "rekan-rekan", // #toBeUpdated
    fil: "Mga kapantay", // #toBeUpdated
    zh: "同行", // #toBeUpdated
    br: "Outros",
    es: "Pares", // #toBeUpdated
  },
  Match: {
    en: "Match",
    de: "Spiel",
    fr: "Match",
    ru: "Матч",
    id: "Pertandingan", // #toBeUpdated
    fil: "Pareha", // #toBeUpdated
    zh: "匹配", // #toBeUpdated
    br: "Partida",
    es: "Partido", // #toBeUpdated
  },
  Result: {
    en: "Result",
    de: "Ergebnis",
    fr: "Résultat",
    ru: "Результат",
    id: "Hasil", // #toBeUpdated
    fil: "Resulta", // #toBeUpdated
    zh: "结果", // #toBeUpdated
    br: "Resultado",
    es: "Resultado", // #toBeUpdated
  },
  Won: {
    en: "Won",
    de: "Gewonnen",
    fr: "Gagné",
    ru: "Победа",
    id: "Menang", // #toBeUpdated
    fil: "Won", // #toBeUpdated
    zh: "赢了", // #toBeUpdated
    br: "Ganhou",
    es: "Ganó", // #toBeUpdated
  },
  Lost: {
    en: "Lost",
    de: "Verloren", // #toBeUpdated
    fr: "Perdu", // #toBeUpdated
    ru: "Поражение",
    id: "Hilang", // #toBeUpdated
    fil: "Nawala", // #toBeUpdated
    zh: "迷路了", // #toBeUpdated
    br: "Perdeu", // #toBeUpdated
    es: "Perdido", // #toBeUpdated
  },
  Length: {
    en: "Length",
    de: "Dauer",
    fr: "Durée",
    ru: "Длительность",
    id: "Panjangnya", // #toBeUpdated
    fil: "Haba", // #toBeUpdated
    zh: "长度", // #toBeUpdated
    br: "Duração",
    es: "Longitud", // #toBeUpdated
  },
  Mode: {
    en: "Mode",
    de: "Modus", // #toBeUpdated
    fr: "Mode", // #toBeUpdated
    ru: "Режим",
    id: "Modus", // #toBeUpdated
    fil: "Mode", // #toBeUpdated
    zh: "模式", // #toBeUpdated
    br: "Modo",
    es: "Moda", // #toBeUpdated
  },
  ID: {
    // Match ID
    en: "ID",
    de: "ID",
    fr: "ID",
    ru: "ID",
    id: "ID", // #toBeUpdated
    fil: "ID", // #toBeUpdated
    zh: "身份证", // #toBeUpdated
    br: "ID da partida",
    es: "ID", // #toBeUpdated
  },
  OpenDota: {
    // https://www.opendota.com/
    en: "OpenDota",
    de: "OpenDota", // #toBeUpdated
    fr: "OpenDota", // #toBeUpdated
    ru: "OpenDota",
    id: "OpenDota", // #toBeUpdated
    fil: "OpenDota", // #toBeUpdated
    zh: "OpenDota", // #toBeUpdated
    br: "OpenDota",
    es: "OpenDota", // #toBeUpdated
  },
  Hero: {
    en: "Hero",
    de: "Held",
    fr: "Héro",
    ru: "Герой",
    id: "Pahlawan", // #toBeUpdated
    fil: "Hero", // #toBeUpdated
    zh: "英雄", // #toBeUpdated
    br: "Herói",
    es: "Héroe", // #toBeUpdated
  },
  Heroes: {
    en: "Heroes",
    de: "Helden",
    fr: "Héros",
    ru: "Герои", // #toBeUpdated
    id: "Pahlawan", // #toBeUpdated
    fil: "Bayani", // #toBeUpdated
    zh: "英雄", // #toBeUpdated
    br: "Heróis",
    es: "Héroes", // #toBeUpdated
  },
  Steam: {
    en: "Steam",
    de: "Steam", // #toBeUpdated
    fr: "Steam", // #toBeUpdated
    ru: "Steam",
    id: "Steam", // #toBeUpdated
    fil: "Steam", // #toBeUpdated
    zh: "Steam", // #toBeUpdated
    br: "Steam",
    es: "Steam", // #toBeUpdated
  },
  Heropedia: {
    en: "Heropedia",
    de: "Heropedia", // #toBeUpdated
    fr: "Héropedia", // #toBeUpdated
    ru: "Heropedia",
    id: "Heropedia", // #toBeUpdated
    fil: "Heropedia", // #toBeUpdated
    zh: "Heropedia", // #toBeUpdated
    br: "Heroipedia",
    es: "Heropedia", // #toBeUpdated
  },
  Coaching: {
    en: "Coaching",
    de: "Coaching", // #toBeUpdated
    fr: "Coaching", // #toBeUpdated
    ru: "Тренерство",
    id: "Coaching", // #toBeUpdated
    fil: "Pagtuturo", // #toBeUpdated
    zh: "辅导", // #toBeUpdated
    br: "Coaching",
    es: "Coaching", // #toBeUpdated
  },
  GetPersonalCoach: {
    en: "Get personal coach",
    de: "Hole dir einen persönlichen Coach",
    fr: "Obtenez un coach personnel",
    ru: "Получите персонального тренера",
    id: "Dapatkan pelatih pribadi", // #toBeUpdated
    fil: "Kumuha ng personal na coach", // #toBeUpdated
    zh: "找私人教练", // #toBeUpdated
    br: "Obtenha um treinador pessoal",
    es: "Consigue un entrenador personal", // #toBeUpdated
  },
  PARSE_MATCH: {
    en: "PARSE MATCH",
    de: "PARSE SPIEL", // #toBeUpdated
    fr: "MATCH D'ANALYSE", // #toBeUpdated
    ru: "РАЗБОР МАТЧА",
    id: "MENGURAI PERTANDINGAN", // #toBeUpdated
    fil: "I-PARSE ANG TUGMA", // #toBeUpdated
    zh: "解析匹配", // #toBeUpdated
    br: "ANALISAR PARTIDA",
    es: "ANALIZAR COINCIDENCIA", // #toBeUpdated
  },

  // InGame pick/ban and roles
  matches: {
    en: "Matches",
    de: "Spiele",
    fr: "Matchs", // #toBeUpdated
    ru: "Матчи",
    id: "Pertandingan", // #toBeUpdated
    fil: "Mga Tugma", // #toBeUpdated
    zh: "比赛",
    br: "Partidas",
    es: "Partidos", // #toBeUpdated
  },
  myRole: {
    en: "My role",
    de: "Meine<br>Rolle",
    fr: "Mon rôle",
    ru: "Роль",
    id: "Peran saya", // #toBeUpdated
    fil: "Aking tungkulin", // #toBeUpdated
    zh: "分路",
    br: "Minha função",
    es: "Mi función", // #toBeUpdated
  },

  dotaCoachUsers: {
    en: "Players using Dota Coach",
    de: "Spieler die Dota Coach verwenden",
    fr: "Joueurs utilisant Dota Coach", // #toBeUpdated
    ru: "Игроки, использующие Dota Coach",
    id: "Pemain menggunakan Dota Coach", // #toBeUpdated
    fil: "Ang mga manlalaro gamit ang Dota Coach", // #toBeUpdated
    zh: "此玩家正在使用DotaCoach",
    br: "Jogadores usando Dota Coach",
    es: "Jugadores que usan Dota Coach", // #toBeUpdated
  },

  dotaCoachUsersTeam: {
    en: "In your team: ####",
    de: "In deinem Team: ####",
    fr: "Dans votre équipe : ####", // #toBeUpdated
    ru: "В вашей команде: ####",
    id: "Dalam tim Anda: ####", // #toBeUpdated
    fil: "Sa iyong koponan: ####", // #toBeUpdated
    zh: "在你的团队中：####", // #toBeUpdated
    br: "Em sua equipe: ####",
    es: "En tu equipo: ####", // #toBeUpdated
  },

  dotaCoachUsersEnemy: {
    en: "In enemy team: ####",
    de: "Im gegnerischen Team: ####",
    fr: "Dans l'équipe ennemie : ####", // #toBeUpdated
    ru: "Во вражеской команде: ####",
    id: "Dalam tim musuh: ####", // #toBeUpdated
    fil: "Sa koponan ng kaaway: ####", // #toBeUpdated
    zh: "在敌方队伍中：####", // #toBeUpdated
    br: "Na equipe inimiga: ####",
    es: "En el equipo enemigo: ####", // #toBeUpdated
  },

  // 8 cases to show with whom you won and lost
  // Arguments: Player's hero, other user's name, other user's hero, nuber of days [last is not applicable for games played today]
  playedWithWonWithToday: {
    en: `You <span class="txt-green">won</span> as #### with #### as #### today.`,
    de: `Du hast heute als #### mit #### als #### <span class="txt-green">gewonnen</span>.`,
    fr: `Tu as <span class="txt-green">gagné</span> en tant que #### avec #### en tant que #### aujourd'hui.`,
    ru: `Вы <span class="txt-green"> выиграли </span> как #### с #### как #### сегодня.`,
    id: `Anda <span class="txt-green">menang</span> sebagai #### dengan #### sebagai #### hari ini.`, // #toBeUpdated
    fil: `<span class="txt-green">Nanalo</span> ka bilang #### na may #### bilang #### ngayon.`, // #toBeUpdated
    zh: `你今天以 ##### 的比分<span class="txt-green">赢了</span> ####。`, // #toBeUpdated
    br: `Você <span class="txt-green">ganhou</span> como #### com #### como #### hoje.`,
    es: `<span class="txt-green">Ganaste</span> como #### con #### como #### hoy.`, // #toBeUpdated
  },
  playedWithWonWith: {
    en: `You <span class="txt-green">won</span> as #### with #### as #### #### days ago.`,
    de: `Du hast als #### mit #### als #### vor #### Tagen <span class="txt-green">gewonnen</span> .`,
    fr: `Tu as <span class="txt-green">gagné</span> #### avec #### comme #### il y a #### jours.`,
    ru: `<span class="txt-green">Выиграл</span> как #### с #### как #### #### дней назад.`,
    id: `<span class="txt-green">Menang</span> sebagai #### dengan #### #### beberapa hari yang lalu.`, // #toBeUpdated
    fil: `<span class="txt-green">Nanalo</span> bilang #### na may #### bilang #### mga araw na nakalipas.`, // #toBeUpdated
    zh: `几天前以 #### 的身份@@ <span class="txt-green">赢得</span> ##### ####。`, // #toBeUpdated
    br: `<span class="txt-green">Ganhou</span> como #### com #### como #### #### dias atrás.`,
    es: `<span class="txt-green">Ganó</span> como #### con #### como #### #### hace días.`, // #toBeUpdated
  },
  playedWithLostWithToday: {
    en: `<span class="txt-red">Lost</span> as #### with #### as #### today.`,
    de: `Du hast als #### mit #### als #### heute <span class="txt-red">verloren</span>.`,
    fr: `Tu as <span class="txt-red">perdu</span> en tant que #### avec #### en tant que #### aujourd'hui.`,
    ru: `<span class="txt-red">Проиграл </span> как #### с #### как #### сегодня.`,
    id: `<span class="txt-red">Hilang</span> sebagai #### dengan #### sebagai #### hari ini.`, // #toBeUpdated
    fil: `<span class="txt-red">Nawala</span> bilang #### na may #### bilang #### ngayon.`, // #toBeUpdated
    zh: `今天@@ <span class="txt-red">迷失</span>为 ####，#### 作为 ####。`, // #toBeUpdated
    br: `<span class="txt-red">Perdeu</span> como #### com #### como #### hoje.`,
    es: `<span class="txt-red">Perdido</span> como #### con #### como #### hoy.`, // #toBeUpdated
  },
  playedWithLostWith: {
    en: `You <span class="txt-red">lost</span> as #### with #### as #### #### days ago.`,
    de: `Du hast als #### mit #### als #### vor #### Tagen <span class="txt-red">verloren</span>.`,
    fr: `Tu as <span class="txt-red">perdu</span> comme #### avec #### comme #### il y a #### jours.`,
    ru: `<span class="txt-red">Проиграл</span> как #### с #### как #### #### дней назад.`,
    id: `<span class="txt-red">Hilang</span> sebagai ##### dengan #### #### beberapa hari yang lalu.`, // #toBeUpdated
    fil: `<span class="txt-red">Nawala</span> bilang #### na may #### bilang #### mga araw na nakalipas.`, // #toBeUpdated
    zh: `几天前以 ##### 的形式@@<span class="txt-red"> 丢失</span>为 #### ####。`, // #toBeUpdated
    br: `<span class="txt-red">Perdeu</span> como #### com #### como #### #### dias atrás.`,
    es: `<span class="txt-red">Perdido</span> como #### con #### como #### #### hace días.`, // #toBeUpdated
  },
  playedWithWonVsToday: {
    en: `You <span class="txt-green">won</span> as #### vs #### as #### today.`,
    de: `Du hast heute als #### gegen #### als #### <span class="txt-green">gewonnen</span>.`,
    fr: `Tu as <span class="txt-green">gagné</span> en tant que #### contre #### en tant que #### aujourd'hui.`,
    ru: `Сегодня вы <span class="txt-green">выиграли</span> как #### против #### как ####.`, // #toBeUpdated
    id: `Anda <span class="txt-green">menang</span> sebagai #### vs #### sebagai #### hari ini.`, // #toBeUpdated
    fil: `<span class="txt-green">Nanalo</span> ka bilang #### vs #### bilang #### ngayon.`, // #toBeUpdated
    zh: `你今天以 #### vs ##### 的比分<span class="txt-green">赢</span>了 ####。`, // #toBeUpdated
    br: `Você <span class="txt-green">ganhou</span> como #### vs #### como #### hoje.`,
    es: `Hoy <span class="txt-green">ganaste</span> como #### contra #### como ####.`, // #toBeUpdated
  },
  playedWithWonVs: {
    en: `You <span class="txt-green">won</span> as #### vs #### as #### #### days ago.`,
    de: `Du hast als #### gegen #### als #### vor #### Tagen <span class="txt-green">gewonnen</span>.`,
    fr: `Tu as <span class="txt-green">gagné</span> comme #### contre #### comme #### il y a #### jours.`,
    ru: `<span class="txt-green">Выиграл</span> как #### против #### как #### #### дней назад.`,
    id: `<span class="txt-green">Menang</span> sebagai ##### vs #### #### beberapa hari yang lalu.`, // #toBeUpdated
    fil: `<span class="txt-green">Nanalo</span> bilang #### vs #### bilang #### mga araw na nakalipas.`, // #toBeUpdated
    zh: `几天前以 #### vs ##### 作为 ####<span class="txt-green"> 赢</span>了。`, // #toBeUpdated
    br: `<span class="txt-green">Ganhou</span> como #### vs #### como #### #### dias atrás.`,
    es: `<span class="txt-green">Ganó</span> #### contra #### como #### #### hace días.`, // #toBeUpdated
  },
  playedWithLostVsToday: {
    en: `You <span class="txt-red">lost</span> as #### vs #### as #### today.`,
    de: `Du hast heute als #### gegen #### als #### <span class="txt-red">verloren</span>.`,
    fr: `Tu as <span class="txt-red">perdu</span> en tant que #### contre #### en tant que #### aujourd'hui.`,
    ru: `Вы <span class="txt-red">проиграли</span> как #### против #### как #### сегодня.`, // #toBeUpdated
    id: `Anda <span class="txt-red">kalah</span> sebagai #### vs #### sebagai #### hari ini.`, // #toBeUpdated
    fil: `<span class="txt-red">Nawala</span> ka bilang #### vs #### bilang #### ngayon.`, // #toBeUpdated
    zh: `你今天<span class="txt-red">输了</span> #### vs ####`, // #toBeUpdated
    br: `Você <span class="txt-red">perdeu</span> como #### vs #### como #### hoje.`,
    es: `Has <span class="txt-red">perdido</span> como #### contra #### como #### hoy.`, // #toBeUpdated
  },
  playedWithLostVs: {
    en: `You <span class="txt-red">lost</span> as #### vs #### as #### #### days ago.`,
    de: `Du hast als #### gegen #### als #### vor #### Tagen <span class="txt-red">verloren</span>.`,
    fr: `Tu as <span class="txt-red">perdu</span> comme #### contre #### comme #### #### il y a quelques jours.`,
    ru: `Вы <span class="txt-red"> проиграли </span> как #### против #### как #### #### дней назад.`,
    id: `Anda <span class="txt-red">kalah</span> sebagai #### vs #### sebagai #### #### hari yang lalu.`, // #toBeUpdated
    fil: `<span class="txt-red">Nawala</span> ka bilang #### vs #### bilang #### #### araw na nakalipas.`, // #toBeUpdated
    zh: `你<span class="txt-red">输了</span> #### vs #### 和 #### ##### 几天前一样。`, // #toBeUpdated
    br: `Você <span class="txt-red">perdeu</span> como #### vs #### como #### #### dias atrás.`,
    es: `<span class="txt-red">Perdiste</span> como #### vs #### como #### #### días atrás.`, // #toBeUpdated
  },

  enemyHero: {
    en: "Enemy hero",
    de: "Gegner Held",
    fr: "Héros ennemi", // #toBeUpdated
    ru: "Герой противника",
    id: "Musuh pahlawan", // #toBeUpdated
    fil: "Kaaway bayani", // #toBeUpdated
    zh: "敌方英雄",
    br: "Herói inimigo",
    es: "Héroe enemigo", // #toBeUpdated
  },

  inMyLane: {
    en: "My lane",
    de: "Meine Linie",
    fr: "Ma voie", // #toBeUpdated
    ru: "Моя линия",
    id: "Jalur saya", // #toBeUpdated
    fil: "Aking lane", // #toBeUpdated
    zh: "和我对线",
    br: "Minha trilha",
    es: "Mi carril", // #toBeUpdated
  },

  counterItemsLane: {
    en: "Counter items to consider (laning)",
    de: "Berücksichtige Konter Gegenstände (Linie)",
    fr: "Points de comptoir à considérer (atterrissage)", // #toBeUpdated
    ru: "Контр предметы на рассмотрение (лайнинг)",
    id: "Counter item untuk dipertimbangkan (laning)", // #toBeUpdated
    fil: "Counter item upang isaalang-alang (laning)", // #toBeUpdated
    zh: "可以考虑针对使用的物品（对线期）",
    br: "Itens anuladores a se considerar (fase de trilha)",
    es: "Contraítems a considerar (carriles)", // #toBeUpdated
  },

  spectatingMessage: {
    en: "Enjoy watching!",
    de: "Viel Spaß beim Zusehen!",
    fr: "Profitez de regarder !", // #toBeUpdated
    ru: "Приятного просмотра!",
    id: "Nikmati menonton!", // #toBeUpdated
    fil: "Tangkilikin ang panonood!", // #toBeUpdated
    zh: "享受观看比赛的乐趣吧！",
    br: "Aproveite!",
    es: "¡Disfruta viendo!", // #toBeUpdated
  },

  noRosterMessage: {
    en: "Waiting for information on players...",
    de: "Warte auf Spielerinformationen...",
    fr: "En attente d'informations sur les joueurs...", // #toBeUpdated
    ru: "Ожидание информации об игроках...",
    id: "Menunggu informasi tentang pemain...", // #toBeUpdated
    fil: "Naghihintay para sa impormasyon sa mga manlalaro...", // #toBeUpdated
    zh: "正在等待玩家信息",
    br: "Aguardando informação dos jogadores...",
    es: "Esperando información sobre los jugadores...", // #toBeUpdated
  },

  banSuggestions: {
    en: "Ban suggestions",
    de: "Ban Vorschläge",
    fr: "Suggestions", // #toBeUpdated
    ru: "Предложения по банам",
    id: "Saran larangan", // #toBeUpdated
    fil: "Mga mungkahi Ban", // #toBeUpdated
    zh: "禁用英雄建议",
    br: "Sugestão de ban",
    es: "Sugerencias de prohibición", // #toBeUpdated
  },

  winLoseStreakNone: {
    en: "No win/lose streak in the last three matches.",
    de: "Keine Sieges/Niederlagen Serie in den letzten 3 Spielen.",
    fr: "Aucune série de victoires/défaites lors des trois derniers matchs.", // #toBeUpdated
    ru: "В последних трех матчах отсутствуют серии побед и поражений.",
    id: "Tidak ada kemenangan beruntun dalam tiga pertandingan terakhir.", // #toBeUpdated
    fil: "Walang manalo/mawalan ng streak sa huling tatlong tugma.", // #toBeUpdated
    zh: "没有三连胜或者三连败",
    br: "Nenhuma sequência de vitória/perda nas últimas 3 partidas",
    es: "Sin racha de victorias y derrotas en los últimos tres partidos.", // #toBeUpdated
  },

  winLoseStreaks: {
    en: "Winning / losing streaks",
    de: "Sieges / Niederlagen Serien",
    fr: "Conséquences gagnantes/perdantes", // #toBeUpdated
    ru: "Серии побед/поражений",
    id: "Memenang/kehilangan garis-garis", // #toBeUpdated
    fil: "Panalong/pagkawala ng streaks", // #toBeUpdated
    zh: "正在连胜或者连败",
    br: "Sequência de vitória/derrota",
    es: "Rachas ganadoras/perdedoras", // #toBeUpdated
  },

  peoplePlayedWith: {
    en: "People you played with",
    de: "Spieler mit denen du gespielt hast",
    fr: "Les personnes avec qui vous avez joué", // #toBeUpdated
    ru: "Люди, с которыми вы играли",
    id: "Orang yang Anda bermain dengan", // #toBeUpdated
    fil: "Mga taong nilalaro mo", // #toBeUpdated
    zh: "一起玩的队友",
    br: "Pessoas com quem você jogou",
    es: "Personas con las que jugabas", // #toBeUpdated
  },

  heroToBanNone: {
    en: "No spezific hero needs to be banned.",
    de: "Kein spezifischer Held muss gebannt werden.",
    fr: "Aucun héros spécifique n'a besoin d'être banni.", // #toBeUpdated
    ru: "Нет героев, которых нужно забанить",
    id: "Tidak ada pahlawan spezific perlu dilarang.", // #toBeUpdated
    fil: "Walang partikular na bayani ang kailangang pinagbawalan.", // #toBeUpdated
    zh: "没有需要去Ban掉的英雄",
    br: "Nenhum herói específico precisa ser banido.",
    es: "No hay que prohibir a ningún héroe específico.", // #toBeUpdated
  },

  heroNotToBanNone: {
    en: "All heroes can be banned.",
    de: "Alle Helden können gebannt werden.",
    fr: "Tous les héros peuvent être bannis.",
    ru: "Всех героев можно забанить.",
    id: "Semua pahlawan bisa dilarang.", // #toBeUpdated
    fil: "Ang lahat ng mga bayani ay maaaring pinagbawalan.", // #toBeUpdated
    zh: "所有英雄都可以被封禁。", // #toBeUpdated
    br: "Todos os heróis podem ser banidos.",
    es: "Se puede prohibir a todos los héroes.", // #toBeUpdated
  },

  banMatchCount4You: {
    en: "You won 4 games in a row",
    de: "Du hast 4 Spiele in Folge gewonnen",
    fr: "Vous avez gagné 4 parties d'affilée", // #toBeUpdated
    ru: "Вы выиграли 4 игры подряд",
    id: "Anda memenangkan 4 pertandingan berturut-turut", // #toBeUpdated
    fil: "Nanalo ka ng 4 na laro sa isang hilera", // #toBeUpdated
    zh: "你连续赢了 4 场比赛", // #toBeUpdated
    br: "Você venceu 4 jogos seguidos",
    es: "Has ganado 4 partidos seguidos", // #toBeUpdated
  },
  banMatchCount4YourTeam: {
    en: "#### in your team won 4 games in a row",
    de: "#### in deiner Mannschaft hat 4 Spiele in Folge gewonnen", // #toBeUpdated
    fr: "#### de ton équipe a gagné 4 matchs d'affilée", // #toBeUpdated
    ru: "#### в вашей команде выиграл 4 игры подряд",
    id: "#### di tim Anda memenangkan 4 pertandingan berturut-turut", // #toBeUpdated
    fil: "#### sa iyong koponan ay nanalo ng 4 na laro sa isang hilera", // #toBeUpdated
    zh: "#### 在你的队伍中连续赢了 4 场比赛", // #toBeUpdated
    br: "#### no seu time venceu 4 jogos consecutivos",
    es: "#### en tu equipo ganó 4 partidos seguidos", // #toBeUpdated
  },
  banMatchCount4EnemyTeam: {
    en: "#### in the enemy team won 4 games in a row",
    de: "#### im gegnerischen Team hat 4 Spiele in Folge gewonnen",
    fr: "#### dans l'équipe adverse a gagné 4 matchs d'affilée", // #toBeUpdated
    ru: "#### во вражеской команде выиграл в 4 играх подряд",
    id: "#### di tim musuh memenangkan 4 pertandingan berturut-turut", // #toBeUpdated
    fil: "#### sa koponan ng kaaway ay nanalo ng 4 na laro sa isang hilera", // #toBeUpdated
    zh: "#### 在敌方队伍中连续赢了 4 场比赛", // #toBeUpdated
    br: "#### no time inimigo venceu 4 jogos consecutivos",
    es: "#### en el equipo enemigo ganó 4 partidos seguidos", // #toBeUpdated
  },
  banMatchCount5PlusYou: {
    en: "You have a high win rate of ####% in the last #### matches",
    de: "Du hast eine hohe Gewinnrate von ####% in den letzten #### Spielen", // #toBeUpdated
    fr: "Vous avez un taux de victoire élevé de ####% lors des #### derniers matchs", // #toBeUpdated
    ru: "У вас высокий ####% процент побед в последних #### матчах",
    id: "Anda memiliki tingkat kemenangan tinggi ####% dalam pertandingan terakhir ####", // #toBeUpdated
    fil: "Mayroon kang mataas na rate ng panalo ng ####% sa huling #### na mga tugma", // #toBeUpdated
    zh: "在最后一场 #### 场比赛中，你的胜率高达 ####%", // #toBeUpdated
    br: "Você tem uma alta taxa de vitórias de ####% nas últimas #### partidas",
    es: "Tienes una alta tasa de victorias de ####% en los últimos #### partidos", // #toBeUpdated
  },
  banMatchCount5PlusYourTeam: {
    en: "#### in your team has a high win rate of ####% in the last #### matches",
    de: "#### in deinem Team hat eine hohe Gewinnrate von ####% in den letzten #### Spielen", // #toBeUpdated
    fr: "#### dans ton équipe a un taux de victoire élevé de ####% lors des #### derniers matchs", // #toBeUpdated
    ru: "#### в вашей команде имеет высокий ####% процент побед в последних #### матчах",
    id: "#### di tim Anda memiliki tingkat kemenangan tinggi ####% dalam pertandingan terakhir ####", // #toBeUpdated
    fil: "#### sa iyong koponan ay may mataas na rate ng panalo ng ####% sa huling #### na mga tugma", // #toBeUpdated
    zh: "你队伍中的 #### 在过去 #### 场比赛中有 ####% 的高胜率", // #toBeUpdated
    br: "#### em sua equipe tem uma alta taxa de vitórias de ####% nas últimas #### partidas",
    es: "#### en tu equipo tiene una alta tasa de victorias de ####% en los últimos #### partidos", // #toBeUpdated
  },
  banMatchCount5PlusEnemyTeam: {
    en: "#### in the enemy team has a high win rate of ####% in the last #### matches",
    de: "#### im gegnerischen Team hat eine hohe Siegrate von ####% in den letzten #### Spielen", // #toBeUpdated
    fr: "#### dans l'équipe adverse a un taux de victoire élevé de ####% lors des #### derniers matchs", // #toBeUpdated
    ru: "#### во вражеской команде высокий ####% процент побед в последних #### матчах",
    id: "#### di tim musuh memiliki tingkat kemenangan tinggi ####% dalam pertandingan terakhir ####", // #toBeUpdated
    fil: "#### sa koponan ng kaaway ay may mataas na rate ng panalo ng ####% sa huling #### na mga tugma", // #toBeUpdated
    zh: "敌方队伍中的 #### 在最后 #### 场比赛中获得 ####% 的高胜率", // #toBeUpdated
    br: "#### na equipe inimiga tem uma alta taxa de vitória de ####% nas últimas #### partidas",
    es: "#### en el equipo enemigo tiene una alta tasa de victorias de ####% en los últimos #### partidos", // #toBeUpdated
  },
  noBanLowWinRate: {
    en: "#### in the enemy team has a low win rate and picks hero frequently",
    de: "#### im gegnerischen Team hat eine niedrige Gewinnrate und wählt häufig Helden", // #toBeUpdated
    fr: "#### dans l'équipe adverse a un faible taux de victoire et choisit fréquemment son héros", // #toBeUpdated
    ru: "#### во вражеской команде имеет низкий процент побед и часто выбирает героя",
    id: "#### di tim musuh memiliki tingkat kemenangan rendah dan sering memilih pahlawan", // #toBeUpdated
    fil: "#### sa koponan ng kaaway ay may mababang rate ng panalo at madalas na pumili ng bayani", // #toBeUpdated
    zh: "敌方队伍中的 #### 获胜率较低且经常挑选英雄", // #toBeUpdated
    br: "#### na equipe inimiga tem uma baixa taxa de vitória e escolhe o herói com frequência",
    es: "#### en el equipo enemigo tiene una baja tasa de victorias y elige héroe con frecuencia", // #toBeUpdated
  },

  playerIsSmurf: {
    en: "#### is likely to be a smurf. He has a win rate of ####% over the last #### matches.",
    de: "#### ist wahrscheinlich ein Smurf. Er hat eine Gewinnrate von ####% in den letzten #### Spielen.",
    fr: "#### est probablement un schtroumpf. Il a un taux de victoire de ####% sur les derniers #### matchs.", // #toBeUpdated
    ru: "#### скорее всего смурф. У него ####% процент побед в последних #### матчах.",
    id: "#### kemungkinan akan menjadi smurf. Dia memiliki tingkat kemenangan ####% selama pertandingan #### terakhir.", // #toBeUpdated
    fil: "#### ay malamang na maging isang smurf. Siya ay may panalo rate ng ####% sa huling #### na mga tugma.", // #toBeUpdated
    zh: "#### 很可能是蓝精灵。在过去的 #### 场比赛中，他的胜率为 ####%。", // #toBeUpdated
    br: "#### é provável que seja um smurf. Ele tem uma taxa de vitória de ####% nas últimas #### partidas.",
    es: "#### es probable que sea un pitufo. Tiene una tasa de victorias de ####% en los últimos #### partidos.", // #toBeUpdated
  },

  // InGame window
  ShowHide: {
    en: "Show/hide",
    de: "Ein-/Ausblenden",
    fr: "Afficher/masquer",
    ru: "Показать/скрыть",
    id: "Tampilkan/sembunyikan",
    fil: "Show/hide",
    zh: "显示/隐藏",
    br: "Mostrar/ocultar",
    es: "Mostrar/ocultar",
  },
  SignIn: {
    en: "Sign in",
    de: "Anmelden",
    fr: "Identifiez-vous",
    ru: "Войти",
    id: "Masuk",
    fil: "Mag-sign in",
    zh: "请登录",
    br: "Registrar",
    es: "Ingresar",
  },
  LoggedIn: {
    en: "Logged in",
    de: "Angemeldet",
    fr: "Connecté",
    ru: "Авторизирован",
    id: "Masuk",
    fil: "Mag-logged in",
    zh: "已登录",
    br: "Logado",
    es: "Sesión iniciada",
  },
  LoggedInAs: {
    en: "Logged in as ####",
    de: "Angemeldet als ####",
    fr: "Connecté en tant que ####",
    ru: "Вы вошли как ####", // toBeReviewed (position of ####)
    id: "Masuk sebagai ####", // toBeReviewed (position of ####)
    fil: "Naka-logged in bilang ####", // toBeReviewed (position of ####)
    zh: "已通过第三方账号登陆 ####", // toBeReviewed (position of ####)
    br: "Logado como ####",
    es: "Conectado como ####", // toBeReviewed (position of ####)
  },
  CreateBallot: {
    en: "Create ballot",
    de: "Stimmzettel erstellen",
    fr: "Créer un bulletin de vote",
    ru: "Отзыв",
    id: "Buat pemungutan suara",
    fil: "Gumawa ng balota",
    zh: "开启投票",
    br: "Criar votação",
    es: "Crear votación",
  },
  WatchTutorial: {
    en: "Watch tutorial",
    de: "Tutorial ansehen",
    fr: "Regardez le didacticiel",
    ru: "Смотреть туториал",
    id: "Menonton tutorial",
    fil: "Panoorin ang tutorial",
    zh: "观看教程",
    br: "Assistir tutorial",
    es: "Ver el tutorial",
  },
  GetHelp: {
    en: "Get help",
    de: "Hilfe holen",
    fr: "Obtenez de l'aide",
    ru: "Помощь",
    id: "Dapatkan bantuan",
    fil: "Humingi ng tulong",
    zh: "获取帮助",
    br: "Obtenha ajuda",
    es: "Conseguir ayuda",
  },
  ReportIssue: {
    en: "Report issue",
    de: "Problem melden",
    id: "Melaporkan masalah",
    fr: "Problème de rapport",
    zh: "报告问题",
    fil: "Report issue",
    ru: "Отчёт об ошибке",
    br: "Relate um problema",
    es: "Reportar un problema",
  },
  JoinDiscord: {
    en: "Join Discord",
    de: "Discord beitreten",
    fr: "Rejoignez Discord",
    ru: "Discord",
    fil: "Mag-join sa Discord",
    zh: "加入Discord",
    id: "Bergabung Perselisihan",
    br: "Participar do Discord",
    es: "Únete a Discord",
  },
  JoinReddit: {
    en: "Join Reddit",
    de: "Reddit beitreten",
    fr: "Rejoignez Reddit",
    ru: "Reddit",
    id: "Bergabunglah Reddit",
    fil: "Mag-join sa Reddit",
    zh: "加入Reddit",
    br: "Participar do Reddit",
    es: "Únete a Reddit",
  },
  ManageSubscription: {
    en: "Manage subscription",
    de: "Abo verwalten",
    fr: "Gérer l'abonnement",
    ru: "Управление подпиской",
    zh: "管理订阅",
    fil: "I-manage ang subscription",
    id: "Kelola langganan",
    br: "Gerenciar assinatura",
    es: "administrar suscripción",
  },
  ChangeSettings: {
    en: "Change settings",
    de: "Einstellungen ändern",
    fr: "Modifier les paramètres",
    ru: "Настройки",
    id: "Ubah pengaturan",
    fil: "I-change ang settings",
    zh: "更改设置",
    br: "Alterar configurações",
    es: "Cambiar ajustes",
  },
  ClickToSignIn: {
    en: "Click to sign in to your Overwolf account",
    de: "Klicke hier, um dich bei deinem Overwolf-Konto anzumelden",
    fr: "Cliquez pour vous connecter à votre compte Overwolf",
    ru: "Нажмите, чтобы авторизировать аккаунт Overwolf",
    id: "Klik untuk masuk ke akun Overwolf Anda",
    fil: "I-click para mag sign in sa Overwolf account mo",
    zh: "点击登录你的 Overwolf 账户",
    br: "Clique para entrar com sua conta Overwolf",
    es: "Haga clic para iniciar sesión en su cuenta de Overwolf",
  },

  // Help window
  /*HELP: {
      en: "HELP",
      de: "HILFE",
      fr: "AIDEZ-MOI",
      ru: "ПОМОЩЬ",
      id: "MEMBANTU",
      fil: "HELP",
      zh: "帮助",
      br: "AJUDA",
      es: "AYUDA",
    },*/
  FEEDBACK: {
    en: "FEEDBACK",
    de: "FEEDBACK",
    fr: "COMMENTAIRES",
    ru: "ОТЗЫВ",
    id: "UMPAN BALIK",
    fil: "FEEDBACK",
    zh: "反馈",
    br: "COMENTÁRIOS",
    es: "COMENTARIOS",
  },
  ReportAnIssue: {
    en: "Report an issue/bug or request support",
    de: "Ein Problem/Bug melden oder Support anfragen",
    fr: "Signaler un problème/un bogue ou demander de l'aide",
    ru: "Сообщить об ошибке или обратиться в поддержку",
    id: "Melaporkan masalah/bug atau meminta dukungan",
    fil: "Mag-report ng issue/bug o mag-request ng support",
    zh: "报告问题/错误或请求支持",
    br: "Reportar um problema",
    es: "Reportar un problema",
  },
  ShareWithUs: {
    en: "What do you want to share with us?",
    de: "Was möchtest du mit uns teilen?",
    fr: "Qu'est-ce que tu souhaites partager avec nous ?",
    ru: "Чем вы хотите с нами поделиться?",
    id: "Apa yang ingin Anda bagikan dengan kami?",
    fil: "Ano gusto mong i-share sa amin?",
    zh: "给开发团队留言",
    br: "O que você gostaria de compartilhar conosco?",
    es: "¿Qué quieres compartir con nosotros?",
  },
  IssueDescription: {
    en: "Enter description of issue/bug or request for support",
    de: "Geben Sie eine Beschreibung des Problems/Bugs oder eine Supportanfrage ein",
    fr: "Entrez la description du problème/du bogue ou de la demande d'assistance",
    ru: "Введите описание ошибки или запросите поддержку",
    id: "Masukkan deskripsi masalah/bug atau permintaan untuk dukungan",
    fil: "Ilagay ang description ng issue/bug or request ng support",
    zh: "输入问题/错误描述或请求支持",
    br: "Descreva o problema/bug ou pedido de suporte",
    es: "Descripción del problema",
  },
  SEND_REPORT: {
    en: "SEND REPORT",
    de: "BERICHT SENDEN",
    fr: "ENVOYER UN RAPPORT",
    ru: "ОТПРАВИТЬ ОТЧЕТ",
    id: "KIRIM LAPORAN",
    fil: "SEND REPORT",
    zh: "发送报告",
    br: "ENVIAR REPORTE",
    es: "ENVIAR REPORTE",
  },
  ContactDetails: {
    en: "Contact details (E-Mail/Discord)",
    de: "Kontaktdaten (E-Mail/Discord)",
    fr: "Coordonnées (E-Mail/Discord)",
    ru: "Контактные данные (E-Mail/Discord)",
    id: "Rincian kontak (E-Mail/Perselisihan)",
    fil: "Contact details (E-Mail/Discord)",
    zh: "联系方式（电子邮件/Discord）",
    br: "Detalhes de contato (E-Mail/Discord)",
    es: "Detalles de contacto (E-Mail/Discord)",
  },
  EnterContactDetails: {
    en: "Enter your contact details",
    de: "Gib deine Kontaktdaten ein",
    fr: "Entrez vos coordonnées",
    ru: "Введите свои контактные данные",
    id: "Masukkan detail kontak Anda",
    fil: "Ilagay mo ang iyong contact details",
    zh: "输入您的联系方式",
    br: "Insira seus detalhes de contato",
    es: "Ingrese sus datos de contacto",
  },
  LogFiles: {
    en: "Attach Dota Coach log files",
    de: "Dota Coach-Protokolldateien anhängen",
    fr: "Joindre les fichiers journaux Dota Coach",
    ru: "Прикрепить файлы журнала Dota Coach",
    id: "Lampirkan file log Dota Coach",
    fil: "Attach Dota Coach log files",
    zh: "附上 Dota Coach 日志文件",
    br: "Anexar arquivos de registro do Dota Coach",
    es: "Adjunta los archivos de registro de Dota Coach",
  },

  //

  ArcaneRune: {
    en: "Arcane Rune",
    de: "Arkane Rune",
    fr: "Rune des arcanes",
    ru: "Руна Волшебства",
    id: "Rune Misteri",
    fil: "Arcane Rune",
    zh: "奥术符文",
    br: "Runa Arcana",
    es: "Runa Arcana",
  },
  Talent: {
    en: "Talent",
    fr: "Talent",
    de: "Talent",
    ru: "Таланты",
    id: "Bakat",
    fil: "Talent",
    zh: "天赋",
    br: "Talento",
    es: "Talento",
  },
  level: {
    en: "level",
    fr: "niveau",
    de: "Niveaus",
    ru: "уровень",
    id: "level",
    fil: "level",
    zh: "级别",
    br: "nível",
    es: "nivel",
  },
  NoDelay: {
    // Currently not used (2.4.2022)
    en: "No delay",
    de: "Keine Verzögerung",
    fr: "Pas de retard",
    ru: "Без задержек",
    id: "Tidak ada penundaan",
    fil: "No delay",
    zh: "无延迟",
    br: "Sem espera",
    es: "Sin retraso",
  },
  sec: {
    en: "sec",
    de: "Sekunde",
    fr: "seconde",
    ru: "сек",
    id: "detik",
    fil: "sec",
    zh: "秒",
    br: "segundo",
    es: "segundo",
  },
  Adjustment: {
    en: "Adjustment",
    de: "Anpassung",
    fr: "Ajustement",
    ru: "Регулировка",
    id: "Penyesuaian",
    fil: "Adjustment",
    zh: "校准",
    br: "Ajustes",
    es: "Ajustes",
  },
  ApplyToAll: {
    en: "Apply to all",
    de: "Auf alle anwenden",
    fr: "Appliquer à tous",
    ru: "Применить ко всем",
    id: "Terapkan untuk semua",
    fil: "Apply to all",
    zh: "全部应用",
    br: "Aplicar a todos",
    es: "Aplicar a todos",
  },
  Buyback: {
    en: "Buyback",
    de: "Rückkauf",
    fr: "Rachat",
    ru: "Выкуп",
    id: "Buyback",
    fil: "Buyback",
    zh: "买活",
    br: "Reviver",
    es: "Buyback",
  },

  // Stats
  OpenDotaAccessError: {
    en: "Error while accessing server.",
    de: "Fehler beim Zugriff auf den Server.",
    fr: "Erreur lors de l'accès au serveur.",
    ru: "Ошибка при доступе к серверу.",
    id: "Galat saat mengakses server.",
    fil: "Error habang ina-access ang server.",
    zh: "访问服务器时出错。",
    br: "Erro ao acessar o servidor.",
    es: "Error al acceder al servidor.",
  },
  PrivateProfile: {
    en: "Player profile is private.",
    de: "Das Spielerprofil ist privat.",
    fr: "Le profil du joueur est défini sur Privé.",
    ru: "Профиль игрока настроен как приватный.",
    id: "Profil pemain diatur ke pribadi.",
    fil: "Player profile ay naka-set sa private.",
    zh: "玩家个人资料已设置为私人。",
    br: "O perfil do jogador está definido como privado.",
    es: "El perfil del jugador está configurado como privado.",
  },
  NoRecentMatches: {
    en: "Player has no recent matches.",
    de: "Der Spieler hat in letzter Zeit keine Spiele.",
    fr: "Le joueur n'a pas fait de matches récents.",
    ru: "У игрока нет последних матчей.",
    id: "Pemain tidak memiliki pertandingan baru-baru ini.",
    fil: "Ang manlalaro ay walang kamakailang mga tugma.",
    zh: "该玩家没有近期的比赛数据。",
    br: "O jogador não tem partidas recentes.",
    es: "El jugador no tiene partidos recientes.",
  },

  FullyOperational: {
    en: "Dota 2 is running and connection is fully operational.",
    de: `Dota 2 läuft und die Verbindung ist voll funktionsfähig.`,
    fr: `Dota 2 est en cours d'exécution et la connexion est pleinement opérationnelle.`,
    ru: `Dota 2 запущена, а соединение полностью работоспособно.`, // #toBeUpdated
    id: `Dota 2 sedang berjalan dan koneksi beroperasi penuh.`, // #toBeUpdated
    fil: `Ang Dota 2 ay tumatakbo at ang koneksyon ay ganap na pagpapatakbo.`, // #toBeUpdated
    zh: `Dota 2 正在运行并且连接已完全正常运行。`, // #toBeUpdated
    br: `O Dota 2 está funcionando e a conexão está totalmente operacional.`,
    es: `Dota 2 se está ejecutando y la conexión está completamente operativa.`, // #toBeUpdated
  },

  DotaConnectivityStart: {
    en: "Connecting to Dota 2...",
    de: `Verbindung zu Dota 2 wird hergestellt...`,
    fr: `Connexion à Dota 2 en cours...`,
    ru: "Подключение к Dota 2...",
    id: `Menghubungkan ke Dota 2...`, // #toBeUpdated
    fil: `Kumokonekta sa Dota 2...`, // #toBeUpdated
    zh: `正在连接到 Dota 2...`, // #toBeUpdated
    br: `Conectando-se ao Dota 2...`,
    es: `Conectándose a Dota 2...`, // #toBeUpdated
  },
  DotaConnectivityStatus: {
    en: "Connecting to Dota 2...<br>Current status: '####' (####/#### attempts)",
    de: `Verbindung zu Dota 2 wird hergestellt... <br>Aktueller Stand: '####' (####/#### Versuchen)`,
    fr: `Connexion à Dota 2... <br>État actuel : '####' (####/#### tentatives)`,
    ru: "Подключение к Dota 2...<br>Текущий статус: '####' (####/#### попытки)",
    id: `Menghubungkan ke Dota 2... <br>Statussaat ini: '####' (####/#### upaya)`, // #toBeUpdated
    fil: `Kumokonekta sa Dota 2... <br>Kasalukuyangkatayuan: '####' (####/#### pagtatangka)`, // #toBeUpdated
    zh: `正在连接到 Dota 2...<br>当前状态：'####'（####/#### 次尝试）`, // #toBeUpdated
    br: `Conectando-se ao Dota 2... <br>Status atual: '####' (####/#### tentativas)`,
    es: `Conectándose a Dota 2... <br>Estado actual: '####' (####/#### intentos)`, // #toBeUpdated
  },
  DotaConnectivityError: {
    en: "Connection to Dota 2 could not be established.<br>Please try to restart app again later.<br>Error: '####'.", // NOT, ALL UPDATED
    de: `Verbindung zu Dota 2 konnte nicht hergestellt werden. <br>Bitte versuche es später erneut. <br>Fehler: '####'.`,
    fr: `La connexion à Dota 2 n'a pas pu être établie. <br>Réessaye plus tard. <br>Erreur : « #### ».`,
    ru: "Подключение к Dota 2 не установлено.<br>Пожалуйста, повторите попытку позже.<br>Ошибка: '####'.",
    id: `Koneksi ke Dota 2 tidak dapat dibuat. <br>Silakancoba lagi nanti. <br>Galat: '####'.`, // #toBeUpdated
    fil: `Ang koneksyon sa Dota 2 ay hindi maitatag. <br>Mangyaringsubukang muli mamaya. <br>Error: '####'.`, // #toBeUpdated
    zh: `无法建立与 Dota 2 的连接。<br>请稍后再试。<br>错误：'####'。`, // #toBeUpdated
    br: `A conexão com o Dota 2 não pôde ser estabelecida. <br>Tente novamente mais tarde. <br>Erro: '####'.`,
    es: `No se pudo establecer la conexión con Dota 2. <br>Vuelva a intentarlo más tarde. <br>Error: '####'.`, // #toBeUpdated
  },
  DotaConnectivityFailed: {
    // {"plugin_error": "failed_initializing_monitor"}
    en: "Connection to Dota 2 is disrupted. We are working on a fix, please try again later.",
    de: `Die Verbindung zu Dota 2 ist unterbrochen. Wir arbeiten an einer Lösung, bitte versuche es später erneut.`,
    fr: `La connexion à Dota 2 est interrompue. Nous travaillons sur un correctif, nous the prions de réessayer plus tard.`,
    ru: "Соединение с Dota 2 прервано. Мы работаем над исправлением, повторите попытку позже.",
    id: `Koneksi ke Dota 2 terganggu. Kami sedang mengerjakan perbaikan, silakan coba lagi nanti.`, // #toBeUpdated
    fil: `Ang koneksyon sa Dota 2 ay nasisira. Nagtatrabaho kami sa isang pag-aayos, mangyaring subukang muli mamaya.`, // #toBeUpdated
    zh: `与 Dota 2 的连接中断。我们正在修复问题，请稍后再试。`, // #toBeUpdated
    br: `A conexão com o Dota 2 foi interrompida. Estamos trabalhando em uma correção, tente novamente mais tarde.`,
    es: `La conexión a Dota 2 está interrumpida. Estamos trabajando en una solución, inténtalo de nuevo más tarde.`, // #toBeUpdated
  },
  DotaConnectivityCrashed: {
    // {""plugin_error"":""crashed_on_present""}
    en: "Connection to Dota crashed. Please try to relaunch app.", // May be we should try to reconnect in the app?!
    de: `Die Verbindung zu Dota ist abgestürzt. Bitte versuche die App neu zu starten.`,
    fr: `La connexion à Dota s'est écrasée. Essaye de relancer l'application.`,
    ru: "Сбой подключения к Dota. Попробуйте перезапустить приложение.",
    id: `Koneksi ke Dota jatuh. Silakan coba untuk meluncurkan kembali aplikasi.`, // #toBeUpdated
    fil: `Ang koneksyon sa Dota ay nag-crash. Mangyaring subukan na muling ilunsad ang app.`, // #toBeUpdated
    zh: `与 Dota 的连接崩溃了。请尝试重新启动应用程序。`, // #toBeUpdated
    br: `A conexão com o Dota travou. Tente reiniciar o aplicativo.`,
    es: `La conexión a Dota se bloqueó. Intente volver a iniciar la aplicación.`, // #toBeUpdated
  },

  // Desktop status display
  InfoboxesOperational: {
    en: "Infoboxes are fully operational.",
    de: `Infoboxen sind voll funktionsfähig.`,
    fr: `Les infoboxes sont pleinement opérationnelles.`,
    ru: `Инфобоксы полностью работоспособны.`, // #toBeUpdated
    id: `Infoboxes beroperasi penuh.`, // #toBeUpdated
    fil: `Ang mga infobox ay ganap na gumagana.`, // #toBeUpdated
    zh: `信息框已完全运行。`, // #toBeUpdated
    br: `As caixas de informação estão totalmente operacionais.`,
    es: `Los infoboxes están en pleno funcionamiento.`, // #toBeUpdated
  },
  InfoboxesIssueDota: {
    en: "Infoboxes are down as connectivity to Dota 2 is not working properly.",
    de: `Infoboxen funktionieren nicht, da die Verbindung zu Dota 2 nicht ordnungsgemäß funktioniert.`,
    fr: `Les infoboxes sont en panne car la connectivité à Dota 2 ne fonctionne pas correctement.`,
    ru: `Инфобоксы не работают, так как подключение к Dota 2 не работает должным образом.`, // #toBeUpdated
    id: `Infoboxes turun karena konektivitas ke Dota 2 tidak berfungsi dengan baik.`, // #toBeUpdated
    fil: `Ang mga infobox ay bumaba dahil ang pagkakakonekta sa Dota 2 ay hindi gumagana ng maayos.`, // #toBeUpdated
    zh: `由于与 Dota 2 的连接无法正常工作，信息框已关闭。`, // #toBeUpdated
    br: `As caixas de informação estão inativas porque a conectividade com o Dota 2 não está funcionando corretamente.`,
    es: `Las infoboxes están inactivas porque la conectividad a Dota 2 no funciona correctamente.`, // #toBeUpdated
  },
  InfoboxesLaunchDota: {
    en: "Launch Dota 2 to use in-game infoboxes.",
    de: `Starte Dota 2 um die Infoboxen im Spiel verwenden zu können.`,
    fr: `Lance Dota 2 pour utiliser les infoboxes.`,
    ru: `Запустите Dota 2, чтобы использовать внутриигровые инфобоксы.`, // #toBeUpdated
    id: `Luncurkan Dota 2 untuk menggunakan kotak info dalam game.`, // #toBeUpdated
    fil: `Ilunsad ang Dota 2 upang magamit ang in-game infoboxes.`, // #toBeUpdated
    zh: `启动 Dota 2 以使用游戏中的信息框。`, // #toBeUpdated
    br: `Inicie o Dota 2 para usar caixas de informação no jogo.`,
    es: `Inicia Dota 2 para usar las infoboxes del juego.`, // #toBeUpdated
  },

  TimersOperational: {
    en: "Timers are fully operational.",
    de: `Die Timer sind voll funktionsfähig.`,
    fr: `Les minuteries sont pleinement opérationnelles.`,
    ru: `Таймеры полностью работоспособны.`, // #toBeUpdated
    id: `Timer beroperasi penuh.`, // #toBeUpdated
    fil: `Ang mga timer ay ganap na pagpapatakbo.`, // #toBeUpdated
    zh: `计时器已完全运行。`, // #toBeUpdated
    br: `Os temporizadores estão totalmente operacionais.`,
    es: `Los temporizadores están en pleno funcionamiento.`, // #toBeUpdated
  },
  TimersIssueDota: {
    en: "Timers are down as connectivity to Dota 2 is not working properly.",
    de: `Die Timer sind ausgefallen, da die Verbindung zu Dota 2 nicht ordnungsgemäß funktioniert.`,
    fr: `Les minuteries sont en panne car la connectivité à Dota 2 ne fonctionne pas correctement.`,
    ru: `Таймеры отключены, так как подключение к Dota 2 не работает должным образом.`, // #toBeUpdated
    id: `Timer turun karena konektivitas ke Dota 2 tidak berfungsi dengan baik.`, // #toBeUpdated
    fil: `Ang mga timer ay bumaba dahil ang pagkakakonekta sa Dota 2 ay hindi gumagana ng maayos.`, // #toBeUpdated
    zh: `由于与 Dota 2 的连接无法正常工作，计时器已关闭。`, // #toBeUpdated
    br: `Os temporizadores estão inativos porque a conectividade com o Dota 2 não está funcionando corretamente.`,
    es: `Los temporizadores están inactivos porque la conectividad a Dota 2 no funciona correctamente.`, // #toBeUpdated
  },
  TimersLaunchDota: {
    en: "Launch Dota 2 to use in-game timers.",
    de: `Starte Dota 2 um die Timer im Spiel zu verwenden.`,
    fr: `Lance Dota 2 pour utiliser les minuteurs dans le jeu.`,
    ru: `Запустите Dota 2, чтобы использовать внутриигровые таймеры.`, // #toBeUpdated
    id: `Luncurkan Dota 2 untuk menggunakan timer dalam game.`, // #toBeUpdated
    fil: `Ilunsad ang Dota 2 upang magamit ang in-game timers.`, // #toBeUpdated
    zh: `启动 Dota 2 以使用游戏中的计时器。`, // #toBeUpdated
    br: `Inicie o Dota 2 para usar cronômetros no jogo.`,
    es: `Inicia Dota 2 para usar temporizadores en el juego.`, // #toBeUpdated
  },

  CoachingStatus: {
    en: "Coaching & notifications",
  },
  CoachingOperational: {
    en: "Coaching and notifications are fully operational.",
    de: `Coaching und Benachrichtigungen sind voll funktionsfähig.`,
    fr: `Le coaching et les notifications sont pleinement opérationnels.`,
    ru: `Коучинг и уведомления полностью работоспособны.`, // #toBeUpdated
    id: `Pelatihan dan pemberitahuan beroperasi penuh.`, // #toBeUpdated
    fil: `Ang Coaching at notification ay ganap na pagpapatakbo.`, // #toBeUpdated
    zh: `辅导和通知功能已全面运作。`, // #toBeUpdated
    br: `O treinamento e as notificações estão totalmente operacionais.`,
    es: `El entrenamiento y las notificaciones están en pleno funcionamiento.`, // #toBeUpdated
  },
  CoachingIssueDota: {
    en: "Coaching and notifications are down as connectivity to Dota 2 is not working properly.",
    de: `Coaching und Benachrichtigungen sind ausgefallen, da die Verbindung zu Dota 2 nicht ordnungsgemäß funktioniert.`,
    fr: `Le coaching et les notifications sont en panne car la connectivité à Dota 2 ne fonctionne pas correctement.`,
    ru: `Коучинг и уведомления не работают, так как подключение к Dota 2 не работает должным образом.`, // #toBeUpdated
    id: `Pelatihan dan pemberitahuan turun karena konektivitas ke Dota 2 tidak berfungsi dengan baik.`, // #toBeUpdated
    fil: `Ang Coaching at notification ay bumaba dahil ang pagkakakonekta sa Dota 2 ay hindi gumagana ng maayos.`, // #toBeUpdated
    zh: `由于与 Dota 2 的连接不正常，辅导和通知中断。`, // #toBeUpdated
    br: `O treinamento e as notificações estão inativos, pois a conectividade com o Dota 2 não está funcionando corretamente.`,
    es: `El entrenamiento y las notificaciones están inactivos porque la conectividad a Dota 2 no funciona correctamente.`, // #toBeUpdated
  },
  CoachingLaunchDota: {
    en: "Launch Dota 2 to use in-game coaching and notifications.",
    de: `Starte Dota 2 um Coaching und Benachrichtigungen im Spiel zu verwenden.`,
    fr: `Lance Dota 2 pour utiliser le coaching et les notifications en jeu.`,
    ru: `Запустите Dota 2, чтобы использовать внутриигровой коучинг и уведомления.`, // #toBeUpdated
    id: `Luncurkan Dota 2 untuk menggunakan pelatihan dan notifikasi dalam game.`, // #toBeUpdated
    fil: `Ilunsad ang Dota 2 upang magamit ang in-game coaching at notification.`, // #toBeUpdated
    zh: `启动 Dota 2 以使用游戏中的指导和通知。`, // #toBeUpdated
    br: `Inicie o Dota 2 para usar treinamento e notificações no jogo.`,
    es: `Inicia Dota 2 para usar el entrenamiento y las notificaciones en el juego.`, // #toBeUpdated
  },

  PerformanceTrackerOperational: {
    en: "Performance tracker is fully operational and waiting for you to select a hero in a game.",
    de: `Der Performance Tracker ist voll funktionsfähig und wartet darauf, dass du in einem Spiel einen Helden auswählst.`,
    fr: `Le traqueur de performance est entièrement opérationnel et attend que tu sélectionne un héros dans une partie.`,
    ru: `Трекер производительности полностью работоспособен и ждет, когда вы выберете героя в игре.`, // #toBeUpdated
    id: `Pelacak kinerja beroperasi penuh dan menunggu Anda untuk memilih pahlawan dalam permainan.`, // #toBeUpdated
    fil: `Pagganap tracker ay ganap na pagpapatakbo at naghihintay para sa iyo upang pumili ng isang bayani sa isang laro.`, // #toBeUpdated
    zh: `Performance Tracker 已完全运行，等待你在游戏中选择英雄。`, // #toBeUpdated
    br: `O rastreador de desempenho está totalmente operacional e esperando que você selecione um herói em um jogo.`,
    es: `El rastreador de rendimiento está completamente operativo y espera que selecciones un héroe en un juego.`, // #toBeUpdated
  },
  PerformanceTrackerOperationalInGame: {
    en: "Performance tracker is fully operational.",
    de: `Der Performance Tracker ist voll funktionsfähig.`,
    fr: `Le système de suivi des performances est pleinement opérationnel.`,
    ru: `Отслеживание производительности полностью работоспособно.`, // #toBeUpdated
    id: `Pelacak kinerja beroperasi penuh.`, // #toBeUpdated
    fil: `Ang tracker ng pagganap ay ganap na pagpapatakbo.`, // #toBeUpdated
    zh: `性能跟踪器已全面运行。`, // #toBeUpdated
    br: `O rastreador de desempenho está totalmente operacional.`,
    es: `El rastreador de rendimiento está totalmente operativo.`, // #toBeUpdated
  },
  PerformanceTrackerIssueDota: {
    en: "Performance tracker is down as connectivity to Dota 2 is not working properly.",
    de: `Der Performance Tracker ist ausgefallen, da die Verbindung zu Dota 2 nicht ordnungsgemäß funktioniert.`,
    fr: `Le suivi des performances est en panne car la connection à Dota 2 ne fonctionne pas correctement.`,
    ru: `Трекер производительности не работает, так как подключение к Dota 2 не работает должным образом.`, // #toBeUpdated
    id: `Pelacak kinerja turun karena konektivitas ke Dota 2 tidak berfungsi dengan baik.`, // #toBeUpdated
    fil: `Ang tracker ng pagganap ay bumaba dahil ang pagkakakonekta sa Dota 2 ay hindi gumagana ng maayos.`, // #toBeUpdated
    zh: `由于与 Dota 2 的连接无法正常工作，性能跟踪器已关闭。`, // #toBeUpdated
    br: `O rastreador de desempenho está inativo porque a conectividade com o Dota 2 não está funcionando corretamente.`,
    es: `El rastreador de rendimiento no funciona porque la conectividad con Dota 2 no funciona correctamente.`, // #toBeUpdated
  },
  PerformanceTrackerIssueAWS: {
    en: "Performance tracker can't compare your performance as benchmark data could not be retrieved from server (####).",

    de: `Performance Tracker kann Ihre Leistung nicht vergleichen, da die Benchmarkdaten nicht vom Server abgerufen werden konnten (####).`,
    fr: `Le suivi des performances ne peut pas comparer tes performances car les données de référence n'ont pas pu être récupérées depuis le serveur (####).`,
    ru: `Средство отслеживания производительности не может сравнивать производительность, так как данные тестов не удалось получить с сервера (####).`, // #toBeUpdated
    id: `Pelacak kinerja tidak dapat membandingkan kinerja Anda karena data tolok ukur tidak dapat diambil dari server (####).`, // #toBeUpdated
    fil: `Hindi maaaring ihambing ng tagasubaybay ng pagganap ang iyong pagganap dahil ang benchmark data ay hindi makuha mula sa server (####).`, // #toBeUpdated
    zh: `性能跟踪器无法比较您的表现，因为无法从服务器 (####) 检索基准数据。`, // #toBeUpdated
    br: `O rastreador de desempenho não pode comparar seu desempenho porque os dados de referência não puderam ser recuperados do servidor (####).`,
    es: `El monitor de rendimiento no puede comparar tu rendimiento porque los datos de referencia no se pueden recuperar del servidor (####).`, // #toBeUpdated
  },
  PerformanceTrackerLaunchDota: {
    en: "Launch Dota 2 to use in-game performance tracker.",
    de: `Starte Dota 2 um den Performance Tracker im Spiel zu verwenden.`,
    fr: `Lance Dota 2 pour utiliser le suivi des performances en jeu.`,
    ru: `Запустите Dota 2, чтобы использовать внутриигровой трекер производительности.`, // #toBeUpdated
    id: `Luncurkan Dota 2 untuk menggunakan pelacak kinerja dalam game.`, // #toBeUpdated
    fil: `Ilunsad ang Dota 2 upang magamit ang in-game tracker ng pagganap.`, // #toBeUpdated
    zh: `启动 Dota 2 以使用游戏中的性能追踪器。`, // #toBeUpdated
    br: `Abra o Dota 2 para usar o rastreador de desempenho no jogo`,
    es: `Inicia Dota 2 para usar el rastreador de rendimiento del juego.`, // #toBeUpdated
  },

  MatchAnalyticsStatus: {
    en: "Match analytics",
  },
  MatchAnalyticsOperational: {
    en: "Match analytics is fully operational.",
    de: `Die Spielanalyse ist voll funktionsfähig.`,
    fr: `L'analyse des matchs est pleinement opérationnelle.`,
    ru: `Аналитика матчей полностью работоспособна.`, // #toBeUpdated
    id: `Match analytics beroperasi penuh.`, // #toBeUpdated
    fil: `Ang pagtutugma ng analytics ay ganap na gumagana.`, // #toBeUpdated
    zh: `比赛分析已全面运作。`, // #toBeUpdated
    br: `A análise de partidas está totalmente operacional.`,
    es: `El análisis de partidos está en pleno funcionamiento.`, // #toBeUpdated
  },
  MatchAnalyticsLoading: {
    en: "Match analytics is loading benchmark data.",
    de: `Match Analytics lädt die Benchmark-Daten.`,
    fr: `L'analyse des matches charge les données de référence.`,
    ru: `Аналитика матчей загружает данные тестов.`, // #toBeUpdated
    id: `Match analytics memuat data benchmark.`, // #toBeUpdated
    fil: `Ang pagtutugma ng analytics ay naglo-load ng benchmark data.`, // #toBeUpdated
    zh: `比赛分析正在加载基准数据。`, // #toBeUpdated
    br: `A análise de partidas está carregando dados de referência.`,
    es: `El análisis de partidos está cargando datos de referencia.`, // #toBeUpdated
  },
  MatchAnalyticsError: {
    en: "Match analytics can't benchmark your matches as it failed loading benchmark data (####).", // Add button for try again?

    de: `Die Spielanalyse kann deine Spiele nicht bewerten, da das Laden der Benchmark-Daten fehlgeschlagen ist (####).`,
    fr: `L'analyse des matchs ne peut pas comparer vos jeux car le chargement des données de référence a échoué (####).`,
    ru: `Аналитика матчей не может сравнивать ваши матчи, так как не удалось загрузить данные теста (####).`, // #toBeUpdated
    id: `Match analytics tidak dapat mengukur kecocokan Anda karena gagal memuat data benchmark (####).`, // #toBeUpdated
    fil: `Hindi maaaring benchmark ng match analytics ang iyong mga match dahil nabigo ito sa paglo-load ng benchmark data (####).`, // #toBeUpdated
    zh: `比赛分析无法对您的比赛进行基准测试，因为它无法加载基准数据 (####)。`, // #toBeUpdated
    br: `A análise de partidas não pode comparar suas partidas porque falhou ao carregar os dados de referência (#####).`,
    es: `El análisis de partidos no puede comparar tus partidos porque no pudo cargar los datos de referencia (####).`, // #toBeUpdated
  },

  InternetConnectivity: {
    en: "Internet connectivity",
  },
  InternetConnectivityOnline: {
    en: "Connection to the internet is operational.",
  },
  InternetConnectivityOffline: {
    en: "There is no connection to the internet.",
  },

  /**
   * Setup Wizard
   */

  // Setup Wizard Stepper Items
  stepperHeader: {
    en: "Dota Coach Setup",
    de: "Dota Coach einrichten", // #toBeUpdated
    fr: "Configuration du coach Dota", // #toBeUpdated
    ru: "Настройка тренера по Dota", // #toBeUpdated
    id: "Pengaturan Pelatih Dota", // #toBeUpdated
    fil: "Pag-setup ng Dota Coach", // #toBeUpdated
    zh: "刀塔教练设置", // #toBeUpdated
    br: "Configuração do Dota Coach",
    es: "Configuración de Dota Coach", // #toBeUpdated
  },

  stepperLanguage: {
    en: "Language",
    de: "Sprache", // #toBeUpdated
    fr: "Langage", // #toBeUpdated
    ru: "Язык", // #toBeUpdated
    id: "Bahasa", // #toBeUpdated
    fil: "Wika", // #toBeUpdated
    zh: "语言", // #toBeUpdated
    br: "Idioma",
    es: "Idioma", // #toBeUpdated
  },

  stepperProfile: {
    en: "Profile",
    de: "Profil", // #toBeUpdated
    fr: "Profil", // #toBeUpdated
    ru: "Профиль", // #toBeUpdated
    id: "Profil", // #toBeUpdated
    fil: "Profile", // #toBeUpdated
    zh: "配置文件", // #toBeUpdated
    br: "Perfil",
    es: "Perfil", // #toBeUpdated
  },

  stepperDotaplusSub: {
    en: "Dota+ Subscription",
    de: "Dota+ Abo", // #toBeUpdated
    fr: "Abonnement Dota+", // #toBeUpdated
    ru: "Подписка на Dota+", // #toBeUpdated
    id: "Langganan Dota+", // #toBeUpdated
    fil: "Subscription ng Dota+", // #toBeUpdated
    zh: "Dota+ 订阅", // #toBeUpdated
    br: "Assinatura Dota+",
    es: "Suscripción a Dota+", // #toBeUpdated
  },

  stepperAudio: {
    en: "Audio",
    de: "Audio", // #toBeUpdated
    fr: "Audio", // #toBeUpdated
    ru: "Аудио", // #toBeUpdated
    id: "Audio", // #toBeUpdated
    fil: "Audio", // #toBeUpdated
    zh: "音频", // #toBeUpdated
    br: "Áudio",
    es: "Audio", // #toBeUpdated
  },

  stepperFinalize: {
    en: "Finalize",
    de: "Finalisieren", // #toBeUpdated
    fr: "Finaliser", // #toBeUpdated
    ru: "Завершить", // #toBeUpdated
    id: "Menyelesaikan", // #toBeUpdated
    fil: "I-finalize", // #toBeUpdated
    zh: "敲定", // #toBeUpdated
    br: "Finalizar",
    es: "Finalizar", // #toBeUpdated
  },

  // Setup Wizard global buttons

  buttonPrevious: {
    en: "Previous",
    de: "Vorherige", // #toBeUpdated
    fr: "précédent", // #toBeUpdated
    ru: "предыдущий", // #toBeUpdated
    id: "Sebelumnya", // #toBeUpdated
    fil: "Nakaraang", // #toBeUpdated
    zh: "以前", // #toBeUpdated
    br: "Anterior",
    es: "Anterior", // #toBeUpdated
  },

  buttonNext: {
    en: "Next",
    de: "Weiter", // #toBeUpdated
    fr: "Suivant", // #toBeUpdated
    ru: "Следующий", // #toBeUpdated
    id: "Berikutnya", // #toBeUpdated
    fil: "Susunod", // #toBeUpdated
    zh: "下一步", // #toBeUpdated
    br: "Próximo",
    es: "Próximo", // #toBeUpdated
  },

  buttonSkip: {
    en: "Skip",
    de: "Skip", // #toBeUpdated
    fr: "Sauter", // #toBeUpdated
    ru: "Пропустить", // #toBeUpdated
    id: "Lewati", // #toBeUpdated
    fil: "Laktawan", // #toBeUpdated
    zh: "跳过", // #toBeUpdated
    br: "Pular",
    es: "Omitir", // #toBeUpdated
  },

  buttonDone: {
    en: "Done",
    de: "Fertig", // #toBeUpdated
    fr: "Terminé", // #toBeUpdated
    ru: "Готово", // #toBeUpdated
    id: "Selesai", // #toBeUpdated
    fil: "Tapos na", // #toBeUpdated
    zh: "完成了", // #toBeUpdated
    br: "Feito",
    es: "Terminado", // #toBeUpdated
  },

  buttonEnable: {
    en: "Enable",
    de: "Aktiviert",
    fr: "Activer", // #toBeUpdated
    ru: "Включить", // #toBeUpdated
    id: "Aktifkan", // #toBeUpdated
    fil: "Paganahin", // #toBeUpdated
    zh: "启用", // #toBeUpdated
    br: "Ativar",
    es: "Habilitar", // #toBeUpdated
  },

  buttonDisable: {
    en: "Disable",
    de: "Deaktiviert", // #toBeUpdated
    fr: "Désactiver", // #toBeUpdated
    ru: "Отключить", // #toBeUpdated
    id: "Nonaktifkan", // #toBeUpdated
    fil: "Huwag paganahin", // #toBeUpdated
    zh: "禁用", // #toBeUpdated
    br: "Desativar",
    es: "Deshabilitar", // #toBeUpdated
  },

  // Setup Wizard Language

  welcome: {
    en: "Welcome to Dota Coach!",
    de: "Willkommen bei Dota Coach!", // #toBeUpdated
    fr: "Bienvenue chez Dota Coach !", // #toBeUpdated
    ru: "Добро пожаловать в Dota Coach!", // #toBeUpdated
    id: "Selamat datang di Dota Coach!", // #toBeUpdated
    fil: "Maligayang pagdating sa Dota Coach!", // #toBeUpdated
    zh: "欢迎来到刀塔教练！", // #toBeUpdated
    br: "Bem-vindo ao Dota Coach!",
    es: "¡Bienvenido a Dota Coach!", // #toBeUpdated
  },

  setupSteps: {
    en: "We will now guide you through our setup steps which take around two minutes to complete.",
    de: "Wir führen Sie jetzt durch unsere Einrichtungsschritte, die etwa zwei Minuten dauern.", // #toBeUpdated
    fr: "Nous allons maintenant vous guider tout au long de nos étapes de configuration quideux minutes pour terminer.", // #toBeUpdated
    ru: "Теперь мы проведем вас через шаги по настройке, которыедве минуты до завершения.", // #toBeUpdated
    id: "Kami sekarang akan memandu Anda melalui langkah-langkah pengaturan kami yang mengambil sekitardua menit untuk menyelesaikannya.", // #toBeUpdated
    fil: "Gagabayan ka namin ngayon sa pamamagitan ng aming mga hakbang sa pag-setup na tumatagal sa paligiddalawang minuto upang makumpleto.", // #toBeUpdated
    zh: "现在，我们将引导您完成设置步骤还有两分钟才能完成。", // #toBeUpdated
    br: "Agora vamos guiá-lo através de nossas etapas de configuração que levam em torno de dois minutos para concluir.",
    es: "Ahora lo guiaremos a través de nuestros pasos de configuración, que requierendos minutos para completarla.", // #toBeUpdated
  },

  selectLanguage: {
    en: "Select your language:",
    de: "Wählen Sie Ihre Sprache aus:", // #toBeUpdated
    fr: "Sélectionnez votre langue :", // #toBeUpdated
    ru: "Выберите свой язык:", // #toBeUpdated
    id: "Pilih bahasa Anda:", // #toBeUpdated
    fil: "Piliin ang iyong wika:", // #toBeUpdated
    zh: "选择你的语言：", // #toBeUpdated
    br: "Selecione seu idioma:",
    es: "Selecciona tu idioma:", // #toBeUpdated
  },

  // Profiles
  dotaProfiles: {
    en: "Choose your Dota2 Profile:",
    de: "Wählen Sie Ihr Dota2-Profil:", // #toBeUpdated
    fr: "Choisissez votre profil Dota2 :", // #toBeUpdated
    ru: "Выберите свой профиль Dota2:", // #toBeUpdated
    id: "Pilih Profil Dota2 Anda:", // #toBeUpdated
    fil: "Piliin ang iyong Dota2 Profile:", // #toBeUpdated
    zh: "选择你的 Dota2 个人资料：", // #toBeUpdated
    br: "Escolha seu perfil Dota2:",
    es: "Elige tu perfil de Dota2:", // #toBeUpdated
  },

  beginner: {
    en: "Beginner",
    de: "Einsteiger", // #toBeUpdated
    fr: "débutant", // #toBeUpdated
    ru: "Начинающий", // #toBeUpdated
    id: "Pemula", // #toBeUpdated
    fil: "Baguhan", // #toBeUpdated
    zh: "初学者", // #toBeUpdated
    br: "Iniciante",
    es: "Principiante", // #toBeUpdated
  },

  veteran: {
    en: "Veteran",
    de: "Veteran", // #toBeUpdated
    fr: "vétéran", // #toBeUpdated
    ru: "Ветеран", // #toBeUpdated
    id: "Veteran", // #toBeUpdated
    fil: "Beterano", // #toBeUpdated
    zh: "老兵", // #toBeUpdated
    br: "Veterano",
    es: "Veterano", // #toBeUpdated
  },

  heroCoaching: {
    en: "Hero Voice Coaching",
    de: "Helden-Stimme", // #toBeUpdated
    fr: "Coaching vocal de héros", // #toBeUpdated
    ru: "Голосовой коучинг героев", // #toBeUpdated
    id: "Pelatihan Suara Pahlawan", // #toBeUpdated
    fil: "bayani boses Pagtuturo", // #toBeUpdated
    zh: "英雄语音教练", // #toBeUpdated
    br: "Treinamento de voz de herói",
    es: "Entrenamiento por voz de", // #toBeUpdated
  },

  eventNotifications: {
    en: "Event Notifications",
    de: "Event-Benachrichtigungen", // #toBeUpdated
    fr: "Notifications relatives", // #toBeUpdated
    ru: "Уведомления о событиях", // #toBeUpdated
    id: "Pemberitahuan Acara", // #toBeUpdated
    fil: "Mga Abiso ng Kag", // #toBeUpdated
    zh: "事件通知", // #toBeUpdated
    br: "Notificações de evento",
    es: "Avisos de eventos", // #toBeUpdated
  },

  timersBeginner: {
    en: "All timers",
    de: "Alle Timer", // #toBeUpdated
    fr: "Tous les minuteurs", // #toBeUpdated
    ru: "Все таймеры", // #toBeUpdated
    id: "Semua timer", // #toBeUpdated
    fil: "Lahat ng timers", // #toBeUpdated
    zh: "所有计时器", // #toBeUpdated
    br: "Todos os temporizadores",
    es: "Todos los temporizadores", // #toBeUpdated
  },

  profileInfoboxes: {
    en: "Player and Team Infoboxes",
    de: "Spieler- und Team-Infoboxen", // #toBeUpdated
    fr: "Infoboxes joueurs et équipes", // #toBeUpdated
    ru: "Информационные ящики об игроках и командах", // #toBeUpdated
    id: "Pemain dan Tim Infoboxes", // #toBeUpdated
    fil: "Mga Infobox ng Manlalaro at Koponan", // #toBeUpdated
    zh: "球员和队伍信息框", // #toBeUpdated
    br: "Caixas de informação de jogadores e equipes",
    es: "Infoboxes de jugadores y equipos", // #toBeUpdated
  },

  profileSubtitles: {
    en: "Subtitle Window",
    de: "Fenster mit Untertiteln", // #toBeUpdated
    fr: "Fenêtre de sous-titres", // #toBeUpdated
    ru: "Окно субтитров", // #toBeUpdated
    id: "Jendela Subtitle", // #toBeUpdated
    fil: "Window ng Subtitle", // #toBeUpdated
    zh: "字幕窗口", // #toBeUpdated
    br: "Janela de legenda",
    es: "Ventana de subtítulos", // #toBeUpdated
  },

  timersVeteran: {
    en: "Timers (Team Buyback and Ultimates disabled)",
    de: "Timer (Teamrückkauf und Ultimates deaktiviert)", // #toBeUpdated
    fr: "Minuteurs (Team Buyback et Ultimates désactivés)", // #toBeUpdated
    ru: "Таймеры (выкуп команд и Ultimates отключены)", // #toBeUpdated
    id: "Timer (Team Buyback dan Ultimates dinonaktifkan)", // #toBeUpdated
    fil: "Timers (Hindi pinagana ang Pagbili ng Koponan at Ultimates)", // #toBeUpdated
    zh: "计时器（已禁用团队回购和终极版）", // #toBeUpdated
    br: "Temporizadores (recompra de time e ultis desativados)",
    es: "Temporizadores (recompra de equipo y Ultimates desactivados)", // #toBeUpdated
  },

  profileFooter: {
    en: "You can enable or disable invidual components later in the Settings menu!",
    de: "Einzelne Komponenten können Sie später im Menü Einstellungen aktivieren oder deaktivieren!", // #toBeUpdated
    fr: "Vous pouvez activer ou désactiver certains composants ultérieurement dans le menu Paramètres !", // #toBeUpdated
    ru: "Вы можете включить или отключить отдельные компоненты позже в меню «Настройки»!", // #toBeUpdated
    id: "Anda dapat mengaktifkan atau menonaktifkan komponen invidual nanti di menu Pengaturan!", // #toBeUpdated
    fil: "Maaari mong paganahin o huwag paganahin ang mga indibidwal na bahagi mamaya sa menu ng Mga Setting!", // #toBeUpdated
    zh: "您可以稍后在 “设置” 菜单中启用或禁用单个组件！", // #toBeUpdated
    br: "Você pode ativar ou desativar componentes individuais posteriormente no menu Configurações!",
    es: "Puede activar o desactivar componentes individuales más adelante en el menú Configuración.", // #toBeUpdated
  },

  // Dotaplus
  dotaplusHeader: {
    en: "Are you subscribed to Dota Plus?",
    de: "Haben Sie Dota Plus abonniert?", // #toBeUpdated
    fr: "Êtes-vous abonné à Dota Plus ?", // #toBeUpdated
    ru: "Вы подписаны на Dota Plus?", // #toBeUpdated
    id: "Apakah Anda berlangganan Dota Plus?", // #toBeUpdated
    fil: "Nag-subscribe ka ba sa Dota Plus?", // #toBeUpdated
    zh: "你订阅了 Dota Plus 吗？", // #toBeUpdated
    br: "Você está inscrito no Dota Plus?",
    es: "¿Estás suscrito a Dota Plus?", // #toBeUpdated
  },

  yes: {
    en: "yes",
    de: "Ja", // #toBeUpdated
    fr: "oui", // #toBeUpdated
    ru: "да", // #toBeUpdated
    id: "ya", // #toBeUpdated
    fil: "oo", // #toBeUpdated
    zh: "是的", // #toBeUpdated
    br: "sim",
    es: "sí", // #toBeUpdated
  },

  no: {
    en: "no",
    de: "nein", // #toBeUpdated
    fr: "non", // #toBeUpdated
    ru: "нет", // #toBeUpdated
    id: "tidak", // #toBeUpdated
    fil: "hindi", // #toBeUpdated
    zh: "不", // #toBeUpdated
    br: "não",
    es: "no", // #toBeUpdated
  },

  dotaplusText: {
    en: "We use this information to position our Performance Tracker!",
    de: "Wir verwenden diese Informationen, um unseren Performance Tracker zu positionieren!", // #toBeUpdated
    fr: "Nous utilisons ces informations pour positionner notre outil de suivi des performances !", // #toBeUpdated
    ru: "Мы используем эту информацию для позиционирования нашего трекера производительности!", // #toBeUpdated
    id: "Kami menggunakan informasi ini untuk memposisikan Pelacak Kinerja kami!", // #toBeUpdated
    fil: "Ginagamit namin ang impormasyong ito upang iposisyon ang aming Performance Tracker!", // #toBeUpdated
    zh: "我们使用这些信息来定位我们的绩效追踪器！", // #toBeUpdated
    br: "Usamos essas informações para posicionar nosso Rastreador de Desempenho!",
    es: "¡Utilizamos esta información para posicionar nuestro Performance Tracker!", // #toBeUpdated
  },

  // Mouse click modifier
  modifierText: {
    en: "The mouse click modifier is used to prevent miss clicks on UI components while playing.<br />If you select one from the list, you have to press the modifier key while clicking on UI elements.<br />You can change the modifier later in the Settings-Menu",
    de: "Der Mausklick-Modifikator wird verwendet, um Fehlklicks auf UI-Komponenten während der Wiedergabe zu verhindern. <br />Wenn Sie eine aus der Liste auswählen, müssen Sie die Zusatztaste drücken, während Sie auf UI-Elemente klicken. <br />Sie können den Modifikator später im Einstellungsmenü ändern", // #toBeUpdated
    fr: "Le modificateur de clic de souris est utilisé pour empêcher les clics manqués sur les composants de l'interface utilisateur pendant la lecture <br />Si vous en sélectionnez un dans la liste, vous devez appuyer sur la touche de modification tout en cliquant sur les éléments de l'interface utilisateur. <br />Vous pouvez modifier le modificateur ultérieurement dans le menu Paramètres", // #toBeUpdated
    ru: "Модификатор щелчка мыши используется для предотвращения пропусков кликов по компонентам пользовательского интерфейса во время игры. <br />Если вы выберете один из них из списка, вы должны нажать клавишу-модификатор, нажимая на элементы пользовательского интерфейса. <br />Модификатор можно изменить позже в меню «Настройки»", // #toBeUpdated
    id: "Pengubah klik mouse digunakan untuk mencegah klik miss pada komponen UI saat bermain. <br />Jika Anda memilih salah satu dari daftar, Anda harus menekan tombol pengubah sambil mengklik elemen UI. <br />Anda dapat mengubah pengubah nanti di Settings-Menu", // #toBeUpdated
    fil: "Ang modifier ng pag-click ng mouse ay ginagamit upang maiwasan ang mga pag-click ng miss sa mga bahagi ng UI habang nagpe-play. <br />Kung pumili ka ng isa mula sa listahan, kailangan mong pindutin ang key ng modifier habang nag-click sa mga elemento ng UI. <br />Maaari mong baguhin ang modifier mamaya sa Mga Setting-Menu", // #toBeUpdated
    zh: "鼠标点击修改器用于防止在播放时未点击界面组件。<br />如果从列表中选择一个，则必须在单击 UI 元素的同时按下修饰键。<br />你可以稍后在 “设置” 菜单中更改修改器", // #toBeUpdated
    br: "O modificador de clique do mouse é usado para evitar cliques errados nos componentes da interface do usuário durante a reprodução. <br />Se você selecionar um na lista, terá que pressionar a tecla modificadora enquanto clica nos elementos da interface do usuário. <br />Você pode alterar o modificador posteriormente no menu Configurações",
    es: "El modificador de clic del ratón se utiliza para evitar clics fallidos en los componentes de la interfaz de usuario mientras se juega <br />Si selecciona uno de la lista, debe presionar la tecla modificadora mientras hace clic en los elementos de la interfaz de usuario. <br />Puedes cambiar el modificador más adelante en el menú de configuración", // #toBeUpdated
  },

  audioText: {
    en: "Adjust the volume and make sure the right speaker is selected.<br />Click the on Test aftewards and some audio should play.<br />You can adjust these later on in the settings menu as well.<br />",
    de: "Stellen Sie die Lautstärke ein und vergewissern Sie sich, dass der richtige Lautsprecher ausgewählt ist. <br />Klicken Sie auf Nachher testen und ein Teil des Audios sollte abgespielt werden. <br />Sie können diese auch später im Einstellungsmenü anpassen. <br />", // #toBeUpdated
    fr: "Réglez le volume et assurez-vous que le bon haut-parleur est sélectionné. <br />Cliquez ensuite sur Test et certains fichiers audio devraient être lus. <br />Vous pourrez également les ajuster ultérieurement dans le menu des paramètres. <br />", // #toBeUpdated
    ru: "Отрегулируйте громкость и убедитесь, что выбран правильный динамик. <br />После этого нажмите «Тест», и звук должен воспроизводиться. <br />Вы также можете настроить их позже в меню настроек. <br />", // #toBeUpdated
    id: "Sesuaikan volume dan pastikan speaker yang tepat dipilih. <br />Klik pada Test aftewards dan beberapa audio harus bermain. <br />Anda dapat menyesuaikannya nanti di menu pengaturan juga. <br />", // #toBeUpdated
    fil: "Ayusin ang lakas ng tunog at siguraduhin na napili ang tamang speaker. <br />I-click ang sa Pagsubok pagkatapos at dapat i-play ang ilang audio. <br />Maaari mo ring ayusin ang mga ito sa ibang pagkakataon sa menu ng mga setting pati na rin. <br />", // #toBeUpdated
    zh: "调整音量并确保选择了正确的扬声器。<br />之后单击 “测试”，即可播放一些音频。<br />您稍后也可以在设置菜单中调整这些设置。<br />", // #toBeUpdated
    br: "Ajuste o volume e verifique se o alto-falante correto está selecionado. <br />Depois clique em Testar e um pouco de áudio deve ser reproduzido. <br />Você também pode ajustá-los posteriormente no menu de configurações. <br />",
    es: "Ajuste el volumen y asegúrese de que está seleccionado el altavoz correcto. <br />Haga clic en Probar después y se reproducirá algo de audio. <br />También puedes ajustarlos más adelante en el menú de configuración. <br />", // #toBeUpdated
  },

  // Finalize

  finalizeText: {
    en: "If you want to change selections you made later on, head to the settings menu!<br />Thank you for trying Dota Coach and good luck in your games!<br />",
    de: "Wenn Sie die später getroffene Auswahl ändern möchten, gehen Sie zuEinstellungen-Menü! <br />Danke, dass du Dota Coach ausprobiert hast und viel Glück bei deinen Spielen! <br />", // #toBeUpdated
    fr: "Si vous souhaitez modifier les sélections que vous avez effectuées ultérieurement, rendez-vous sur la pagemenu des paramètres ! <br />Merci d'avoir essayé Dota Coach et bonne chance dans tes jeux ! <br />", // #toBeUpdated
    ru: "Если вы хотите изменить выбор, сделанный позже, перейдите кменю настроек! <br />Спасибо, что попробовали Dota Coach и удачи в ваших играх! <br />", // #toBeUpdated
    id: "Jika Anda ingin mengubah pilihan yang Anda buat nanti, bukamenu pengaturan! <br />Terima kasih telah mencoba Dota Coach dan semoga sukses dalam permainan Anda! <br />", // #toBeUpdated
    fil: "Kung gusto mong baguhin ang mga seleksyon na ginawa mo sa ibang pagkakataon, magtungo samenu ng mga setting! <br />Salamat sa iyo para sa pagsubok Dota Coach at good luck sa iyong mga laro! <br />", // #toBeUpdated
    zh: "如果你想更改稍后所做的选择，请前往设置菜单！<br />感谢你试用 Dota Coach，祝你在游戏中好运！<br />", // #toBeUpdated
    br: "Se você quiser alterar as seleções feitas mais tarde, vá para o menu de configurações! <br />Obrigado por experimentar o Dota Coach e boa sorte em seus jogos! <br />",
    es: "Si quieres cambiar las selecciones que hiciste más adelante, dirígete a la¡menú de configuración! <br />¡Gracias por probar Dota Coach y buena suerte en tus juegos! <br />", // #toBeUpdated
  },
};
