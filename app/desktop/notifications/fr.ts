export default {
  OverlayEnabeld:
    "Dota Coach a besoin que l'overlay pour Dota 2 soit activé dans Overwolf. Mets à jour le paramètre dans Overwolf.",
  OverlayEnabeldSettings: "OPEN SETTINGS",
  OverlayEnabeldRestart:
    "Vous avez activé la superposition Dota 2 avec succès. Veuillez fermer et rouvrir Dota Coach, Overwolf et Dota 2 pour que le changement soit effectif.",

  GameStateIntegration:
    "Dota Coach doit avoir accès à l'API Game State Integration fournie par Dota 2. Assure-toi d'ajouter « - gamestateintegration » aux options de lancement de Dota 2.",
  GameStateIntegrationTypo:
    "Il y a une faute de frappe dans tes options de lancement Dota 2 pour Game State Integration. Remplace « {typo} » par « -gamestateintegration ».",
  GameStateIntegrationMore: "PLUS D'INFO",

  LaunchDota:
    "Lance Dota 2 pour bénéficier des fonctionnalités de l'app telles que les statistiques des joueurs, les chronomètres, le suivi des performances et le coaching.",
  DotaConnectivityStart: "Connexion à Dota 2 en cours...",
  DotaConnectivityStatus:
    "Connexion à Dota 2...<br></br>État actuel : ''{currentStatus}'' ({attempt}/{maxAttempts} tentatives)",
  DotaConnectivityError:
    "La connexion à Dota 2 n'a pas pu être établie.<br></br>Réessaye plus tard.<br></br>(Erreur: « {finalStatus} »)",
  DotaConnectivityMissingEvents:
    "La connexion à Dota 2 n'a pas pu s'inscrire à tous les événements requis.<br></br>Réessaye de redémarrer l'application plus tard.<br></br > (événements manquants: ''{missingEvents}'') ",
  DotaConnectivityFailed:
    "La connexion à Dota 2 est interrompue. Nous travaillons sur un correctif, nous the prions de réessayer plus tard.",
  DotaConnectivityCrashed: "La connexion à Dota s'est écrasée. Essaye de relancer l'application.",
  DotaConnectivityUnknownError: "La connexion à Dota 2 a une erreur inconnue({ error }).",

  QuickStart: "Démarrage rapide",
  QuickStartMessage: `
    <p>
      Assurez-vous d'ajouter « -gamestateintegration » à vos options de lancement Dota (<a_GSI>Cliquez ici pour afficher le guide</a_GSI>).
    </p>
    <p>
      Personnalisez Dota Coach selon vos besoins. Rendez-vous dans le menu des paramètres en haut à droite !
    </p>
    <hr></hr>
    <p>
      Interagie avec les minuteurs et les boîtes d'information pendant le jeu pour obtenir un avantage concurrentiel :
    </p>
    <ul>
      <li>Appuye <b>sur LEFT-CLIC</b> pour démarrer Roshan, Glyh-, Buyback-, Ultimate-Timers.</li>
      <li>Appuye sur <b>le X rouge</b> pour arrêter Roshan-, Glyh-, Buyback-, Ultimate-Timers.</li>
      <li>Appuye sur le <b>bouton GAUCHE</b> pour ouvrir les boîtes d'information en haut et sur la minicarte.</li>
    </ul>
    <hr></hr>
    <p>
      Tu es maintenant un membre important de la communauté des entraîneurs Dota et nous voulons avoir de vos nouvelles :
    </p>
    <ul>
      <li>Rejoigne notre <a_discord>serveur Discord</a_discord> pour parler directement avec nos entraîneurs professionnels, trouver des joueurs partageant les mêmes idées et suggérer des changements d'entraîneur Dota !</li>
      <li>Rejoigne notre <a_reddit>Subreddit</a_reddit> ou suis Dota Coach sur les <a_twitter>réseaux sociaux</a_twitter> pour recevoir des mises à jour en direct sur les changements et améliorations à venir !</li>
    </ul>
    <hr></hr>
    <p>
      Tu as encore des questions ? Pas de soucis, nous avons ce qu'il te faut :
    </p>
    <ul>
      <li><a_FAQs>FAQ</a_FAQs></li>
      <li><a_heropedia>Heropedia</a_heropedia></li>
    </ul>
    <hr></hr>
    <p>
      Vous voulez libérer toute la puissance de Dota Coach en 3 minutes ? Regardez la vidéo complète du guide : <a_tutorial_video>Vidéo du guide</a_tutorial_video>
    </p>`,
  UseInfoboxes: "Comment utiliser les infobox",
  UseInfoboxesMessage: `
    <p>
      CLIQUE GAUCHE sur les infoboxes au-dessus des joueurs pour voir leurs statistiques.
    </p>
    <p>
      Une fois qu'un joueur a sélectionné un héros, tu verras d'autres informations pertinentes.
    </p>
    <p>
      Remarque : les statistiques sont affichées pour les joueurs avec des profils publics.
    </p>`,
  ActivateTimers: "Comment activer les minuteries",
  ActivateTimersMessage: `
    <p>
      LE CLIC GAUCHE activera Roshan, Glyph, Buybacks, Ultimate timers et Infoboxes
    </p>
    <p>
      Notez que les minuteurs Ultimate ne sont disponibles que pour les abonnés.
    </p>`,
  ShareTimers: "Comment partager et arrêter les minuteurs",
  ShareTimersMessage: `
    <p>
      Toutes nos félicitations! Tu as activé avec succès le minuteur {timer} !
    </p>
    <p>
      CLIQUE GAUCHE sur le minuteur pour le partager avec tes amis. Cliquez sur le X rouge pour l'arrêter.
    </p>`,

  AppUpgraded: "Mise à jour vers la version {version}",
};
