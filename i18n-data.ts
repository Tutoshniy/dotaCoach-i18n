/**
 * This file contains all the logic for the internationalization (i18n) of the Dota Coach app.
 * 
 * Instructions for translators:
 *     - Lines with an OK, have already been reviewed by a nativ speaker
 *     - Comments and potential issues are added at the end of each line, after the // signs
 * 
 * Source for country codes: "https://www.localeplanet.com/icu/"
 * 
 * Note: Dota 2 provides the following 4 audio languages: English, Korean, Simplified Chinese and Russian
 * 
 */

 export const i18n = {
    // Lanuages currently supported by the Dota Coach App
    "config" : {
        "languages": [
            { "code": "en", "name": "English" },
            { "code": "de", "name": "Deutsch" },
            { "code": "fr", "name": "Français" },
            { "code": "ru", "name": "Русский" },
            { "code": "id", "name": "Indonesia" },
            { "code": "fil", "name": "Filipino" },
            { "code": "zh", "name": "中文" },
            { "code": "br", "name": "Brasil" }
        ]
    },

    // Translation of text for the Dota Coach App
    "text" : {
        // InGame window
        "Show/hide": {
            "en": "Show/hide",
            "de": "Ein-/Ausblenden",
            "fr": "Afficher/masquer",
            "ru": "Показать/скрыть",
            "id": "Tampilkan/sembunyikan",
            "fil": "Show/hide",
            "zh": "显示/隐藏",
            "br": "Mostrar/ocultar"
        },
        "Sign in": {
            "en": "Sign in",
            "de": "Anmelden",
            "fr": "Identifiez-vous",
            "ru": "Войдите",
            "id": "Masuk",
            "fil": "Mag-sign in",
            "zh": "登录",
            "br": "Registrar"
        },
        "Logged in": {
            "en": "Logged in",
            "de": "Angemeldet",
            "fr": "Connecté",
            "ru": "Залогинены",
            "id": "Masuk",
            "fil": "Mag-logged in",
            "zh": "注册",
            "br": "Logado"
        },
        "Logged in as": {
            "en": "Logged in as",
            "de": "Angemeldet als",
            "fr": "Connecté en tant que",
            "ru": "Вы вошли как",
            "id": "Masuk sebagai",
            "fil": "Naka-logged in bilang",
            "zh": "通过第三方账号注册",
            "br": "Logado como"
        },
        "Create ballot": {
            "en": "Create ballot",
            "de": "Stimmzettel erstellen",
            "fr": "Créer un bulletin de vote",
            "ru": "Создать бюллетень",
            "id": "Buat pemungutan suara",
            "fil": "Gumawa ng balota",
            "zh": "开启投票",
            "br": "Criar votação"
        },
        "Watch tutorial": {
            "en": "Watch tutorial",
            "de": "Tutorial ansehen",
            "fr": "Regardez le didacticiel",
            "ru": "Смотреть учебное пособие",
            "id": "Menonton tutorial",
            "fil": "Panoorin ang tutorial",
            "zh": "观看教程",
            "br": "Assistir tutorial"
        },
        "Get help": {
            "en": "Get help",
            "de": "Hilfe holen",
            "fr": "Obtenez de l'aide",
            "ru": "Получите помощь",
            "id": "Dapatkan bantuan",
            "fil": "Humingi ng tulong",
            "zh": "获取帮助",
            "br": "Obtenha ajuda"
        },
        "Report issue": {
            "en": "Report issue",
            "de": "Problem melden",
            "id": "Melaporkan masalah",
            "fr": "Problème de rapport",
            "zh": "报告问题",
            "fil": "Report issue",
            "ru": "Сообщить о проблеме",
            "br": "Relate um problema"
        },
        "Join Discord": {
            "en": "Join Discord", // OK
            "de": "Discord beitreten", // OK
            "fr": "Rejoignez Discord",
            "ru": "Присоединяйтесь к Дискорд",
            "fil": "Mag-join sa Discord",
            "zh": "加入Discord",
            "id": "Bergabung Perselisihan",
            "br": "Participar do Discord"
        },
        "Join Reddit": {
            "en": "Join Reddit",
            "de": "Reddit beitreten",
            "fr": "Rejoignez Reddit",
            "ru": "Присоединиться к Reddit",
            "id": "Bergabunglah Reddit",
            "fil": "Mag-join sa Reddit",
            "zh": "加入Reddit",
            "br": "Participar do Reddit"
        },
        "Manage subscription": {
            "en": "Manage subscription",
            "de": "Abo verwalten",
            "fr": "Gérer l'abonnement",
            "ru": "Управление подпиской",
            "zh": "管理订阅",
            "fil": "I-manage ang subscription",
            "id": "Kelola langganan",
            "br": "Gerenciar assinatura"
        },
        "Change settings": {
            "en": "Change settings", // OK
            "de": "Einstellungen ändern", // OK
            "fr": "Modifier les paramètres",
            "ru": "Изменить настройки",
            "id": "Ubah pengaturan",
            "fil": "I-change ang settings",
            "zh": "更改设置",
            "br": "Alterar configurações"
        },
        "Click to sign in": {
            "en": "Click to sign in to your Overwolf account",
            "de": "Klicke hier, um dich bei deinem Overwolf-Konto anzumelden",
            "fr": "Cliquez pour vous connecter à votre compte Overwolf",
            "ru": "Нажмите, чтобы войти в свой аккаунт Overwolf",
            "id": "Klik untuk masuk ke akun Overwolf Anda",
            "fil": "I-click para mag sign in sa Overwolf account mo",
            "zh": "点击登录你的 Overwolf 账户",
            "br": "Clique para entrar com sua conta da Overwolf"
        },

        // Help window
        "HELP": {
            "en": "HELP",
            "de": "HILFE",
            "fr": "AIDEZ-MOI",
            "ru": "ПОМОЩЬ",
            "id": "MEMBANTU",
            "fil": "HELP",
            "zh": "帮助",
            "br": "AJUDA"
        },
        "FEEDBACK": {
            "en": "FEEDBACK",
            "de": "FEEDBACK",
            "fr": "COMMENTAIRES",
            "ru": "ОБРАТНАЯ СВЯЗЬ",
            "id": "UMPAN BALIK",
            "fil": "FEEDBACK",
            "zh": "反馈",
            "br": "COMENTÁRIOS"
        },
        "Report an issue": {
            "en": "Report an issue/bug or request support",
            "de": "Ein Problem/Bug melden oder Support anfragen",
            "fr": "Signaler un problème/un bogue ou demander de l'aide",
            "ru": "Сообщить о проблеме/ошибке или обратиться в службу поддержки",
            "id": "Melaporkan masalah/bug atau meminta dukungan",
            "fil": "Mag-report ng issue/bug o mag-request ng support",
            "zh": "报告问题/错误或请求支持",
            "br": "Relate um problema"
        },
        "Share with us": {
            "en": "What do you want to share with us?",
            "de": "Was möchtest du mit uns teilen?",
            "fr": "Qu'est-ce que tu souhaites partager avec nous ?",
            "ru": "Что вы хотите с нами поделиться?",
            "id": "Apa yang ingin Anda bagikan dengan kami?",
            "fil": "Ano gusto mong i-share sa amin?",
            "zh": "给开发团队留言",
            "br": "O que você gostaria de compartilhar conosco?"
        },
        "Issue description": {
            "en": "Enter description of issue/bug or request for support",
            "de": "Geben Sie eine Beschreibung des Problems/Bugs oder eine Supportanfrage ein",
            "fr": "Entrez la description du problème/du bogue ou de la demande d'assistance",
            "ru": "Введите описание проблемы/ошибки или запроса на поддержку",
            "id": "Masukkan deskripsi masalah/bug atau permintaan untuk dukungan",
            "fil": "Ilagay ang description ng issue/bug or request ng support",
            "zh": "输入问题/错误描述或请求支持",
            "br": "Descreva o problema/bug ou pedido de suporte"
        },
        "SEND_REPORT": {
            "en": "SEND REPORT",
            "de": "BERICHT SENDEN",
            "fr": "ENVOYER UN RAPPORT",
            "ru": "ОТПРАВИТЬ ОТЧЕТ",
            "id": "KIRIM LAPORAN",
            "fil": "SEND REPORT",
            "zh": "发送报告",
            "br": "ENVIAR RELATO"
        },
        "Contact details": {
            "en": "Contact details (E-Mail/Discord)",
            "de": "Kontaktdaten (E-Mail/Discord)",
            "fr": "Coordonnées (E-Mail/Discord)",
            "ru": "Контактные данные (электронная почта/Discord)",
            "id": "Rincian kontak (E-Mail/Perselisihan)",
            "fil": "Contact details (E-Mail/Discord)",
            "zh": "联系方式（电子邮件/Discord）",
            "br": "Detalhes de contato (E-Mail/Discord)"
        },
        "Enter contact details": {
            "en": "Enter your contact details",
            "de": "Gib deine Kontaktdaten ein",
            "fr": "Entrez vos coordonnées",
            "ru": "Введите свои контактные данные",
            "id": "Masukkan detail kontak Anda",
            "fil": "Ilagay mo ang iyong contact details",
            "zh": "输入您的联系方式",
            "br": "Insira seus detalhes de contato"
        },
        "Log files": {
            "en": "Attach Dota Coach log files",
            "de": "Dota-Coach-Protokolldateien anhängen",
            "fr": "Joindre les fichiers journaux Dota Coach",
            "ru": "Прикрепить файлы журнала Dota Coach",
            "id": "Lampirkan file log Dota Coach",
            "fil": "Attach Dota Coach log files",
            "zh": "附上 Dota Coach 日志文件",
            "br": "Anexar arquivos de registro do Dota Coach"
        },

        // Settings window
        "SETTINGS": {
            "en": "SETTINGS",
            "fr": "PARAMÈTRES",
            "de": "EINSTELLUNGEN",
            "ru": "НАСТРОЙКИ",
            "id": "PENGATURAN",
            "fil": "SETTINGS",
            "zh": "设置",
            "br": "CONFIGURAÇÕES"
        },
        "version": {
            "en": "version",
            "de": "Version",
            "fr": "version",
            "ru": "версия",
            "id": "versi",
            "fil": "version",
            "zh": "版本",
            "br": "versão"
        },
        "channel": {
            "en": "channel",
            "de": "Kanal",
            "fr": "canal",
            "ru": "канал",
            "fil": "channel",
            "zh": "channel", // 不太确定
            "id": "saluran",
            "br": "canal"
        },
        "production": {
            "en": "production",
            "de": "Produktion",
            "fr": "production",
            "ru": "производства",
            "fil": "produksyon",
            "zh": "production", // 不太确定
            "id": "produksi",
            "br": "produção"
        },
        "beta": {
            "en": "beta",
            "de": "Beta",
            "fr": "bêta",
            "ru": "бета",
            "id": "beta",
            "fil": "beta",
            "zh": "测试版",
            "br": "beta"
        },
        "Infoboxes": {
            "en": "Infoboxes", // OK
            "de": "Infoboxen",
            "fr": "Infobox",
            "ru": "Инфобоксы", // OK
            "id": "Infobox",
            "zh": "信息框",
            "br": "Caixas de informação"
        },
        "InfoboxesTooltip": {
            "en": "Infoboxes are positioned on top of players in matches and provide insights on items and abilities.",
            "de": "Infoboxen sind während Spielen über den Spielern positioniert und bieten Einblicke in Gegenstände und Fähigkeiten.",
            "fr": "Les boîtes d'information sont placées au-dessus des joueurs lors des matchs et fournissent des informations sur les objets et les capacités.",
            "ru": "Инфобоксы расположены поверх игроков в матчах и предоставляют информацию о предметах и способностях.",
            "id": "Infobox diposisikan di atas pemain dalam pertandingan dan memberikan wawasan tentang item dan kemampuan.",
            "fil": "Infoboxes ay naka position sa taas ng players in matches at para mag provide ng insights sa items and abilities.",
            "zh": "信息框位于比赛中玩家的顶部，提供有关物品和技能的说明。",
            "br": "Caixas de informação são posicionadas acima dos jogadores em partidas e provêem insights em itens e habilidades"
        },
        "ItemsAndAbilities": {
            "en": "Items & abilities", // OK
            //"de": "Gegenstände & Fähigkeiten",
            "de": "Gegenstände & Abilities", // OK
            "fr": "Objets et capacités",
            "ru": "Предметы и навыки", // OK, long form: "Предметы и способности"
            "id": "Item & kemampuan",
            "fil": "Items at abilities", // OK
            "zh": "物品和技能",
            "br": "Itens e habilidades"
        },
        "Timers": {
            "en": "Timers",
            "de": "Timer",
            "fr": "Minuteries",
            "ru": "Таймеры", // OK
            "id": "Timer",
            "fil": "Timers",
            "zh": "计时器",
            "br": "Temporizador"
        },
        "TimersTooltip": {
            "en": "The timer for Roshan, Glyph of Fortification, Buybacks and Ultimates can be turned off and on here.",
            "de": "Der Timer für Roshan, Glyphe der Befestigung, Rückkäufe und Ultimates kann hier ein- und ausgeschaltet werden.",
            "fr": "Le chronomètre pour Roshan, Glyphe de fortification, Rachats et Ultimates peut être désactivé et activé ici.",
            "ru": "Таймер для Рошана, Символа укрепления, выкупа и ультиматов можно отключить и включить здесь.",
            "id": "Timer untuk Roshan, Glyph of Fortification, Buybacks dan Ultimates dapat dimatikan dan di sini.",
            "fil": "Ang timer para sa Roshan, Glyph of Fortification, Buybacks and Ultimates ay pwede ma i-turn off at on dito.",
            "zh": "肉山、防御符文、买活和终极技能的计时器可以在这里关闭和开启。",
            "br": "O temporizador para Roshan, glifo de fortificação, reviver e ultis podem ser desativados e ativados aqui."
        },
        "RoshanAndGlyph": {
            "en": "Roshan & glyph", // OK
            "de": "Roshan & Glyphe", // OK
            "fr": "Roshan & Glyphe",
            "ru": "Рошан и глиф", // Dota 2 uses "укрепление строений" for Glpyh of Fortification. Translation recommends to keep "глиф" as it is shorter and most of gamers (according to her Internet research) already use this term, and just in case there are a few articles in Russian explaining what "глиф" is.
            "id": "Roshan & mesin terbang",
            "fil": "Roshan at glyph",
            "zh": "肉山和防御符文",
            "br": "Roshan e glifo"
        },
        "TeamBuybacks": {
            "en": "Team buybacks", // OK
            "de": "Team Rückkäufe", // OK
            "fr": "Rachats d'équipe",
            "ru": "Командный выкуп", // OK
            "id": "Buyback tim",
            "fil": "Team buybacks",
            "zh": "团队买活情况",
            "br": "Reviver aliados"
        },
        "TeamUltimates": {
            "en": "Team ultimates", // OK
            "de": "Team Ultimates", // OK
            "fr": "Ultimes d'équipe",
            "ru": "Способности команды", // OK, long form: "Особые командные способности"
            "id": "Ultimates tim",
            "fil": "Team ultimates",
            "zh": "团队终极技能使用情况",
            "br": "Ultis aliados"
        },
        "EnemyBuybacks": {
            "en": "Enemy buybacks", // OK
            "de": "Feindliche Rückkäufe", // OK
            "fr": "Rachats d'ennemis",
            "ru": "Вражеский выкуп", // OK
            "id": "Buyback musuh",
            "fil": "Enemy buybacks",
            "zh": "敌人买活情况",
            "br": "Reviver inimigos"
        },
        "EnemyUltimates": {
            "en": "Enemy ultimates", // OK
            "de": "Feindliche Ultimates", // OK
            "fr": "Ultimes ennemis",
            "ru": "Способности врага", // OK, long form: "Особые вражеские способности"
            "id": "Ultimates musuh",
            "fil": "Enemy ultimates",
            "zh": "敌人终极技能使用情况",
            "br": "Ultis inimigos"
        },
        "subsOnly": {
            "en": "subs only",
            "de": "nur U-Boote",
            "fr": "sous-marins uniquement",
            "ru": "только подложки",
            "fil": "subs only",
            "zh": "仅限订阅者使用",
            "id": "kapal selam saja",
            "br": "só para inscritos"
        },
        "Coaching": {
            "en": "Coaching",
            "fr": "Coaching",
            "de": "Coaching",
            "ru": "коуТренерство", // OK
            "id": "Coaching",
            "fil": "Coaching",
            "zh": "辅导",
            "br": "Treinamento"
        },
        "CoachingTooltip": {
            "en": "Coaching for hero picks, item builds, own hero (voice) and enemy heroes (voice) can be set here.",
            "de": "Coaching für Heldenauswahl, Item-Builds, eigener Held (Stimme) und feindliche Helden (Stimme) können hier eingestellt werden.",
            "fr": "L'entraînement pour les choix de héros, les constructions d'objets et les héros ennemis peut être défini ici.", // Needs to be updated
            "ru": "Здесь можно настроить коучинг для выбора героев, сборки предметов и вражеских героев.", // Needs to be updated
            "id": "Pelatihan untuk memilih pahlawan, item membangun dan pahlawan musuh dapat diatur di sini.", // Needs to be updated
            "fil": "Coaching para sa hero picks, item builds, own hero (voice) at enemy heroes (voice) ay pwede ma i-set dito.",
            "zh": "可以在这里设置英雄选择、物品推荐和双方英雄相关内容（语音）的指导。", // Needs to be updated
            "br": "Treinamento para seleção de heróis, construção de itens, próprio herói (voz) e heróis inimigos (voz) podem ser configurados aqui."
        },
        "HeroPicksAndItemBuilds": {
            "en": "Hero picks & item builds", // OK
            "de": "Heldenauswahl & Items", // OK
            "fr": "Choix de héros et constructions d'objets",
            "ru": "Выбрать героев и предметы", // OK, long form: "Характеристики героев и предметов"
            "id": "Pahlawan picks & item membangun",
            "fil": "Hero picks at item builds",
            "zh": "英雄选择和物品推荐",
            "br": "Seleção de heróis e construção de itens"
        },
        "OwnHeroVoice": {
            "en": "Own hero (voice)", // OK
            "de": "Eigener Held", // OK
            "fr": "Propre héros (voix)",
            "ru": "Свой герой (голос)", // OK, short form: "Собственный герой (голос)"
            "id": "Pahlawan sendiri (suara)",
            "fil": "Saliring hero (boses)",
            "zh": "自己的英雄（语音）",
            "br": "Próprio herói (voz)"
        },
        "EnemyHeroesVoice": {
            "en": "Enemy heroes (voice)", // OK
            "de": "Feindliche Helden", // OK
            "fr": "Héros ennemis (voix)",
            "ru": "Вражеские герои (голос)", // OK
            "id": "Pahlawan musuh (suara)",
            "fil": "Enemy heroes (boses)",
            "zh": "敌方英雄（语音）",
            "br": "Heróis inimigos (voz)"
        },
        "Notifications": {
            "en": "Notifications", // OK
            "de": "Benachrichtigungen", // OK
            "fr": "Les notifications",
            "ru": "Уведомления", // OK
            "id": "Notifikasi",
            "fil": "Notifikasyon",
            "zh": "通知",
            "br": "Notificações"
        },
        "NotificationsTooltip": {
            "en": "Notifications provided during the game to remind you of events such as the apprearance of bounty runes. You can enable or disable the different messages individually.",
            "de": "Während des Spiels erhältliche Benachrichtigungen, die dich an Ereignisse wie das Erscheinen von Kopfgeldrunen erinnern. Sie können die verschiedenen Nachrichten einzeln ein- oder ausschalten.",
            "fr": "Notifications fournies pendant le jeu pour vous rappeler des événements tels que l'apparition de runes de prime. Vous pouvez activer ou désactiver les différents messages individuellement.",
            "ru": "Уведомления, предоставляемые во время игры, чтобы напомнить вам о таких событиях, как появление рун с наградами. Различные сообщения можно включать или отключать по отдельности.",
            "id": "Pemberitahuan yang disediakan selama pertandingan untuk mengingatkan Anda tentang peristiwa seperti apprearance dari rune karunia. Anda dapat mengaktifkan atau menonaktifkan pesan yang berbeda secara individual.",
            "fil": "Ang mga notifikasyon na i-provide habang nasa laro ay para ipaalaala sayo ang mga events katulad ng pag labas ng bounty runes. Pwede mo ma enable o i-disable ang iba't ibang mensahe individually.",
            "zh": "游戏期间提供的通知，提醒你注意诸如赏金符文出现之类的事件。您可以单独启用或禁用不同的消息。",
            "br": "Notificações providenciados durante o jogo para te lembrar de eventos como o aparecimento de runas de recompensas. Você pode habilitar ou desabilitar as diferentes mensagens individualmente."
        },
        "BountyRunes": {
            "en": "Bounty runes", // OK
            "de": "Bounty Runes", // OK
            "fr": "Bounty runes",
            "ru": "Bounty Runes", // OK "Руны богатства"
            "id": "Rune Bounty",
            "fil": "Bounty runes",
            "zh": "赏金符",
            "br": "Runas de recompensas"
        },
        "WaterAndPowerRunes": {
            "en": "Water & power runes", // OK
            "de": "Water & Power Runes", // OK
            "fr": "Runes pour l'eau et l'énergie",
            "ru": "Water & Power Runes", // OK (Руны воды и силы)
            "id": "Rune air & daya",
            "fil": "Water at power runes",
            "zh": "圣水符和属性符",
            "br": "Runas de água e poder"
        },
        "NeutralItems": {
            "en": "Neutral items",
            "de": "Neutrale Gegenstände",
            "fr": "Articles neutres",
            "ru": "Нейтральные предметы", // OK
            "id": "Item netral",
            "fil": "Neutral items",
            "zh": "中立物品",
            "br": "Itens neutros"
        },
        "ObserverWards": {
            "en": "Observer wards", // OK
            "de": "Observer Wards", // OK
            "fr": "Les quartiers des observateurs",
            "ru": "Observer Wards", // OK
            "id": "Pengamat bangsal",
            "fil": "Observer wards",
            "zh": "侦查守卫/假眼",
            "br": "Sentinelas observadoras"
        },
        "SmokeOfDeceit": {
            "en": "Smoke of deceit", // OK
            "de": "Smoke of Deceit", // OK
            "fr": "La fumée de la tromperie",
            "ru": "Smoke of Deceit", // OK
            "id": "Asap tipu daya",
            "fil": "Smoke of deceit",
            "zh": "诡计之雾",
            "br": "Fumaça da enganação"
        },
        "TomeOfKnowledge": {
            "en": "Tome of knowledge", // OK
            "de": "Tome of Knowledge", // OK
            "fr": "Tome de connaissances",
            "ru": "Tome of Knowledge", // OK
            "id": "Tome pengetahuan",
            "fil": "Tome of knowledge",
            "zh": "知识之书",
            "br": "Tomo do conhecimento"
        },
        "AghanimsShard": {
            "en": "Aghanim's shard", // OK
            "de": "Aghanims Splitter", // OK
            "fr": "Fragment d'Aghanim",
            "ru": "Aghanim's Shard", // OK
            "id": "Shard Aghanim",
            "fil": "Aghanim's shard",
            "zh": "阿哈利姆的碎片",
            "br": "Fragmento de Aghanim"
        },
        "SiegeCreeps": {
            "en": "Siege creeps", // OK
            "de": "Belagerungsdiener", // OK
            "fr": "Creeps de siège",
            "ru": "Катапульта", // OK
            "zh": "攻城小兵",
            "fil": "Siege creeps",
            "id": "Pengepungan merayap",
            "br": "Criaturas de cerco"
        },
        "Daytime": {
            "en": "Daytime", // OK
            "de": "Tageszeit", // OK
            "fr": "diurne",
            "ru": "Дневное время", // OK
            "id": "Siang",
            "fil": "Daytime",
            "zh": "昼夜交替",
            "br": "Dia"
        },
        "Subtitles": {
            "en": "Subtitles", // OK
            "de": "Untertitel", // OK
            "fr": "Sous-titres",
            "ru": "Субтитры", // OK
            "id": "subtitel",
            "fil": "Subtitles",
            "zh": "字幕",
            "br": "Legendas"
        },
        "SubtitlesTooltip": {
            "en": "Configure manual and automated message sharing through the Dota 2 team chat. Manual message sharing is triggered by left-clicking on timers or the loudspeaker.",
            "de": "Konfigurieren Sie die manuelle und automatisierte Nachrichtenfreigabe über den Dota 2-Teamchat. Die manuelle Nachrichtenfreigabe wird durch Linksklick auf Timer oder Lautsprecher ausgelöst.",
            "fr": "Configurez le partage manuel et automatique des messages via le chat d'équipe Dota 2. Le partage manuel des messages est déclenché par un clic gauche sur les minuteries ou le haut-parleur.",
            "ru": "Настройте ручной и автоматический обмен сообщениями через командный чат Dota 2. Ручной обмен сообщениями запускается щелчком левой кнопки мыши на таймерах или громкоговорителе.",
            "id": "Konfigurasikan berbagi pesan manual dan otomatis melalui obrolan tim Dota 2. Berbagi pesan manual dipicu oleh klik kiri pada timer atau loudspeaker.",
            "fil": "I-configure ang manual at automated message sharing sa Dota 2 team chat. Manual message sharing ay ma i-trigger by left-clicking sa timers or sa loudspeaker.",
            "zh": "通过Dota 2团队聊天配置手动和自动消息共享。左键单击计时器或扬声器即可触发手动信息共享。",
            "br": "Configure o compartilhamento de mensagens manuais e automáticas no chat de time do Dota 2. Compartilhamento manual de mensagens é acionado usando o clique com o botão esquerdo do mouse no ícone do autofalante."
        },
        "ShowSubtitles": {
            "en": "Show subtitles", // OK
            "de": "Untertitel anzeigen", // OK
            "fr": "Afficher les sous-titres",
            "ru": "Показывать субтитры", // OK
            "id": "Tampilkan sub judul",
            "fil": "Show subtitles",
            "zh": "显示字幕",
            "br": "Mostrar legendas"
        },
        "ManualSharing": {
            "en": "Manual sharing", // OK
            "de": "Manuelles Teilen", // OK
            "fr": "Partage manuel",
            "ru": "Делиться вручную", // OK
            "id": "Berbagi manual",
            "fil": "Manual sharing",
            "zh": "手动共享",
            "br": "Compartilhamento manual"
        },
        "AutomatedSharing": {
            "en": "Automated sharing", // OK
            "de": "Automatisches Teilen", // OK
            "fr": "Partage automatique",
            "ru": "Делиться автоматически", // OK
            "id": "Berbagi otomatis",
            "fil": "Automated sharing",
            "zh": "自动共享",
            "br": "Compartilhamento automático"
        },
        "RoshanAndAegis": {
            "en": "Roshan & Aegis", // OK
            "de": "Roshan & Aegis", // OK
            "fr": "Roshan & Aegis",
            "ru": "Рошан и Aegis", // OK (Рошан и Эгида)
            "id": "Roshan & Aegis",
            "fil": "Roshan at Aegis",
            "zh": "肉山和防御符文",
            "br": "Roshan e Aegis"
        },
        "PerformanceTracker": {
            "en": "Performance tracker", // OK
            "de": "Leistungs-Tracker", // OK
            "fr": "Traqueur de performance",
            "ru": "Трекер КПД", // OK, long form: "Трекер производительности"
            "id": "Pelacak kinerja",
            "fil": "Performance tracker",
            "zh": "Performance tracker", //不确定
            "br": "Rastreador de performance"
        },
        "PerformanceTrackerTooltip": {
            "en": "Configure the performance tracker to your needs. Note that the layout depends on your Dota Plus subscription in Dota 2.",
            "de": "Konfigurieren Sie den Performance-Tracker nach Ihren Bedürfnissen. Beachten Sie, dass das Layout von Ihrem Dota Plus-Abonnement in Dota 2 abhängt.",
            "fr": "Configurez le suivi des performances selon vos besoins. Notez que la mise en page dépend de votre abonnement Dota Plus dans Dota 2.",
            "ru": "Настройте средство отслеживания производительности в соответствии со своими потребностями. Обратите внимание, что раскладка зависит от вашей подписки на Dota Plus в Dota 2.",
            "id": "Konfigurasikan pelacak kinerja sesuai kebutuhan Anda. Perhatikan bahwa tata letak tergantung pada langganan Dota Plus Anda di Dota 2.",
            "fil": "I-configure ang performance tracker sa pangangailangan mo. Note na ang layout ay naka depende sa iyong Dota Plus susbscription sa Dota 2.",
            "zh": "Configure the performance tracker to your needs. Note that the layout depends on your Dota Plus subscription in Dota 2.", //同上不确定
            "br": "Configure o rastreador de performance de acordo com suas necessidades. Note que o layout depende de sua assinatura Dota Plus no Dota 2."
        },
        "ShowTracker": {
            "en": "Show tracker",
            "de": "Tracker anzeigen",
            "fr": "Afficher le tracker",
            "ru": "Показать трекер",
            "id": "Tampilkan pelacak",
            "fil": "Ipakita ang tracker",
            "zh": "Show tracker", //同上不确定
            "br": "Mostrar rastreador"
        },
        "DotaPlusSubscriber": {
            "en": "Dota Plus subscriber", // OK
            "de": "Dota Plus-Abonnent", // OK
            "fr": "Abonné Dota Plus",
            "ru": "Подписчик Dota Plus", // OK
            "id": "Pelanggan Dota Plus",
            "fil": "Dota Plus subscriber",
            "zh": "刀塔 Plus 订阅者",
            "br": "Assinante Dota Plus"
        },
        "GoalLeft": {
            "en": "Goal left:", // OK
            "de": "Ziel links:", // OK
            "fr": "But à gauche :",
            "ru": "Цель слева:", // OK
            "id": "Tujuan kiri:",
            "fil": "Goal left:",
            "zh": "Goal left:", //不确定
            "br": "Objetivo à esquerda: "
        },
        "GoalRight": {
            "en": "Goal right:", // OK
            "de": "Ziel rechts:", // OK
            "fr": "But droit :",
            "ru": "Цель справа:", // OK
            "id": "Tujuan yang tepat:",
            "fil": "Goal right:",
            "zh": "Goal right:", //不确定
            "br": "Objetivo à direita: "
        },
        "YourMedian": {
            "en": "Your median", // OK
            "de": "Dein Median", // OK
            "fr": "Votre médiane",
            "ru": "Ваш центр", // OK
            "id": "Median Anda",
            "fil": "Your median",
            "zh": "你的平均表现",
            "br": "Sua média"
        },
        "YourBest": {
            "en": "Your best", // OK
            "de": "Dein Bestresultat", // OK
            "fr": "Votre meilleur",
            "ru": "Ваш лучший",
            "id": "Yang terbaik",
            "fil": "Your best",
            "zh": "你的最佳表现",
            "br": "Seu melhor"
        },
        "PeerMedian": {
            "en": "Peer median", // OK
            "de": "Peer Median", // OK
            "fr": "Médiane des pairs",
            "ru": "Центр соратников", // OK
            "id": "Median sebaya",
            "fil": "Peer median", 
            "zh": "同水平的平均表现",
            "br": "De acordo com as médias"
        },
        "PeerBest": {
            "en": "Peer best",  // OK
            "de": "Peer Bestresultat",  // OK
            "fr": "Meilleur par les pairs",
            "ru": "Лучший пир",
            "id": "Peer terbaik",
            "fil": "Peer best",
            "zh": "同水平的最佳表现",
            "br": "De acordo com o melhor"
        },
        "None": {
            "en": "None",
            "de": "Keine",
            "fr": "Aucun",
            "ru": "Нет",
            "id": "Tidak ada",
            "fil": "None",
            "zh": "无",
            "br": "Nenhum"
        },
        "YourNameLeaderboard": {
            "en": "Your name (for leaderboard)",
            "de": "Dein Name (für Bestenliste)",
            "fr": "Votre nom (pour le classement)",
            "ru": "Имя (для рейтинга)", // OK, version too long: "Ваше имя (для таблицы лидеров)"
            "id": "Nama Anda (untuk leaderboard)",
            "fil": "Pangalan mo (para sa leaderboard)",
            "zh": "你的名字（用于排行榜）",
            "br": "Seu nome (para tabela de líderes)"
        },
        "HideMainWindow": {
            "en": "Hide main window", // OK
            "de": "App ausblenden", // OK
            "fr": "Masquer la fenêtre principale",
            "ru": "Скрыть окно", // OK, versoin too long: "Скрыть главное окно"
            "id": "Sembunyikan jendela utama",
            "fil": "Hide main window",
            "zh": "隐藏主窗口",
            "br": "Ocultar janela principal"
        },
        "HideMainWindowTooltip": {
            "en": "This feature allows you to automatically show and hide app during game.",
            "de": "Mit dieser Funktion können Sie die App während des Spiels automatisch ein- und ausblenden.",
            "fr": "Cette fonctionnalité vous permet d'afficher et de masquer automatiquement l'application pendant le jeu.",
            "ru": "Эта функция позволяет автоматически показывать и скрывать приложение во время игры.",
            "id": "Fitur ini memungkinkan Anda untuk secara otomatis menampilkan dan menyembunyikan aplikasi selama pertandingan.",
            "fil": "Etong feature na ito ay para pwede mong makita o maitago ang app habang nasa laro.",
            "zh": "此功能允许您在游戏过程中自动显示和隐藏应用程序。",
            "br": "Essa função permite mostrar e ocultar automaticamente o aplicativo durante o jogo."
        },
        "DuringHeroSelection": {
            "en": "During hero selection", // OK
            "de": "Während Heldenauswahl", // OK
            "fr": "Pendant la sélection des héros",
            "ru": "Во время выбора героя", // OK
            "id": "Selama pemilihan pahlawan",
            "fil": "Habang nasa hero selection",
            "zh": "在英雄选择过程中",
            "br": "Durante a seleção de heróis"
        },
        "DuringGame": {
            "en": "During game", // OK
            "de": "Während Spiel", // OK
            "fr": "Pendant le match",
            "ru": "Во время игры", // OK
            "id": "Selama pertandingan",
            "fil": "Habang nasa laro.",
            "zh": "在比赛中",
            "br": "Durante a partida"
        },
        "MisclickProtection": {
            "en": "Misclick protection", // OK
            "de": "Fehlklickschutz", // OK
            "fr": "Protection contre les faux clics",
            "ru": "Защита от промаха", // OK
            "id": "Perlindungan misclick",
            "fil": "Misclick protection",
            "zh": "误点击保护",
            "br": "Proteção contra misclick" // I know what it is, but I've never seen translation to this being used
        },
        "MisclickProtectionTooltip": {
            "en": "Time in seconds that input isn't registered when the mouse first enters the timers. Default is 0.2 seconds.", // This seriously needs a better wording
            "de": "Zeit in Sekunden, die nicht registriert wird, wenn die Maus die Timer zum ersten Mal betritt. Die Standardeinstellung ist 0,2 Sekunden.",
            "fr": "Durée en secondes pendant laquelle l'entrée n'est pas enregistrée lorsque la souris entre pour la première fois dans les temporisateurs. La valeur par défaut est 0,2 seconde.",
            "ru": "Время в секундах, когда мышь впервые входит в таймеры, ввод не регистрируется. По умолчанию 0,2 секунды.",
            "fil": "Oras sa segundo na hindi nakarehistro ang input ng unang pumasok ang mouse sa timer. Default ay 0.2 seconds.",
            "id": "Waktu dalam hitungan detik bahwa input tidak terdaftar ketika mouse pertama kali memasuki timer. Default adalah 0,2 detik.",
            "zh": "鼠标首次进入计时器后忽略点击的时间（以秒为单位）。默认值为0.2秒。",
            "br": "Tempo em segundos para que o movimento do mouse não seja registrado na primeira vez que ele entrar nos temporizadores. Padrão é 0.2 segundos."
        },
        "Delay": {
            "en": "Delay", // OK
            "de": "Verzug", // OK
            "fr": "Retard",
            "ru": "Задержка", // OK
            "id": "Keterlambatan",
            "fil": "Delay",
            "zh": "延迟",
            "br": "Demora"
        },
        "Audio": {
            "en": "Audio", // OK
            "de": "Audio", // OK
            "fr": "Audio",
            "ru": "Аудио", // OK
            "id": "Audio",
            "fil": "Audio",
            "zh": "音频",
            "br": "Áudio"
        },
        "Disabled": {
            "en": "Disabled",
            "ru": "Инвалид",
            "fr": "handicapé",
            "de": "Deaktiviert",
            "id": "Dinonaktifkan",
            "fil": "Disabled",
            "zh": "已禁用",
            "br": "Desabilitado"
        },
        "AudioTooltip": {
            "en": "Select speaker device and set volume.",
            "de": "Lautsprechergerät wählen und Lautstärke einstellen.",
            "fr": "Sélectionnez le haut-parleur et réglez le volume.",
            "ru": "Выберите акустическое устройство и установите громкость.",
            "id": "Pilih perangkat speaker dan atur volume.",
            "fil": "Mag select ng speaker device at set volume.",
            "zh": "选择扬声器设备并设置音量。",
            "br": "Selecione o dispositivo de som e ajuste o volume."
        },
        "Speaker": {
            "en": "Speaker", // OK
            "de": "Lautsprecher", // OK
            "fr": "haut-parleur",
            "ru": "Колонка", // OK
            "id": "pengeras suara",
            "fil": "Speaker",
            "zh": "扬声器",
            "br": "Dispositivo de som"
        },
        "Volume": {
            "en": "Volume", // OK
            "de": "Volumen", // OK
            "fr": "Volume",
            "ru": "Громкость", // OK
            "id": "Volume",
            "fil": "Volume",
            "zh": "音量",
            "br": "Volume"
        },
        "Test": {
            "en": "Test", // OK
            "de": "Testen", // OK
            "fr": "Test",
            "ru": "Проверка", // OK
            "id": "Tes",
            "fil": "Test",
            "zh": "测试",
            "br": "Teste"
        },
        "SecondScreen": {
            "en": "Second screen", // OK
            "de": "Zweiter Bildschirm", // OK
            "fr": "Deuxième écran",
            "ru": "Второй экран", // OK
            "id": "Layar kedua",
            "fil": "Second screen",
            "zh": "第二个屏幕",
            "br": "Segunda tela"
        },
        "SecondScreenTooltip": {
            "en": "Users playing in windowed mode or having two or more monitors can benefit from a second screen providing additional information.",
            "de": "Benutzer, die im Fenstermodus spielen oder über zwei oder mehr Monitore verfügen, können von einem zweiten Bildschirm mit zusätzlichen Informationen profitieren.",
            "fr": "Les utilisateurs jouant en mode fenêtré ou disposant de deux moniteurs ou plus peuvent bénéficier d'un deuxième écran fournissant des informations supplémentaires.",
            "ru": "Пользователи, играющие в оконном режиме или имеющие два или более монитора, могут получить дополнительную информацию на втором экране.",
            "id": "Pengguna yang bermain dalam mode berjendela atau memiliki dua atau lebih monitor bisa mendapatkan keuntungan dari layar kedua yang memberikan informasi tambahan.",
            "fil": "Ang users na nag lalaro ng windowed mode o merong dalawang monitor o mas marami ay makikinabang mula sa pangalawang screen na nag pro-provide ng additional information.",
            "zh": "在窗口模式下玩游戏或拥有两台或更多显示器的用户，可以从第二个屏幕中获得额外信息而受益。",
            "br": "Usuários jogando em modo janela ou que tenham dois ou mais monitores podem se beneficiar de uma segunda tela que provê informações adicionais."
        },
        "Monitor": {
            "en": "Monitor", // OK
            "de": "Monitor", // OK
            "fr": "Moniteur",
            "ru": "Монитор",
            "id": "Memantau",
            "fil": "Monitor",
            "zh": "监控",
            "br": "Monitor"
        },
        "Reposition": {
            "en": "Reposition", // OK
            "de": "Umpositionieren", // OK
            "fr": "Repositionnement",
            "ru": "Перестановка", //OP, long form: Изменение позиции"
            "id": "Reposisi",
            "fil": "Reposition",
            "zh": "重新定位",
            "br": "Reposicionamento"
        },
        "RepositionTooltip": {
            "en": "Reposition allows you to reposition infoboxes and timers on the screen. During repositioning the infoboxes and timers are deactivated.",
            "de": "Durch die Umpositionierung können Sie Infoboxen und Timer auf dem Bildschirm neu positionieren. Während der Neupositionierung sind die Infoboxen und Timer deaktiviert.",
            "fr": "Repositionnement vous permet de repositionner les infoboxes et les minuteries à l'écran. Lors du repositionnement, les boîtes d'information et les minuteries sont désactivées.",
            "ru": "Перемещение позволяет перемещать информационные блоки и таймеры на экране. Во время изменения положения инфобоксы и таймеры деактивируются.",
            "id": "Reposisi memungkinkan Anda untuk memposisikan ulang kotak informasi dan timer di layar. Selama reposisi infobox dan timer dinonaktifkan.",
            "fil": "Ang Reposition ay para pwede mong ma i-position ang mga infoboxes at timers sa screen. Habang nag re-reposition, ang mga infoboxes at timers ay naka deactivate.",
            "zh": "“重新定位”功能允许您在屏幕上重新定位信息框和计时器。在重新定位期间，信息框和计时器将会被停用。",
            "br": "Reposicionar permite que você reposicione caixas de informação e temporizadores na tela. Durante o reposicionamento as caixas de informação e os temporizadores serão desativados."
        },
        "ResetPosition": {
            "en": "Reset position", // OK
            "de": "Position", // OK
            "fr": "Position de réinitialisation",
            "ru": "Сбросить позицию", // OK
            "id": "Atur ulang posisi",
            "fil": "Reset position",
            "zh": "重置位置",
            "br": "Reconfigurar posição"
        },
        "RESET": {
            "en": "RESET", // OK
            "de": "ZURÜCKSETZEN", // OK
            "fr": "RÉINITIALISER",
            "ru": "СБРОС", // OK
            "id": "ATUR ULANG",
            "fil": "RESET",
            "zh": "重置",
            "br": "RECONFIGURAR"
        },
        "Language": {
            "en": "Language", // OK
            "de": "Sprache", // OK
            "fr": "Langue",
            "ru": "Язык", // OK
            "id": "Bahasa",
            "fil": "Wika",
            "zh": "语言",
            "br": "Idioma"
        },
        "Hotkeys": {
            "en": "Hotkeys", // OK
            "de": "Hotkeys", // OK
            "fr": "Raccourcis clavier",
            "ru": "Клавиши", // OK, version too long: "Горячие клавиши"
            "id": "Hotkeys",
            "fil": "Hotkeys",
            "zh": "热键",
            "br": "Teclas de atalho"
        },
        "HotkeysTooltip": {
            "en": "Hotkey to show & hide app. We recommend setting the hotkey for the Performance Tracker to the same as you use to show Dota's Scoreboard.",
            "de": "Hotkey zum Ein- und Ausblenden der App. Wir empfehlen, den Hotkey für den Performance Tracker auf den gleichen Wert einzustellen, den Sie zum Anzeigen von Dota's Scoreboard verwenden.",
            "fr": "Raccourci clavier pour afficher et masquer l'application. Nous vous recommandons de définir le raccourci clavier du traqueur de performances sur le même que celui que vous utilisez pour afficher le tableau des scores de Dota.",
            "ru": "Горячая клавиша для отображения и скрытия приложения. Мы рекомендуем установить горячую клавишу для отслеживания производительности так же, как вы используете для отображения табло Dota.",
            "id": "Hotkey untuk menampilkan & menyembunyikan aplikasi. Sebaiknya atur hotkey untuk Performance Tracker sama seperti yang Anda gunakan untuk menunjukkan Scoreboard Dota.",
            "fil": "Hotkey para makita o maitago ang app. Inirerekomenda namin na mag set ng hotkey para sa Performance Tracker sa katulad ng pag pakita ng Dota's Scoreboard.",
            "zh": "显示和隐藏应用程序的热键。我们建议将性能跟踪器的热键设置为与显示Dota记分牌时使用的快捷键相同。",
            "br": "Tecla de atalho para mostrar e ocultar o aplicativo. Recomendamos ajustar a tecla de atalho para o Rastreador de Performance para a mesma que você utiliza para mostrar o placar do Dota."
        },
        "ShowHideMainApp": {
            "en": "Show/hide main app", // OK
            "de": "App ein-/ausblenden", // OK
            "fr": "Afficher/masquer l'application principale",
            "ru": "Вид приложения", // OK, long form "Показать/скрыть главное приложение"
            "id": "Tampilkan/sembunyikan aplikasi utama",
            "fil": "Pakita/itago ang main app",
            "zh": "显示/隐藏主应用程序",
            "br": "Mostrar/ocultar o aplicativo"
        },
        "ShowHideSecondScreen": {
            "en": "Show/hide second screen", // OK
            "de": "Zweiter Bildschirm ein-/ausblenden", // OK
            "fr": "Afficher/masquer le deuxième écran",
            "ru": "Показать/скрыть второй экран", // OK
            "id": "Tampilkan/sembunyikan layar kedua",
            "fil": "Pakita/itago ang second sreen",
            "zh": "显示/隐藏第二个屏幕",
            "br": "Mostrar/ocultar segunda tela"
        },
        "ShowHideTimers": {
            "en": "Show/hide timers", // OK
            "de": "Timer ein-/ausblenden", // OK
            "fr": "Afficher/masquer les minuteries",
            "ru": "Показать/скрыть таймеры", // OK
            "id": "Tampilkan/sembunyikan timer",
            "fil": "Pakita/itago ang timer",
            "zh": "显示/隐藏计时器",
            "br": "Mostrar/ocultar temporizadores"
        },
          "ShowHidePerformanceTracker": {
            "en": "Show/hide performance tracker", // OK
            "de": "Performance-Tracker ein-/ausblenden", // OK
            "fr": "Afficher/masquer le suivi des performances",
            "ru": "Показать/скрыть трекер КПД", // OK, long form: "Показать/скрыть трекер производительности"
            "id": "Tampilkan/sembunyikan pelacak kinerja",
            "fil": "Pakita/itago ang performance tracker",
            "zh": "显示/隐藏绩效跟踪器",
            "br": "Mostrar/ocultar rastreador de performance"
        },

        // Ultimate window
        "Ultimate": {
            "en": "Ultimate",
            "de": "Ultimative",
            "fr": "Ultime",
            "ru": "Окончательный",
            "fil": "Ultimate",
            "zh": "最终技能",
            "id": "Ultimate",
            "br": "Ult"
        },
        "TIMING MODIFIERS": {
            "en": "TIMING MODIFIERS",
            "de": "TIMING-MODIFIKATOREN",
            "fr": "MODIFICATEURS DE TEMPORISATION",
            "ru": "МОДИФИКАТОРЫ СИНХРОНИЗАЦИИ",
            "id": "PENGUBAH WAKTU",
            "fil": "TIMING MODIFIERS",
            "zh": "时序修饰符",
            "br": "MODIFICADOR DE TEMPORIZADOR"
        },
        "Ultimate Level": {
            "en": "Ultimate Level",
            "de": "Ultimatives Level",
            "fr": "Niveau ultime",
            "ru": "Окончательный уровень",
            "id": "Tingkat Ultimate",
            "fil": "Ultimate Level",
            "zh": "最终技能等级",
            "br": "Nível do ult"
        },
        "Items": {
            "en": "Items",
            "de": "Artikel",
            "fr": "Objets",
            "ru": "Предметы",
            "id": "Item",
            "fil": "Items",
            "zh": "物品",
            "br": "Itens"
        },
        "Arcane Rune": {
            "en": "Arcane Rune",
            "de": "Arkane Rune",
            "fr": "Rune des arcanes",
            "ru": "Магическая руна",
            "id": "Rune Misteri",
            "fil": "Arcane Rune",
            "zh": "奥术符文",
            "br": "Runa Arcana"
        },
        "Talent": {
            "en": "Talent",
            "fr": "Talent",
            "de": "Talent",
            "ru": "Таланты",
            "id": "Bakat",
            "fil": "Talent",
            "zh": "天赋",
            "br": "Talento"
        },
        "level": {
            "en": "level",
            "fr": "niveau",
            "de": "Niveaus",
            "ru": "уровень",
            "id": "level",
            "fil": "level",
            "zh": "级别",
            "br": "nível"
        },
        "No delay": {
            "en": "No delay",
            "de": "Keine Verzögerung",
            "fr": "Pas de retard",
            "ru": "Без задержек",
            "id": "Tidak ada penundaan",
            "fil": "No delay",
            "zh": "无延迟",
            "br": "Sem espera"
        },
        "sec": {
            "en": "sec",
            "de": "Sekunde",
            "fr": "seconde",
            "ru": "сек",
            "id": "detik",
            "fil": "sec",
            "zh": "秒",
            "br": "segundo"
        },
        "Adjustment": {
            "en": "Adjustment",
            "de": "Anpassung",
            "fr": "Ajustement",
            "ru": "Регулировка",
            "id": "Penyesuaian",
            "fil": "Adjustment",
            "zh": "校准",
            "br": "Ajustes"
        },
        "Apply to all": {
            "en": "Apply to all",
            "de": "Auf alle anwenden",
            "fr": "Appliquer à tous",
            "ru": "Применить ко всем",
            "id": "Terapkan untuk semua",
            "fil": "Apply to all",
            "zh": "全部应用",
            "br": "Aplicar a todos"
        },
        "Buyback": {
            "en": "Buyback",
            "de": "Rückkauf",
            "fr": "Rachat",
            "ru": "Выкуп",
            "id": "Buyback",
            "fil": "Buyback",
            "zh": "买活",
            "br": "Reviver"
        },

        // Display of error message
        "ERROR": {
            "en": "ERROR",
            "de": "FEHLER",
            "fr": "ERREUR",
            "ru": "ОШИБКА",
            "id": "KESALAHAN",
            "fil": "ERROR",
            "zh": "错误",
            "br": "ERRO"
        }
    }
}
