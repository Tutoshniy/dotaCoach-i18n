export default {
  OverlayEnabled:
    "Der Overlay für Dota 2 muss in Overwolf aktiviert werden. Bitte aktualisiere die Overwolf-Einstellungen.",
  OverlayEnabledSettings: "OPEN SETTINGS",
  OverlayEnabledRestart:
    "Du hast das Dota 2-Overlay erfolgreich aktiviert. Bitte schließe Dota Coach, Overwolf und Dota 2 und öffnen es dann erneut, damit die Änderung wirksam wird.",

  GameStateIntegration:
    "Dota Coach benötigt Zugriff auf die von Dota 2 bereitgestellte Game State Integration API. Bitte stell sicher, dass du „-gamestateintegration“ zu den Startoptionen von Dota 2 hinzugefügt hast.",
  GameStateIntegrationTypo:
    "Es gibt einen Tippfehler in deinen Dota 2-Startoptionen für Game State Integration. Bitte ersetze ''{typo}'' durch '-gamestateintegration'.",
  GameStateIntegrationMore: "MEHR INFO",

  LaunchDota:
    "Starte Dota 2 um die Appfunktionen wie Spielerstatistiken, Timern, Performance Tracking und Coaching zu nutzen.",
  DotaConnectivityStart: "Verbindung zu Dota 2 wird hergestellt...",
  DotaConnectivityStatus:
    "Verbindung zu Dota 2 wird hergestellt...<br></br>Aktueller Stand: ''{currentStatus}'' ({attempt}/{maxAttempts} Versuchen)",
  DotaConnectivityError:
    "Verbindung zu Dota 2 konnte nicht hergestellt werden.<br></br>Bitte versuche es später erneut.<br></br>(Fehler: ''{finalStatus}'')",
  DotaConnectivityMissingEvents:
    "Die Verbindung zu Dota 2 konnte nicht  alle erforderlichen Ereignisse registrieren. <br></br>Bitte starte die App später erneut.<br></br>(fehlende Ereignisse: ''{missingEvents}'')",
  DotaConnectivityFailed:
    "Die Verbindung zu Dota 2 ist unterbrochen. Wir arbeiten an einer Lösung, bitte versuche es später erneut.",
  DotaConnectivityCrashed:
    "Die Verbindung zu Dota ist abgestürzt. Bitte versuche die App neu zu starten.",
  DotaConnectivityUnknownError: "Die Verbindung zu Dota 2 hat einen unbekannten Fehler ({error}).",

  QuickStart: "Schneller Einstieg",
  QuickStartMessage: `
    <p>
      Füge '-gamestateintegration' zu deinen Dota-Startoptionen hinzu (<a_GSI>Klicke hier für weitere Informationen</a_GSI>).
    </p>
    <p>
      Passe Dota Coach an deine Bedürfnisse an. Gehe dafür zum Einstellungsmenü in der oberen rechten Ecke!
    </p>
    <hr></hr>
    <p>
      Interagiere während des Spiels mit Timern und Infoboxen, um dir einen Vorteil zu verschaffen:
    </p>
    <ul>
      <li>Drücke <b>LINKSKLICK</b> um Roshan-, Glyph-, Buyback- und Ultimate-Timer zu starten.</li>
      <li>Drücke <b>das rote X</b> um Roshan-, Glyph-, Buyback- und Ultimate-Timer zu stoppen.</li>
      <li>rücke <b>LINKSKLICK</b> drücken um Infoboxen am oberen Bildschirmrand zu öffnen.</li>
    </ul>
    <hr></hr>
    <p>
      Du bist jetzt ein wichtiges Mitglied der Dota Coach-Community und wir möchten von dir hören:
    </p>
    <ul>
      <li>Tritt unserem <a_discord>Discord Server</a_discord> bei, um direkt mit uns zu sprechen, gleichgesinnte Spieler zu finden und Ideen einzubringen!</li>
      <li>Tritt unserem <a_reddit>Subreddit</a_reddit> bei oder folge uns in den <a_twitter>sozialen Medien</a_twitter>!</li>
    </ul>
    <hr></hr>
    <p>
      Hast du noch Fragen? Keine Sorge, wir haben alles für dich bereit:
    </p>
    <ul>
      <li><a_FAQs>FAQ</a_FAQs></li>
      <li><a_heropedia>Heropedia</a_heropedia></li>
    </ul>
    <hr></hr>
    <p>
      Möchtest du alle Funktionalitäten von Dota Coach in 3 Minuten kennenlernen? Dann schaue dir unser Tutorial-Video an: <a_tutorial_video>Video</a_tutorial_video>
    </p>`,
  UseInfoboxes: "So verwendest du Infoboxen",
  UseInfoboxesMessage: `
    <p>
      Klicke mit der linken Maustaste auf die Infoboxen über den Spielern, um Statistiken anzuzeigen.
    </p>
    <p>
      Sobald ein Spieler einen Helden ausgewählt hat, werden weitere relevante Informationen angezeigt.
    </p>
    <p>
      Hinweis: Statistiken werden für Spieler mit öffentlichen Profilen angezeigt.
    </p>`,
  ActivateTimers: "So aktivierst du Timer",
  ActivateTimersMessage: `
    <p>
      LINKSKLICK aktiviert Roshan, Glyph, Buybacks, Ultimate-Timer und Infoboxen
    </p>
    <p>
      Beachte, dass Ultimate-Timer nur für Abonnenten verfügbar sind.
    </p>`,
  ShareTimers: "So teilst und stoppst du Timer",
  ShareTimersMessage: `
    <p>
      Herzlichen Glückwünsch! Du hast den {timer} Timer erfolgreich aktiviert!
    </p>
    <p>
      LINKSKLICKE auf den Timer, um ihn mit anderen Spielern zu teilen. Klicke auf das rote X, um ihn zu stoppen.
    </p>`,

  AppUpgraded: "App wurde auf Version {version} aktualisiert",
};
