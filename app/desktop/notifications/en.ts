export default {
  // Olverlay in Overwolf
  OverlayEnabeld:
    "Dota Coach needs overlay for Dota 2 to be enabled in Overwolf. Please update Overwolf settings.",
  OverlayEnabeldSettings: "OPEN SETTINGS",
  OverlayEnabeldRestart:
    "You successfully enabled the Dota 2 overlay. Please close and reopen Dota Coach, Overwolf and Dota 2 for the change to take effect.",

  // GameStateIntegration in Steam
  GameStateIntegration:
    "Dota Coach needs access to the Game State Integration API provided by Dota 2. Please make sure to add '-gamestateintegration' to Dota 2 launch options.",
  GameStateIntegrationTypo:
    "There is a typo in your Dota 2 launch options for Game State Integration. Please replace ''{typo}'' with '-gamestateintegration'.",
  GameStateIntegrationMore: "MORE INFO",

  // Launching Dota 2
  LaunchDota:
    "Launch Dota 2 to benefit from in-game features such as player stats, timers, performance tracking and coaching.",
  // Connecting to Dota 2
  DotaConnectivityStart: "Connecting to Dota 2...",
  DotaConnectivityStatus:
    "Connecting to Dota 2...<br></br>Current status: ''{currentStatus}'' ({attempt}/{maxAttempts} attempts)",
  DotaConnectivityError:
    "Connection to Dota 2 could not be established.<br></br>Please try to restart app again later.<br></br>(error: ''{finalStatus}'')",
  DotaConnectivityMissingEvents:
    "Connection to Dota 2 could not register to all required events. <br></br>Please try to restart app again later.<br></br>(missing events: ''{missingEvents}'')",
  // Plugin errors
  // {"plugin_error": "failed_initializing_monitor"}
  DotaConnectivityFailed:
    "Connection to Dota 2 is disrupted. We are working on a fix, please try again later.",
  // {"plugin_error":"crashed_on_present"}
  DotaConnectivityCrashed: "Connection to Dota 2 crashed. Please try to relaunch app.", // May be we should try to reconnect in the app?!
  // {"plugin_error": <all other messages>}
  DotaConnectivityUnknownError: "Connection to Dota 2 has unknown error ({error}).",

  // First Time User Experience
  // 0) Quick start guide
  QuickStart: "Quick Start",
  QuickStartMessage: `
    <p>
      Make sure to add '-gamestateintegration' to your Dota launch options (<a_GSI>click here to see guide</a_GSI>).
    </p>
    <p>
      Costumize Dota Coach to your needs. Head to the settings menu in the top right corner!
    </p>
    <hr></hr>
    <p>
      Interact with timers and infoboxes during the game to get the competetive edge:
    </p>
      <ul>
        <li>Press <b>LEFT-CLICK</b> to start Roshan-, Glyph-, Buyback-, Ultimate-Timers.</li>
        <li>Press <b>the red X</b> to stop Roshan-, Glyph-, Buyback-, Ultimate-Timers.</li>
        <li>Press <b>LEFT-CLICK</b> to open infoboxes at the top and at the minimap.</li>
      </ul>
    <hr></hr>
    <p>
      You are now an important member of the Dota Coach community and we want to hear from you:
    </p>
      <ul>
        <li>Join our <a_discord>Discord Server</a_discord> to speak directly with us, find like-minded players and suggest Dota Coach changes!</li>
        <li>Join our <a_reddit>Subreddit</a_reddit> or follow Dota Coach on <a_twitter>Social Media</a_twitter> to get live updates on upcoming changes and improvements!</li>
      </ul>
    <hr></hr>
    <p>
      Still got questions? No worries, we got you covered:
    </p>
      <ul>
        <li><a_FAQs>FAQ</a_FAQs></li>
        <li><a_heropedia>Heropedia</a_heropedia></li>
      </ul>
    <hr></hr>
    <p>
      Do you want to unleash the full power of Dota Coach in 3 minutes? Watch our video guide: <a_tutorial_video>Video Guide</a_tutorial_video>
    </p>`,
  // 1) Infoboxes
  UseInfoboxes: "How to use Infoboxes",
  UseInfoboxesMessage: `
    <p>
      LEFT-CLICK on infoboxes above players to see their stats.
    </p>
    <p>
      Once a player selected a hero you will see other relevante information.
    </p>
    <p>
      Note: Stats are shown for players with public profiles.
    </p>`,
  // 2) Activate Timers
  ActivateTimers: "How to activate Timers",
  ActivateTimersMessage: `
    <p>
      LEFT-CLICK will activate Roshan, Glyph, Buybacks, Ultimate timers and Infoboxes
    </p>
    <p>
      Note that Ultimate timers are only available to subscribers.
    </p>`,
  // 3) Share Timers
  ShareTimers: "How to share and stop Timers",
  ShareTimersMessage: `
    <p>
      Congratulations! You successfully activated the {timer} timer!
    </p>
    <p>
      LEFT-CLICK on the timer to share it with your friends. Click on red X to stop it.
    </p>`,

  // App Management (note that release updates are only provided in english)
  AppUpgraded: "App upgraded to Version {version}",
  Release_1_3_0: `
    <p>
      App was upgraded to bla bla
    </p>`,
};
