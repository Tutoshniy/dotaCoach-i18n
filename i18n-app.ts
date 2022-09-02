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

  // Ultimate window
  Ultimate: {
    en: "Ultimate",
    de: "Ulti",
    fr: "Ultime",
    ru: "Ультимейт",
    fil: "Ultimate",
    zh: "最终技能",
    id: "Ultimate",
    br: "Ult",
    es: "Ult",
  },
  TIMING_MODIFIERS: {
    en: "TIMING MODIFIERS",
    de: "TIMING-MODIFIKATOREN",
    fr: "MODIFICATEURS DE TEMPORISATION",
    ru: "МОДИФИКАТОРЫ ТАЙМИНГОВ",
    id: "PENGUBAH WAKTU",
    fil: "TIMING MODIFIERS",
    zh: "时序修饰符",
    br: "MODIFICADOR DE TEMPORIZADOR",
    es: "MODIFICADOR DE TEMPORIZADOR",
  },
  UltimateLevel: {
    en: "Ultimate Level",
    de: "Ultimatives Level",
    fr: "Niveau ultime",
    ru: "Уровень Ультимейта",
    id: "Tingkat Ultimate",
    fil: "Ultimate Level",
    zh: "最终技能等级",
    br: "Nível do ult",
    es: "Nivel ult",
  },
  Items: {
    en: "Items",
    de: "Gegenstände",
    fr: "Objets",
    ru: "Предметы",
    id: "Item",
    fil: "Items",
    zh: "物品",
    br: "Itens",
    es: "Items",
  },
  ItemsTooltip: {
    en: "Item notifications during the game to remind you of events such as neutral items or the availability of observer wards. You can enable or disable the different notifications individually.",
    de: `Gegenstandsbenachrichtigungen während des Spiels, um dich an Ereignisse wie neutrale Gegenstände oder die Verfügbarkeit von Observer Wards zu erinnern. Du kannst die verschiedenen Benachrichtigungen einzeln aktivieren oder deaktivieren.`,
    fr: `Notifications d'objets pendant le jeu pour vous rappeler des événements tels que des objets neutres ou la disponibilité des Oberver Wards. Tu peux activer ou désactiver les différentes notifications individuellement.`,
    ru: `Уведомления о предметах во время игры, напоминающие о таких событиях, как нейтральные предметы или наличие подопечных наблюдателей. Различные уведомления можно включать или отключать по отдельности.`, // #toBeUpdated
    id: `Pemberitahuan item selama pertandingan untuk mengingatkan Anda tentang peristiwa seperti item netral atau ketersediaan bangsal pengamat. Anda dapat mengaktifkan atau menonaktifkan notifikasi yang berbeda satu per satu.`, // #toBeUpdated
    fil: `Mga abiso ng item sa panahon ng laro upang ipaalala sa iyo ang mga kaganapan tulad ng mga neutral na item o ang pagkakaroon ng mga tagamasid ward. Maaari mong paganahin o huwag paganahin ang iba't ibang mga notification nang paisa-isa.`, // #toBeUpdated
    zh: `游戏期间的物品通知，提醒你注意中立物品或观察者守卫的可用性等事件。您可以单独启用或禁用不同的通知。`, // #toBeUpdated
    br: `Notificações de itens durante o jogo para lembrá-lo de eventos como itens neutrais ou a disponibilidade de sentinelas observadoras. Você pode ativar ou desativar as diferentes notificações individualmente.`,
    es: `Notificaciones de objetos durante el juego para recordarte eventos como objetos neutrales o la disponibilidad de salas de observadores. Puede activar o desactivar las diferentes notificaciones de forma individual.`, // #toBeUpdated
    /* OLD TEXT */
    /*de: "Während des Spiels erhältliche Benachrichtigungen, die dich an Ereignisse wie das Erscheinen von Kopfgeldrunen erinnern. Sie können die verschiedenen Nachrichten einzeln ein- oder ausschalten.",
    fr: "Notifications fournies pendant le jeu pour vous rappeler des événements tels que l'apparition de runes de prime. Vous pouvez activer ou désactiver les différents messages individuellement.",
    ru: "Уведомления появляются во время игры, чтобы напомнить вам о таких событиях, как появление Рун Богатства. Эти сообщения можно включать или выключать по отдельности.",
    id: "Pemberitahuan yang disediakan selama pertandingan untuk mengingatkan Anda tentang peristiwa seperti apprearance dari rune karunia. Anda dapat mengaktifkan atau menonaktifkan pesan yang berbeda secara individual.",
    fil: "Ang mga notifikasyon na i-provide habang nasa laro ay para ipaalaala sayo ang mga events katulad ng pag labas ng bounty runes. Pwede mo ma enable o i-disable ang iba't ibang mensahe individually.",
    zh: "游戏期间提供的通知，提醒你注意诸如赏金符文出现之类的事件。您可以单独启用或禁用不同的消息。",
    br: "Notificações providenciados durante o jogo para te lembrar de eventos como o aparecimento de runas de recompensas. Você pode habilitar ou desabilitar as diferentes mensagens individualmente.",
    es: "Notificaciones proporcionadas durante el juego para recordarle eventos como la aparición de runas de recompensa. Puede habilitar o deshabilitar los diferentes mensajes individualmente",*/
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

  // ADDED AS QUICK FIX FOR VIDEO
  Team: {
    en: "Team",
    de: "Team", // #toBeUpdated
    fr: "L'équipe", // #toBeUpdated
    ru: "Команда",
    id: "Tim", // #toBeUpdated
    fil: "Koponan", // #toBeUpdated
    zh: "球队", // #toBeUpdated
    br: "Time",
    es: "Equipo", // #toBeUpdated
  },

  // Infoboxes windows
  profilePrivacy_public: {
    en: "Public",
    de: "Publik", // 'öffentlich' ist in-game zu lang
    fr: "Public",
    ru: "Открытый",
    id: "Umum", // #toBeUpdated
    fil: "Pampubliko", // #toBeUpdated
    zh: "公众", // #toBeUpdated
    br: "Público",
    es: "Público", // #toBeUpdated
  },
  profilePrivacy_private: {
    en: "Private",
    de: "Privat",
    fr: "Privé",
    ru: "Закрытый",
    id: "Privat", // #toBeUpdated
    fil: "Pribado", // #toBeUpdated
    zh: "私人的", // #toBeUpdated
    br: "Privado",
    es: "Privado", // #toBeUpdated
  },
  profilePrivacy_smurf: {
    en: "Smurf",
    de: "Smurf",
    fr: "Smurf",
    ru: "Cмурф",
    id: "Smurf", // #toBeUpdated
    fil: "Smurf", // #toBeUpdated
    zh: "蓝精灵", // #toBeUpdated
    br: "Smurf",
    es: "Pitufo", // #toBeUpdated
  },
  statsTooltip: {
    en: "Matches played during the last 30 days |<br>wins - losses |<br> win rate",
    de: "In den letzten 30 Tagen gespielte Spiele |<br>Siege - Niederlagen |<br>Gewinnrate", // #toBeUpdated
    fr: "Matches joués au cours des 30 derniers jours |<br>victoires - défaites |<br>taux de victoire", // #toBeUpdated
    ru: "Матчи, сыгранные за последние 30 дней |<br>победы - поражения |<br>процент побед",
    id: "Pertandingan yang dimainkan selama 30 hari terakhir |<br>menang - kalah |<br>tingkat kemenangan", // #toBeUpdated
    fil: "Mga tugma na nilalaro sa loob ng huling 30 araw |<br>panalo - pagkalugi |<br>manalo rate", // #toBeUpdated
    zh: "过去 30 天内的比赛 |<br>胜负 |<br>赢率", // #toBeUpdated
    br: "Jogos disputados durante os últimos 30 dias |<br>vitórias - derrotas |<br>taxa de vitórias",
    es: "Partidos jugados durante los últimos 30 días |<br>victorias y derrotas |<br>índice de victorias", // #toBeUpdated
  },

  // Mouse click modifiers
  MouseClickModifier: {
    en: "Mouse click modifier",
    de: "Mausklickschutz",
    fr: "Modificateur de clic souris", // #toBeUpdated
    ru: "Модификатор щелчка мыши",
    id: "Pengubah klik mouse", // #toBeUpdated
    fil: "Mouse click modifier", // #toBeUpdated
    zh: "鼠标点击组合键",
    br: "Modificador do clique do mouse",
    es: "Modificador de clic del ratón", // #toBeUpdated
  },
  MouseClickModifierTooltip: {
    en: "The mouse-click modifier integration requires a user to press a modifier key when clicking on the overlay. This provides protection against interference with the game.",
    de: "Die Mausklickschutz wird dazu verwendet falschen Klicks auf Fenstern vorzubeugen. Ist der Schutz aktiviert, muss zusätzlich zum Mausklick noch der entsprechende Schutzknopf gedrückt werden.",
    fr: "L'intégration du modificateur de clic de souris nécessite que l'utilisateur appuie sur une touche de modification lorsqu'il clique sur la superposition. Cela fournit une protection contre les interférences avec le jeu.", // #toBeUpdated
    ru: "Интеграция модификатора щелчка мышью требует, чтобы пользователь нажимал клавишу-модификатор при нажатии на наложение. Это обеспечивает защиту от вмешательства в игру.",
    id: "Integrasi pengubah klik mouse mengharuskan pengguna untuk menekan tombol pengubah saat mengklik overlay. Ini memberikan perlindungan terhadap gangguan dengan permainan.", // #toBeUpdated
    fil: "Ang mouse-click modifier intergration ay nangangailangan ng user para pindutin ang modifier key kapag nagki-click sa overlay. Ito ay proteksyon laban sa interference sa laro.",
    zh: "鼠标点击组合键功能要求用户在点击DotaCoach悬浮窗时，需要按下特定的组合键，以避免游戏操作导致的干扰。",
    br: "A integração do modificador de clique do mouse requer o pressionamento de uma tecla modificadora ao clicar no overlay. Isso oferece proteção contra interferências com o jogo.",
    es: "La integración del modificador de clic del ratón requiere que el usuario presione una tecla modificadora al hacer clic en la superposición. Esto proporciona protección contra interferencias con el juego.", // #toBeUpdated
  },
  Modifier: {
    en: "Modifier",
    de: "Schutz",
    fr: "Modificateur",
    ru: "Модификатор",
    id: "Pengubah", // #toBeUpdated
    fil: "Modifier", // #toBeUpdated
    zh: "组合键选择",
    br: "Modificador",
    es: "Modificador", // #toBeUpdated
  },
  MouseClickModifierNone: {
    en: "None",
    de: "Keiner",
    fr: "Aucun",
    ru: "Отсутствует",
    id: "Tidak ada",
    fil: "None",
    zh: "无",
    br: "Nenhum",
    es: "Ninguna",
  },
  MouseClickModifierAlt: {
    en: "Alt",
    de: "Alt", // #toBeUpdated
    fr: "Alt", // #toBeUpdated
    ru: "Alt",
    id: "Alt", // #toBeUpdated
    fil: "Alt", // #toBeUpdated
    zh: "Alt", // #toBeUpdated
    br: "Alt",
    es: "Alt", // #toBeUpdated
  },
  MouseClickModifierCtrl: {
    en: "Ctrl",
    de: "Strg", // #toBeUpdated
    fr: "Ctrl", // #toBeUpdated
    ru: "Ctrl",
    id: "Ctrl", // #toBeUpdated
    fil: "Ctrl", // #toBeUpdated
    zh: "Ctrl", // #toBeUpdated
    br: "Ctrl",
    es: "Ctrl", // #toBeUpdated
  },
  MouseClickModifierShift: {
    en: "Shift",
    de: "Umschalttaste", // #toBeUpdated
    fr: "Shift", // #toBeUpdated
    ru: "Shift",
    id: "Pergeseran", // #toBeUpdated
    fil: "Shift", // #toBeUpdated
    zh: "Shift", // #toBeUpdated
    br: "Shift",
    es: "Turno", // #toBeUpdated
  },

  InfoboxesTooltip: {
    en: "Infoboxes are positioned on top of players in matches and provide insights on items and abilities.",
    de: "Infoboxen sind während Spielen über den Spielern positioniert und bieten Einblicke in Gegenstände und Fähigkeiten.",
    fr: "Les boîtes d'information sont placées au-dessus des joueurs lors des matchs et fournissent des informations sur les objets et les capacités.",
    ru: "Инфобоксы расположены поверх игроков в матчах и показывают информацию о предметах и способностях.",
    id: "Infobox diposisikan di atas pemain dalam pertandingan dan memberikan wawasan tentang item dan kemampuan.",
    fil: "Infoboxes ay naka position sa taas ng players in matches at para mag provide ng insights sa items and abilities.",
    zh: "文本提示框位于比赛中玩家的顶部，提供有关物品和技能的说明。",
    br: "Caixas de informação são posicionadas acima dos jogadores em partidas e provêem insights em itens e habilidades",
    es: "Las cajas de información se colocan encima de los jugadores en los partidos y brindan información sobre elementos y habilidades.",
  },
  InfoboxesCheckbox: {
    en: "Show infoboxes",
    de: "Infoboxen einblenden",
    fr: "Afficher les infoboxes",
    ru: "Показать инфобоксы",
    id: "Tampilkan kotak informasi",
    fil: "Ipakita ang mga infobox",
    zh: "显示文本提示框",
    br: "Mostrar caixas de informações",
    es: "Mostrar cuadros de información",
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

  Speaker: {
    en: "Speaker",
    de: "Lautsprecher",
    fr: "haut-parleur",
    ru: "Ус-во вывода",
    id: "pengeras suara",
    fil: "Speaker",
    zh: "扬声器",
    br: "Dispositivo de som",
    es: "Altavoz",
  },
  Volume: {
    en: "Volume",
    de: "Volumen",
    fr: "Volume",
    ru: "Громкость",
    id: "Volume",
    fil: "Volume",
    zh: "音量",
    br: "Volume",
    es: "Volumen",
  },
  Test: {
    en: "Test",
    de: "Testen",
    fr: "Test",
    ru: "Тест",
    id: "Tes",
    fil: "Test",
    zh: "测试",
    br: "Teste",
    es: "Test",
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
