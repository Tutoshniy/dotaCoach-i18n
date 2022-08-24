export default {
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
};
